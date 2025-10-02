"use client";

import React from "react";
import cn from "@/shared/lib/cn";
import Button from "../Button/Button";

type ModalSize = "sm" | "md" | "lg";

interface ModalProps {
  size?: ModalSize;
  message: string;
  buttonText?: string;
  onClick: () => void;
}

const sizeMap: Record<
  ModalSize,
  {
    width: number;
    height: number;
    buttonSize: "sm" | "md" | "lg";
    textSize: string;
  }
> = {
  sm: { width: 400, height: 200, buttonSize: "sm", textSize: "text-base" },
  md: { width: 500, height: 200, buttonSize: "md", textSize: "text-lg" },
  lg: { width: 500, height: 200, buttonSize: "md", textSize: "text-lg" },
};

export const Modal = ({
  size = "md",
  message,
  buttonText = "확인",
  onClick,
}: ModalProps) => {
  const { width, height, buttonSize, textSize } = sizeMap[size];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div
        className={cn(
          "bg-black-900 rounded-lg shadow-lg flex flex-col items-center justify-center gap-10 p-6 text-center",
        )}
        style={{ width, height }}
      >
        <p className={cn("text-white whitespace-pre-line", textSize)}>
          {message}
        </p>
        <Button variant="primary" size={buttonSize} onClick={onClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
