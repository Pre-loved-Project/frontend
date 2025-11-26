import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import { getMyPosts } from "@/entities/user/api/getMyPosts.server";
import { getMyProfile } from "@/entities/user/api/getMyProfile.server";
import MyPageClient from "@/widgets/mypage/ui/Client/MyPage.client";

const DEFAULT_TAB = "selling";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["userProfile"],
    queryFn: getMyProfile,
  });

  await queryClient.prefetchQuery({
    queryKey: ["myPosts", DEFAULT_TAB],
    queryFn: () => getMyPosts(DEFAULT_TAB),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MyPageClient defaultTab={DEFAULT_TAB} />
    </HydrationBoundary>
  );
}
