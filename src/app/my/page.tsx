export const dynamic = "force-dynamic";

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import { getMyPosts } from "@/entities/user/api/getMyPosts.server";
import { getMyProfile } from "@/entities/user/api/getMyProfile.server";
import MyPageClient from "@/widgets/mypage/ui/Client/MyPage.client";
import { handleError } from "@/shared/error/handleError";

const DEFAULT_TAB = "selling";

export default async function Page() {
  const queryClient = new QueryClient();

  try {
    await queryClient.fetchQuery({
      queryKey: ["userProfile"],
      queryFn: getMyProfile,
    });

    await queryClient.fetchQuery({
      queryKey: ["myPosts", DEFAULT_TAB],
      queryFn: () => getMyPosts(DEFAULT_TAB),
    });
  } catch (e) {
    handleError(e);
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MyPageClient defaultTab={DEFAULT_TAB} />
    </HydrationBoundary>
  );
}
