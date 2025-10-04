"use client";

import React, { useState } from "react";
import Image from "next/image";
import cn from "@/shared/lib/cn";
import imageSelectIcon from "@/shared/images/image-select.svg";

interface ProfileImageChangeInputProps {
  className?: string;
  onChange?: (file: File | null) => void;
}

export const ProfileImageChangeInput = ({
  className,
  onChange,
}: ProfileImageChangeInputProps) => {
  const [preview, setPreview] = useState<string | null>(null);

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
        "flex items-center justify-center rounded-lg bg-black-800 overflow-hidden cursor-pointer",
        "w-[130px] h-[130px] md:w-[135px] md:h-[135px] xl:w-[160px] xl:h-[160px]",
        className,
      )}
    >
      {preview ? (
        <Image
          src={preview}
          alt="Selected Profile"
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      ) : (
        <Image
          src={imageSelectIcon}
          alt="Upload Icon"
          width={34}
          height={34}
          className="w-[24px] h-[24px] md:w-[25px] md:h-[25px] xl:w-[34px] xl:h-[34px]"
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
