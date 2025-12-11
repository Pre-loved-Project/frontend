"use client";

import React, { useState, useRef, useMemo } from "react";
import cn from "@/shared/lib/cn";
import { TextField } from "@/shared/ui/TextField/TextField";
import { TextBox } from "@/shared/ui/TextBox/TextBox";
import { DropDown } from "@/shared/ui/DropDown/DropDown";
import Button from "@/shared/ui/Button/Button";
import Image from "next/image";
import { LoadingDots } from "@/shared/ui/Loading/LoadingDots";
import { apiFetch } from "@/shared/api/fetcher";
import { uploadImage } from "@/shared/api/uploadImage";

const ImageItem = (
  idx: number,
  url: string,
  onRemove: (idx: number) => void,
) => {
  return (
    <div
      key={`${url}-${idx}`}
      className="relative h-[70px] w-[70px] shrink-0 md:h-[100px] md:w-[100px] xl:h-[100px] xl:w-[100px]"
    >
      <Image
        src={url}
        alt={`preview-${idx}`}
        fill
        className="rounded-lg object-cover"
      />

      <button
        type="button"
        className="absolute top-0.5 right-0.5 flex items-center justify-center rounded-full bg-black/50 p-1"
        onClick={() => onRemove(idx)}
      >
        <img src="/icons/delete.svg" alt="삭제" className="h-2.5 w-2.5" />
      </button>
    </div>
  );
};

export interface PostEditModalProps {
  postId: number;
  title: string;
  price: number;
  category: string;
  content: string;
  images: string[];
  className?: string;
  onClose?: () => void;
  onEdit?: () => void;
  onError?: (message: string) => void;
}

export const PostEditModal = ({
  postId,
  title: initTitle,
  price: initPrice,
  category: initCategory,
  content: initContent,
  images: initImages,
  className,
  onClose,
  onEdit,
  onError,
}: PostEditModalProps) => {
  const [imageUrls, setImageUrls] = useState<string[]>(initImages);
  const [images, setImages] = useState<File[]>([]);
  const [imageChanged, setImageChanged] = useState<boolean>(false);
  const [imageError, setImageError] = useState<string | null>(null);
  const [title, setTitle] = useState(initTitle);
  const [price, setPrice] = useState<number | "">(initPrice);
  const [category, setCategory] = useState(initCategory);
  const [content, setContent] = useState(initContent);
  const [isLoading, setIsLoading] = useState(false);

  const isChanged =
    imageChanged ||
    title !== initTitle ||
    price !== initPrice ||
    category !== initCategory ||
    content !== initContent;

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

    const selected = Array.from(files);
    setImages((prev) => [...prev, ...selected]);
    e.target.value = "";
    setImageChanged(true);
    setImageError(null);
  };

  const handleRemoveImageUrl = (idx: number) => {
    setImageUrls((prev) => prev.filter((_, i) => i !== idx));
    setImageChanged(true);
  };

  const handleRemoveImage = (idx: number) => {
    setImages((prev) => prev.filter((_, i) => i !== idx));
    setImageChanged(true);
  };

  const handleSubmit = async () => {
    if (!isChanged) return;

    try {
      if (!title || !price || !category || !content) return;
      if (imageUrls.length === 0 && images.length === 0) {
        setImageError(
          "이미지가 추가되지 않았습니다. 최소 1개의 이미지를 추가해주세요.",
        );
        return;
      }

      setIsLoading(true);

      const uploadedImageUrlArray: string[] = [];
      for (const file of images) {
        const url = await uploadImage(file);
        uploadedImageUrlArray.push(url);
      }

      const body = {
        title,
        price,
        content,
        category,
        images: [...imageUrls, ...uploadedImageUrlArray],
      };

      await apiFetch(`/api/postings/${postId}`, {
        method: "PATCH",
        body: JSON.stringify(body),
      });

      onEdit?.();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      onError?.(message);
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
            className="h-6 w-6 hover:cursor-pointer"
          />
        </button>

        <h2 className="text-lg font-semibold text-white">게시물 수정</h2>

        <div className="flex items-center gap-4">
          <label
            className="bg-black-800 flex h-[50px] w-[50px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg md:h-[70px] md:w-[70px] xl:h-[70px] xl:w-[70px]"
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

          {(imageUrls.length > 0 || images.length > 0) && (
            <div className="no-scrollbar flex gap-3 overflow-x-auto pr-2">
              {imageUrls.map((url, idx) =>
                ImageItem(idx, url, handleRemoveImageUrl),
              )}

              {images.map((file, idx) =>
                ImageItem(idx, URL.createObjectURL(file), handleRemoveImage),
              )}
            </div>
          )}
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
          value={content}
          placeholder="상품 설명을 입력하세요..."
          onChange={(e) => setContent(e.target.value)}
          className={widthClass}
        />

        <Button
          variant="primary"
          disabled={
            isLoading || !title || !price || !category || !content || !isChanged
          }
          onClick={handleSubmit}
          className={cn("mt-4", widthClass)}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              수정 중 <LoadingDots />
            </span>
          ) : (
            "수정하기"
          )}
        </Button>
      </div>
    </div>
  );
};
