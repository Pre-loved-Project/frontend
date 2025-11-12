"use client";

import SideMenu from "./SideMenu";
import { CATEGORY_LIST } from "@/widgets/main/model/constants";
import { SearchCommands } from "@/shared/commands/SearchCommands";

interface Props {
  selectedCategory: string;
}

export default function SideMenuWrapper({ selectedCategory }: Props) {
  const handleSelect = (category: string) => {
    if (category === selectedCategory) return;
    SearchCommands.changeCategory(category);
    SearchCommands.changeKeyword("");
  };

  return (
    <SideMenu
      categories={CATEGORY_LIST}
      selectedCategory={selectedCategory}
      onSelect={handleSelect}
    />
  );
}
