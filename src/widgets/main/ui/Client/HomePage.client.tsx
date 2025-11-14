"use client";

import { useSearchParams } from "next/navigation";
import SideMenuWrapper from "@/widgets/main/ui/SideMenu/SideMenuWrapper";
import PostList from "@/entities/post/ui/list/PostList";

export default function HomePageClient() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category") ?? "전체";
  const sort = searchParams.get("sort") ?? "latest";
  const keyword = searchParams.get("keyword") ?? "";

  return (
    <div className="flex flex-col gap-[60px] md:block">
      <aside>
        <SideMenuWrapper selectedCategory={category} />
      </aside>

      <main className="mb-[30px] md:ml-40 md:pr-[30px] md:pl-[25px] lg:pr-[60px] lg:pl-[90px]">
        <PostList
          selectedCategory={category}
          selectedSortOption={sort}
          selectedKeyword={keyword}
        />
      </main>
    </div>
  );
}
