import { useModalStore } from "../model/modal.store";
import { BaseError } from "./error";

export function handleError(error: unknown, context?: string) {
  let message =
    error instanceof BaseError
      ? error.message
      : "알 수 없는 오류가 발생했습니다.";
  message = context ? `${context}\n${message}` : message;

  const { openModal, closeModal } = useModalStore.getState();

  console.error(error, context);
  openModal("normal", {
    message,
    onClick: () => {
      closeModal();
      if (error instanceof BaseError) error.onConfirm?.();
    },
  });
}
