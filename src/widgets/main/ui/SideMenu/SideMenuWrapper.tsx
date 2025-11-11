"use client";

import SideMenu from "./SideMenu";
import { CATEGORY_LIST } from "@/widgets/main/model/constants";
import { useSearchStore } from "@/shared/model/search.store";

interface Props {
  selectedCategory: string;
}

export default function SideMenuWrapper({ selectedCategory }: Props) {
  const { setKeyword, setCategory } = useSearchStore();

  const handleSelect = (category: string) => {
    if (category === selectedCategory) return;
    setCategory(category);
    setKeyword("");
  };

  return (
    <SideMenu
      categories={CATEGORY_LIST}
      selectedCategory={selectedCategory}
      onSelect={handleSelect}
    />
  );
}
