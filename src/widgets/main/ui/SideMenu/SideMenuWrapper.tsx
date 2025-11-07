"use client";

import { useRouter, useSearchParams } from "next/navigation";
import SideMenu from "./SideMenu";
import { CATEGORY_LIST } from "@/widgets/main/model/constants";

interface Props {
  selectedCategory: string;
}

export default function SideMenuWrapper({ selectedCategory }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSelect = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === "전체") params.delete("category");
    else params.set("category", category);
    params.delete("keyword");
    params.delete("sort");
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
