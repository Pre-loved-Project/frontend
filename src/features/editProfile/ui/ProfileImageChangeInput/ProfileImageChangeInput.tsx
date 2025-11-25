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
        "flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gray-800",
        "h-32 w-32 md:h-36 md:w-36 xl:h-40 xl:w-40",
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
          className="h-6 w-6 md:h-6 md:w-6 xl:h-8 xl:w-8"
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
