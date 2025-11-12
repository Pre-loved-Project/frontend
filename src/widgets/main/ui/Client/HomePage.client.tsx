"use client";

import SideMenuWrapper from "@/widgets/main/ui/SideMenu/SideMenuWrapper";
import PostList from "@/entities/post/ui/list/PostList";
import { useSearchStore } from "@/shared/model/search.store";
import { useSearchMediator } from "@/shared/lib/useSearchMediator";

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
  useSearchMediator({ initialCategory, initialSort, initialKeyword });

  const { category, keyword, sort, setSort } = useSearchStore();

  return (
    <div className="flex flex-col gap-[60px] md:block">
      <aside>
        <SideMenuWrapper selectedCategory={category} />
      </aside>

      <main className="mb-[30px] md:ml-40 md:pr-[30px] md:pl-[25px] lg:pr-[60px] lg:pl-[90px]">
        <PostList
          selectedCategory={category}
          selectedSortOption={sort}
          onSortChange={setSort}
          selectedKeyword={keyword}
        />
      </main>
    </div>
  );
}
