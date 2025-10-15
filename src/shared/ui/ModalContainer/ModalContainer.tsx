"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useModalStore, modalFactory } from "@/shared/model/modal.store";

export const ModalContainer = () => {
  const { activeKey, modalProps, closeModal } = useModalStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  if (!activeKey) return null;
  const ModalComponent = modalFactory[activeKey];

  const modalElement = ModalComponent({
    ...modalProps,
  });

  return createPortal(
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={closeModal}
    >
      <div onClick={(e) => e.stopPropagation()}>{modalElement}</div>
    </div>,
    modalRoot,
  );
};
