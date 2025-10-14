"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useModalStore } from "@/shared/model/modal.store";

export const ModalContainer = () => {
  const { modals, closeModal } = useModalStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return createPortal(
    <>
      {modals.map(({ id, content }) => (
        <div
          key={id}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => closeModal(id)}
        >
          <div
            className="relative max-h-[90vh] overflow-y-auto rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {content}
          </div>
        </div>
      ))}
    </>,
    modalRoot,
  );
};
