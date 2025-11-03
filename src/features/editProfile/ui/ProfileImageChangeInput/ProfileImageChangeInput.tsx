"use client";

import React, { useState } from "react";
import Image from "next/image";
import cn from "@/shared/lib/cn";

interface ProfileImageChangeInputProps {
  imgUrl?: string;
  className?: string;
  onChange?: (file: File | null) => void;
}

export const ProfileImageChangeInput = ({
  imgUrl,
  className,
  onChange,
}: ProfileImageChangeInputProps) => {
  const [preview, setPreview] = useState<string | null>(imgUrl ?? null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onChange?.(file);
    } else {
      setPreview(null);
      onChange?.(null);
    }
  };

  return (
    <label
      className={cn(
        "bg-black-800 flex cursor-pointer items-center justify-center overflow-hidden rounded-lg",
        "h-[130px] w-[130px] md:h-[135px] md:w-[135px] xl:h-[160px] xl:w-[160px]",
        className,
      )}
    >
      {preview ? (
        <Image
          src={preview}
          alt="Selected Profile"
          width={160}
          height={160}
          className="h-full w-full object-cover"
        />
      ) : (
        <img
          src="/icons/image-select.svg"
          alt="Upload Icon"
          aria-label="Upload Icon"
          className="h-[24px] w-[24px] md:h-[25px] md:w-[25px] xl:h-[34px] xl:w-[34px]"
        />
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </label>
  );
};
