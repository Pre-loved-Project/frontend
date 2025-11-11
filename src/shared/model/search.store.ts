import { create } from "zustand";

interface SearchState {
  keyword: string;
  category: string;
  setKeyword: (v: string) => void;
  setCategory: (v: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  keyword: "",
  category: "전체",
  setKeyword: (v) => set({ keyword: v }),
  setCategory: (v) => set({ category: v }),
}));
