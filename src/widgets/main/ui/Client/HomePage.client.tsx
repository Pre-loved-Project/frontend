"use client";

import SideMenu from "@/widgets/main/ui/SideMenu/SideMenu";
import PostList from "@/entities/post/ui/list/PostList";
import { CATEGORY_LIST } from "../../model/constants";
interface Props {
  initialCategory: string;
  initialSort: string;
  initialKeyword: string;
}

export default function HomePageClient({
  initialCategory,
  initialSort,
  initialKeyword,
}: Props) {
  return (
    <div className="flex flex-col gap-[60px] md:block">
      <aside>
        <SideMenu
          categories={CATEGORY_LIST}
          selectedCategory={initialCategory}
        />
      </aside>

      <main className="mb-[30px] md:ml-40 md:pr-[30px] md:pl-[25px] lg:pr-[60px] lg:pl-[90px]">
        <PostList
          selectedCategory={initialCategory}
          selectedSortOption={initialSort}
          selectedKeyword={initialKeyword}
        />
      </main>
    </div>
  );
}
