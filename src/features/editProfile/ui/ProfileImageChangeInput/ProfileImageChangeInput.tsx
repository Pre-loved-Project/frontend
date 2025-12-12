"use client";

import React, { useState, useRef } from "react";
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

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
      onChange?.(file);
    } else {
      setPreview(null);
      onChange?.(null);
    }

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <label
      className={cn(
        "bg-black-800 relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg",
        "h-32 w-32 md:h-36 md:w-36 xl:h-40 xl:w-40",
        className,
      )}
    >
      {preview ? (
        <div className="relative h-full w-full">
          <Image
            src={preview}
            alt="Selected Profile"
            width={160}
            height={160}
            className="pointer-events-none h-full w-full object-cover"
          />

          <button
            type="button"
            className="absolute top-0.5 right-0.5 z-20 rounded-full bg-black/50 p-1"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              setPreview(null);
              onChange?.(null);

              if (inputRef.current) {
                inputRef.current.value = "";
              }
            }}
          >
            <img src="/icons/delete.svg" alt="삭제" className="h-2.5 w-2.5" />
          </button>
        </div>
      ) : (
        <img
          src="/icons/image-select.svg"
          alt="Upload Icon"
          aria-label="Upload Icon"
          className="pointer-events-none h-6 w-6 md:h-6 md:w-6 xl:h-8 xl:w-8"
        />
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="absolute inset-0 z-10 cursor-pointer opacity-0"
      />
    </label>
  );
};
