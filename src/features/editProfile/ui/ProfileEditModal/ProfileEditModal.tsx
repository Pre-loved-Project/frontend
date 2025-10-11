"use client";

import React, { useState } from "react";
import Image from "next/image";
import cn from "@/shared/lib/cn";
import { ProfileImageChangeInput } from "../ProfileImageChangeInput/ProfileImageChangeInput";
import { Input } from "@/entities/user/ui/Input/Input";
import { TextBox } from "@/shared/ui/TextBox/TextBox";
import { DropDown } from "@/shared/ui/DropDown/DropDown";
import Button from "@/shared/ui/Button/Button";

interface ProfileEditModalProps {
  imageUrl?: string;
  nickname: string;
  introduction?: string;
  category?: string;
  className?: string;
  onClose?: () => void;
  onSave?: () => void;
  onError?: () => void;
}

export const ProfileEditModal = ({
  imageUrl,
  nickname: initialNickname,
  introduction: initialIntroduction,
  category: initialCategory,
  className,
  onClose,
  onSave,
  onError,
}: ProfileEditModalProps) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [nickname, setNickname] = useState(initialNickname);
  const [introduction, setIntroduction] = useState(initialIntroduction ?? "");
  const [category, setCategory] = useState(initialCategory ?? "");

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

  return (
    <div
      className={cn(
        "bg-black-900 relative flex flex-col rounded-lg",
        "w-[300px] gap-[15px] p-5",
        "md:w-[520px] md:gap-[20px] md:p-10",
        "xl:w-[620px] xl:gap-[30px] xl:p-10",
        className,
      )}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-3 right-3"
      >
        <Image src="icons/delete.svg" alt="닫기" width={24} height={24} />
      </button>

      <h2 className="mb-6 text-lg font-semibold text-white">프로필 수정</h2>

      <div className="flex w-full flex-col items-start gap-2">
        <label className="text-sm font-medium text-white">프로필 이미지</label>
        <ProfileImageChangeInput imgUrl={imageUrl} onChange={setImageFile} />
      </div>

      <div className="flex flex-col items-start gap-2">
        <label className="text-sm font-medium text-white">닉네임</label>
        <Input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-[260px] xl:w-[540px]"
        />
      </div>

      <div className="flex w-full flex-col items-start gap-2">
        <label className="text-sm font-medium text-white">자기소개</label>
        <TextBox
          value={introduction}
          placeholder="자기소개를 입력하세요..."
          onChange={(e) => setIntroduction(e.target.value)}
          className="w-[260px] md:w-[440px] xl:w-[540px]"
        />
      </div>

      <div className="flex w-full flex-col items-start gap-2">
        <label className="text-sm font-medium text-white">카테고리</label>
        <DropDown
          value={category}
          onChange={(val) => setCategory(val as string)}
          options={categoryOptions}
          className="w-[260px] md:w-[440px] xl:w-[540px]"
        />
      </div>

      <div className="mt-auto flex w-full">
        <Button
          className="mt-3 md:w-[440px]"
          variant="primary"
          onClick={() => {
            //TODO: IMG 저장 API , 유저 정보 수정 API 호출,
          }}
        >
          저장하기
        </Button>
      </div>
    </div>
  );
};
