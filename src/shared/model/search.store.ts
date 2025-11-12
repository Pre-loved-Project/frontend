import { create } from "zustand";

interface SearchState {
  category: string;
  sort: string;
  keyword: string;
  setCategory: (c: string) => void;
  setSort: (s: string) => void;
  setKeyword: (k: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  category: "전체",
  sort: "latest",
  keyword: "",
  setCategory: (category) => set({ category }),
  setSort: (sort) => set({ sort }),
  setKeyword: (keyword) => set({ keyword }),
}));
