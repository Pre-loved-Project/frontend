import { useSearchStore } from "@/shared/model/search.store";

export const SearchCommands = {
  changeCategory: (category: string) =>
    useSearchStore.getState().setCategory(category),

  changeSort: (sort: string) => useSearchStore.getState().setSort(sort),

  changeKeyword: (keyword: string) =>
    useSearchStore.getState().setKeyword(keyword),
};
