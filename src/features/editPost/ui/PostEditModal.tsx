"use client";

import React, { useState, useRef, useMemo } from "react";
import cn from "@/shared/lib/cn";
import { TextField } from "@/shared/ui/TextField/TextField";
import { TextBox } from "@/shared/ui/TextBox/TextBox";
import { DropDown } from "@/shared/ui/DropDown/DropDown";
import Button from "@/shared/ui/Button/Button";
import Image from "next/image";
import imageSelectIcon from "@/shared/images/image-select.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { apiFetch } from "@/shared/api/fetcher";
import { uploadImage } from "@/shared/api/uploadImage";

const ImageSwiperSlide = (
  idx: number,
  url: string,
  onRemoveButtonClick: (idx: number) => void,
) => {
  return (
    <SwiperSlide
      key={`${url}-${idx}`}
      className="xl:w-[100px]bg-blue flex h-[70px] w-[70px] items-center justify-center md:h-[100px] md:w-[100px] xl:h-[100px]"
    >
      <div className="relative mx-auto h-[70px] w-[70px] md:h-[100px] md:w-[100px] xl:h-[100px] xl:w-[100px]">
        <Image
          src={url}
          alt={`preview-${idx}`}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
        <button
          type="button"
          className="absolute top-0.5 right-0.5 rounded-full bg-black/50 p-1"
          onClick={() => onRemoveButtonClick(idx)}
        >
          <Image src="icons/delete.svg" alt="삭제" width={10} height={10} />
        </button>
      </div>
    </SwiperSlide>
  );
};
export interface PostEditModalProps {
  postId: number;
  title: string;
  price: number;
  category: string;
  description: string;
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
  description: initDescription,
  images: initImages,
  className,
  onClose,
  onEdit,
  onError,
}: PostEditModalProps) => {
  const [imageUrls, setImageUrls] = useState<string[]>(initImages);
  const [images, setImages] = useState<File[]>([]);
  const [title, setTitle] = useState(initTitle);
  const [price, setPrice] = useState<number | "">(initPrice);
  const [category, setCategory] = useState(initCategory);
  const [description, setDescription] = useState(initDescription);

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
    const files = e.target.files;
    if (files) {
      setImages((prev) => [...prev, ...Array.from(files)]);
      e.target.value = ""; // input 값 초기화
    }
  };

  const handleRemoveImageUrl = (index: number) => {
    setImageUrls((prev) => prev.filter((_, i) => i !== index));
  };
  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    try {
      if (
        !title ||
        !price ||
        !category ||
        !description ||
        (imageUrls.length === 0 && images.length === 0)
      )
        return;

      //새로 추가한 이미지 URL 배열 생성
      const uploadedImageUrlArray: string[] = [];
      for (const file of images) {
        const uploadedImageUrl = await uploadImage(file);
        uploadedImageUrlArray.push(uploadedImageUrl);
      }

      const body = {
        title,
        price,
        content: description,
        category,
        images: [...imageUrls, ...uploadedImageUrlArray],
      };

      const res = await apiFetch(`/api/postings${postId}`, {
        method: "PATCH",
        body: JSON.stringify(body),
      });

      console.log("게시글 수정 성공! : ", res);
      onEdit?.();
    } catch (error) {
      console.error("게시글 수정 실패 : ", error);
      const message = error instanceof Error ? error.message : String(error);
      onError?.(message);
    }
  };
  const widthClass = "w-[290px] md:w-[510px] xl:w-[540px]";
  const imageSwiper = useMemo(
    () => (
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={3}
        navigation={true}
        className="flex flex-1 items-center justify-center rounded-lg"
      >
        {imageUrls.map((url, idx) =>
          ImageSwiperSlide(idx, url, handleRemoveImageUrl),
        )}
        {images.map((file, idx) =>
          ImageSwiperSlide(idx, URL.createObjectURL(file), handleRemoveImage),
        )}
      </Swiper>
    ),
    [imageUrls, images],
  );

  return (
    <div
      className={cn(
        "bg-black-950 fixed inset-0 z-50 flex items-center justify-center",
        "overflow-auto p-4",
        className,
      )}
    >
      <div className="bg-black-900 bg-black-800 relative flex w-[335px] max-w-[620px] flex-col gap-7 rounded-lg p-6 md:w-[590px] md:p-10 xl:w-[620px] xl:p-10">
        <button
          type="button"
          className="absolute top-4 right-4"
          onClick={onClose}
        >
          <Image src="icons/delete.svg" alt="닫기" width={24} height={24} />
        </button>

        <h2 className="text-lg font-semibold text-white">게시물 수정</h2>

        <div className="flex items-center gap-4">
          <label
            className="bg-black-800 flex h-[50px] w-[50px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg md:h-[70px] md:w-[70px] xl:h-[70px] xl:w-[70px]"
            onClick={() => inputRef.current?.click()}
          >
            <Image
              src={imageSelectIcon}
              alt="이미지 선택"
              className="h-8 w-8"
              width={32}
              height={32}
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

          {(imageUrls.length > 0 || images.length > 0) && imageSwiper}
        </div>

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
          disabled={!title || !price || !category || !description}
          onClick={handleSubmit}
          className={cn("mt-4", widthClass)}
        >
          수정하기
        </Button>
      </div>
    </div>
  );
};
