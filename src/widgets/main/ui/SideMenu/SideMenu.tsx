"use client";

import { useQueryClient } from "@tanstack/react-query";
import { getPosts } from "@/entities/post/api/getPosts";
import cn from "@/shared/lib/cn";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "@/shared/lib/useDebouncedCallback";
import { useSearchParams } from "next/navigation";

interface SideMenuProps {
  categories: string[];
  selectedCategory: string;
}

const SideMenu = ({ categories, selectedCategory }: SideMenuProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  const prefetchData = async (category: string) => {
    const existing = queryClient.getQueryData([
      "posts",
      category,
      "latest",
      "",
    ]);
    if (existing) return;

    queryClient.prefetchInfiniteQuery({
      queryKey: ["posts", category, "latest", ""],
      queryFn: ({ pageParam = 1 }) =>
        getPosts({
          category,
          sort: "latest",
          page: pageParam,
          keyword: "",
        }),
      initialPageParam: 1,
      staleTime: 1000 * 60 * 5,
    });
  };

  const { debouncedCallback: handleHover, cancel: cancelHover } =
    useDebouncedCallback(prefetchData, 200);

  const handleSelect = async (category: string) => {
    if (category === selectedCategory) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("category", category);
    params.delete("sort");
    params.delete("keyword");

    router.push(`/?${params.toString()}`);

    cancelHover();
  };

  return (
    <div
      aria-labelledby="category-heading"
      role="listbox"
      className="flex flex-col gap-1 text-white md:fixed md:top-20 md:min-h-screen xl:top-24"
    >
      <h2
        id="category-heading"
        className="flex h-11 w-40 items-center px-5 py-4 text-sm font-normal xl:w-48 xl:text-base"
      >
        카테고리
      </h2>

      <ul className="scrollbar-none flex flex-row gap-1 overflow-x-auto md:flex-col">
        {categories?.map((category) => (
          <li key={category}>
            <button
              type="button"
              onMouseEnter={() => handleHover(category)}
              onMouseLeave={cancelHover}
              onClick={() => handleSelect(category)}
              aria-selected={selectedCategory === category}
              className={cn(
                "flex h-11 w-40 items-center rounded-lg px-5 py-4",
                "text-sm leading-none font-medium transition-colors",
                "hover:cursor-pointer focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none",
                "xl:w-48 xl:text-base",
                selectedCategory === category
                  ? "border border-[#353542] bg-[#353542] text-white"
                  : "text-[#6E6E82] hover:border hover:border-[#353542] hover:bg-[#252530] hover:text-white",
              )}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
