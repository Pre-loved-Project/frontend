"use client";

import React from "react";
import Image from "next/image";
import cn from "@/shared/lib/cn";
import { ProfileImageChangeInput } from "../ProfileImageChangeInput/ProfileImageChangeInput";
import { Input } from "@/entities/user/ui/Input/Input";
import { TextBox } from "@/shared/ui/TextBox/TextBox";
import { DropDown } from "@/shared/ui/DropDown/DropDown";
import Button from "@/shared/ui/Button/Button";

import closeIcon from "/public/icons/delete.svg";

interface ProfileEditModalProps {
  imageUrl?: string;
  nickname: string;
  introduction?: string;
  category?: string;
  className?: string;
  onClose?: () => void;
  onSave?: () => void;
}

export const ProfileEditModal = ({
  imageUrl,
  nickname,
  introduction,
  category,
  className,
  onClose,
  onSave,
}: ProfileEditModalProps) => {
  return (
    <div
      className={cn(
        "relative bg-black-900 rounded-lg flex flex-col",
        "w-[335px] h-[600px] p-[10px] gap-[5px]",
        "md:w-[590px] md:h-[750px] md:p-[15px] md:gap-[10px]",
        "xl:w-[620px] xl:h-[800px] xl:p-[15px] xl:gap-[15px]",
        className,
      )}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-3 right-3"
      >
        <Image src={closeIcon} alt="닫기" width={24} height={24} />
      </button>

      <h2 className="text-white text-lg font-semibold mb-6">프로필 수정</h2>

      <div className="flex flex-col items-start w-full gap-2">
        <label className="text-white text-sm font-medium">프로필 이미지</label>
        <ProfileImageChangeInput onChange={() => {}} />
      </div>

      <div className="flex flex-col items-start w-full gap-2">
        <label className="text-white text-sm font-medium">닉네임</label>
        <Input value={nickname} />
      </div>

      <div className="flex flex-col items-start w-full gap-2">
        <label className="text-white text-sm font-medium">자기소개</label>
        <TextBox
          value=""
          placeholder="자기소개를 입력하세요..."
          defaultValue={introduction}
          onChange={() => {}}
        />
      </div>

      <div className="flex flex-col items-start w-full gap-2">
        <label className="text-white text-sm font-medium">카테고리</label>
        <DropDown
          value={category}
          onChange={() => {}}
          options={[
            { label: "카테고리1", value: "cat1" },
            { label: "카테고리2", value: "cat2" },
          ]}
        />
      </div>

      <div className="flex justify-center w-full mt-auto">
        <Button variant="primary" onClick={onSave}>
          저장하기
        </Button>
      </div>
    </div>
  );
};
