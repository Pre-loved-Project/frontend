import { DealStatus } from "@/entities/chat/model/types";
import { create } from "zustand";

interface ChatState {
  isOpen: boolean;
  isVisible: boolean;
  chatInfo: {
    postingId: number;
    otherId: number;
    chatId?: number;
    status?: DealStatus;
  } | null;

  mount: (info?: ChatState["chatInfo"]) => void;
  hide: () => void;
  unmount: () => void;
  setChatInfo: (info?: ChatState["chatInfo"]) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  isOpen: false,
  isVisible: false,
  chatInfo: null,

  mount: (info) => {
    set({ isOpen: true, chatInfo: info ?? null });
    requestAnimationFrame(() => set({ isVisible: true }));
  },

  hide: () => set({ isVisible: false }),
  unmount: () => set({ isOpen: false, chatInfo: null }),
  setChatInfo: (info) => set({ chatInfo: info ?? null }),
}));
