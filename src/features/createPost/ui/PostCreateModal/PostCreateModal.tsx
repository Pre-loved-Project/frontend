"use client";

import React, { useState, useRef, useEffect } from "react";
import cn from "@/shared/lib/cn";
import { TextField } from "@/shared/ui/TextField/TextField";
import { TextBox } from "@/shared/ui/TextBox/TextBox";
import { DropDown } from "@/shared/ui/DropDown/DropDown";
import Button from "@/shared/ui/Button/Button";
import Image from "next/image";
import { LoadingDots } from "@/shared/ui/Loading/LoadingDots";
import { apiFetch } from "@/shared/api/fetcher";
import { uploadImage } from "@/shared/api/uploadImage";

export interface PostCreateModalProps {
  className?: string;
  onClose?: () => void;
  onCreate?: () => void;
  onError?: (message: string) => void;
}

interface PreviewImage {
  file: File;
  previewUrl: string;
}

export const PostCreateModal = ({
  className,
  onClose,
  onCreate,
  onError,
}: PostCreateModalProps) => {
  const [images, setImages] = useState<PreviewImage[]>([]);
  const [imageError, setImageError] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const categoryOptions = [
    "전자제품/가전제품",
    "식료품",
    "의류/패션",
    "스포츠/레저",
    "뷰티/화장품",
    "게임",
    "도서/음반/문구",
    "티켓/쿠폰",
    "리빙/가구/생활",
    "반려동물/취미",
  ].map((cat) => ({ label: cat, value: cat }));

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (!files || files.length === 0) return;

    const selected: PreviewImage[] = Array.from(files).map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...selected]);
    setImageError(null);
    e.target.value = "";
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => {
      URL.revokeObjectURL(prev[index].previewUrl);
      return prev.filter((_, i) => i !== index);
    });
  };

  useEffect(() => {
    return () => {
      images.forEach((img) => URL.revokeObjectURL(img.previewUrl));
    };
  }, [images]);

  const handleSubmit = async () => {
    try {
      if (!title || !price || !category) return;
      if (images.length === 0) {
        setImageError(
          "이미지가 추가되지 않았습니다. 최소 1개의 이미지를 추가해주세요.",
        );
        return;
      }
      setIsLoading(true);

      const uploadedImageUrlArray: string[] = [];
      for (const img of images) {
        const uploadedImageUrl = await uploadImage(img.file);
        uploadedImageUrlArray.push(uploadedImageUrl);
      }

      const body = {
        title,
        price,
        content: description,
        category,
        images: uploadedImageUrlArray,
      };

      await apiFetch("/api/postings", {
        method: "POST",
        body: JSON.stringify(body),
      });

      onCreate?.();
    } catch (error) {
      if (error instanceof Error) {
        onError?.(error.message);
      } else {
        onError?.(String(error));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const widthClass = "w-[290px] md:w-[510px] xl:w-[540px]";

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center",
        "overflow-auto p-4",
        className,
      )}
    >
      <div className="bg-black-900 relative flex w-[335px] max-w-[620px] flex-col gap-7 rounded-lg p-6 md:w-[590px] md:p-10 xl:w-[620px] xl:p-10">
        <button
          type="button"
          className="absolute top-4 right-4"
          onClick={onClose}
        >
          <img
            src="/icons/delete.svg"
            alt="닫기"
            className="h-6 w-6 text-gray-600 hover:cursor-pointer"
          />
        </button>

        <h2 className="text-lg font-semibold text-white">게시물 추가</h2>

        <div className="scrollbar-hide flex items-center gap-4 overflow-x-auto">
          <label
            className="bg-black-800 flex h-[50px] w-[50px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg md:h-[70px] md:w-[70px]"
            onClick={() => inputRef.current?.click()}
          >
            <img
              src="/icons/image-select.svg"
              alt="이미지 선택"
              className="h-8 w-8"
            />
          </label>

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileSelect}
            className="hidden"
          />

          <div className="scrollbar-hide flex gap-3 overflow-x-auto py-1">
            {images.map((img, idx) => (
              <div
                key={img.previewUrl}
                className="relative h-[70px] w-[70px] shrink-0 md:h-[100px] md:w-[100px]"
              >
                <Image
                  src={img.previewUrl}
                  alt={`preview-${idx}`}
                  fill
                  unoptimized
                  className="rounded-lg object-cover"
                />

                <button
                  type="button"
                  className="absolute top-0.5 right-0.5 rounded-full bg-black/50 p-1"
                  onClick={() => handleRemoveImage(idx)}
                >
                  <img
                    src="/icons/delete.svg"
                    alt="삭제"
                    className="h-2.5 w-2.5"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
        {imageError && (
          <span
            className={cn(
              "text-[12px] md:text-[12px] xl:text-[14px]",
              "text-red",
            )}
          >
            {imageError}
          </span>
        )}

        <TextField
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={widthClass}
        />

        <TextField
          placeholder="가격을 입력해주세요"
          type="number"
          value={price}
          onChange={(e) => {
            const value = Number(e.target.value);
            setPrice(Number.isNaN(value) ? "" : value);
          }}
          className={widthClass}
        />

        <DropDown
          placeholder="카테고리"
          value={category}
          onChange={(val) => setCategory(val as string)}
          options={categoryOptions}
          className={widthClass}
        />

        <TextBox
          value={description}
          placeholder="상품 설명을 입력하세요..."
          onChange={(e) => setDescription(e.target.value)}
          className={widthClass}
        />

        <Button
          variant="primary"
          disabled={isLoading || !title || !price || !category || !description}
          onClick={handleSubmit}
          className={cn("mt-4", widthClass)}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              추가 중 <LoadingDots />
            </span>
          ) : (
            "추가하기"
          )}
        </Button>
      </div>
    </div>
  );
};
