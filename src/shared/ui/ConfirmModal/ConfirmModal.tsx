"use client";

import cn from "@/shared/lib/cn";
import Button from "../Button/Button";

export interface ConfirmModalProps {
  message: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  className?: string;
}

export const ConfirmModal = ({
  message,
  confirmButtonText = "확인",
  cancelButtonText = "취소",
  onConfirm,
  onCancel,
  className,
}: ConfirmModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={cn(
          "bg-black-900 flex flex-col items-center justify-center gap-10 rounded-lg p-6 text-center shadow-lg",
          "h-[180px] w-[320px]",
          "md:h-[190px] md:w-[420px]",
          "xl:h-[200px] xl:w-[500px]",
          className,
        )}
      >
        <p
          className={cn(
            "whitespace-pre-line text-white",
            "text-[16px] md:text-[18px] xl:text-[20px]",
          )}
        >
          {message}
        </p>
        <div
          className={cn(
            "flex w-full justify-center gap-4",
            "md:gap-6 xl:gap-8",
          )}
        >
          <Button
            variant="primary"
            onClick={onConfirm}
            className={cn("w-[120px]", "md:w-[150px]", "xl:w-[180px]")}
          >
            {confirmButtonText}
          </Button>

          <Button
            variant="secondary"
            onClick={onCancel}
            className={cn("w-[120px]", "md:w-[150px]", "xl:w-[180px]")}
          >
            {cancelButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};
