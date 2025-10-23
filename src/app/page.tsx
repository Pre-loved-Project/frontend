"use client";

import { useState, useEffect } from "react";
import SideMenu from "@/widgets/main/ui/SideMenu/SideMenu";
import PostCard from "@/entities/post/ui/card/PostCard";
import SortMenu from "@/widgets/main/ui/Select/Select";
import type { Post } from "@/entities/post/model/types/post";
import {
  SORT_OPTION_LIST,
  CATEGORY_LIST,
} from "@/widgets/main/model/constants";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_LIST[0]);
  const [selectedSortOption, setSelectedSortOption] = useState(
    SORT_OPTION_LIST[0].value,
  );
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col gap-[60px] md:block">
      <aside>
        <SideMenu
          categories={CATEGORY_LIST}
          selectedCategory={selectedCategory}
          onSelect={(category) => setSelectedCategory(category)}
        />
      </aside>

      <main className="md:ml-[160px] md:pr-[30px] md:pl-[25px] lg:pr-[60px] lg:pl-[90px]">
        <section
          aria-labelledby="category-heading"
          className="flex flex-col gap-[30px] px-[20px]"
        >
          <div className="flex items-center justify-between">
            <h3
              id="category-heading"
              className="text-[20px] leading-[28px] font-semibold text-white xl:font-[24px]"
            >
              {selectedCategory}
            </h3>
            <SortMenu
              items={SORT_OPTION_LIST}
              selectedItem={selectedSortOption}
              onSelect={setSelectedSortOption}
            />
          </div>

          <div className="grid grid-cols-2 gap-[15px] xl:grid-cols-3">
            {posts.map((post, id) => (
              <PostCard key={post.postingId} {...post} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
