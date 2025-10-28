import SideMenuWrapper from "@/widgets/main/ui/SideMenu/SideMenuWrapper";
import PostList from "@/entities/post/ui/list/PostList";
import { serverFetch } from "@/shared/api/fetcher.server";
import { POST_PAGE_SIZE } from "@/entities/post/model/constants/api";
import type { Post } from "@/entities/post/model/types/post";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const params = await searchParams;

  const selectedCategory = params?.category ?? "전체";
  const selectedSortOption = params?.sort ?? "latest";
  const page = Number(params?.page ?? 1);

  const query = new URLSearchParams({
    page: String(page),
    size: String(POST_PAGE_SIZE),
    sort: selectedSortOption,
  });
  if (selectedCategory !== "전체") query.append("category", selectedCategory);

  const { data: posts } = await serverFetch<{ data: Post[] }>(
    `/api/postings?${query.toString()}`,
    { method: "GET" },
  );

  return (
    <div className="flex flex-col gap-[60px] md:block">
      <aside>
        <SideMenuWrapper selectedCategory={selectedCategory} />
      </aside>

      <main className="mb-[30px] md:ml-[160px] md:pr-[30px] md:pl-[25px] lg:pr-[60px] lg:pl-[90px]">
        <PostList
          initialPosts={posts}
          selectedCategory={selectedCategory}
          selectedSortOption={selectedSortOption}
        />
      </main>
    </div>
  );
}
