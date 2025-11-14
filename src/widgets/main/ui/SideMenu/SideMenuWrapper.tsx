"use client";

import { useRouter, useSearchParams } from "next/navigation";
import SideMenu from "./SideMenu";
import { CATEGORY_LIST } from "@/widgets/main/model/constants";

export default function SideMenuWrapper({
  selectedCategory,
}: {
  selectedCategory: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSelect = (category: string) => {
    if (category === selectedCategory) return;

    const params = new URLSearchParams(searchParams);
    if (category === "전체") params.delete("category");
    else params.set("category", category);
    params.delete("keyword");

    router.push(`/?${params.toString()}`);
  };

  return (
    <SideMenu
      categories={CATEGORY_LIST}
      selectedCategory={selectedCategory}
      onSelect={handleSelect}
    />
  );
}
