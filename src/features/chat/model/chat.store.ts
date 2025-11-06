import { create } from "zustand";

interface ChatState {
  isOpen: boolean;
  isVisible: boolean;
  activeId: number | null;

  mount: (chatId?: number) => void;
  hide: () => void;
  unmount: () => void;
  setActiveId: (id?: number) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  isOpen: false,
  isVisible: false,
  activeId: null,

  mount: (chatId) => {
    set({ isOpen: true, activeId: chatId ?? null });
    requestAnimationFrame(() => set({ isVisible: true }));
  },

  hide: () => set({ isVisible: false }),
  unmount: () => set({ isOpen: false, activeId: null }),
  setActiveId: (id) => set({ activeId: id ?? null }),
}));
