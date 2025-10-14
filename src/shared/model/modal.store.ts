import { create } from "zustand";
import { ReactNode } from "react";

interface ModalState {
  modals: { id: string; content: ReactNode }[];
  openModal: (id: string, content: ReactNode) => void;
  closeModal: (id: string) => void;
  closeAll: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  modals: [],
  openModal: (id, content) =>
    set((state) => ({
      modals: [...state.modals, { id, content }],
    })),
  closeModal: (id) =>
    set((state) => ({
      modals: state.modals.filter((m) => m.id !== id),
    })),
  closeAll: () => set({ modals: [] }),
}));
