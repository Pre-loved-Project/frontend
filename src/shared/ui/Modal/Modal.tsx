"use client";

import React from "react";
import cn from "@/shared/lib/cn";
import Button from "../Button/Button";

interface ModalProps {
  message: string;
  buttonText?: string;
  onClick: () => void;
  className: string;
}

export const Modal = ({
  message,
  buttonText = "확인",
  onClick,
  className,
}: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div
        className={cn(
          "bg-black-900 rounded-lg shadow-lg flex flex-col items-center justify-center gap-10 p-6 text-center",
          "w-[320px] h-[180px]",
          "md:w-[420px] md:h-[190px]",
          "xl:w-[500px] xl:h-[200px]",
          className,
        )}
      >
        <p
          className={cn(
            "text-white whitespace-pre-line",
            "text-[14px] md:text-[16px] xl:text-[18px]",
          )}
        >
          {message}
        </p>
        <Button
          variant="primary"
          onClick={onClick}
          className={cn("w-[200px]", "md:w-[300px]", "xl:w-[400px]")}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
