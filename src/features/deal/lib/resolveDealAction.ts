import { PostStatus } from "@/entities/post/model/types/post";
import { DealStatus } from "@/entities/chat/model/types";

type DealAction =
  | { type: "single"; next: DealStatus; label: string }
  | {
      type: "double";
      nextA: DealStatus;
      nextB: DealStatus;
      labelA: string;
      labelB: string;
    }
  | { type: "none" };

const resolveDealAction = (
  isOwner: boolean,
  postStatus: PostStatus,
  dealStatus: DealStatus,
): DealAction => {
  // 판매자일 때
  if (isOwner) {
    // 판매중 → 구매 요청 가능
    if (postStatus === "SELLING" && dealStatus === "ACTIVE") {
      return { type: "single", next: "RESERVED", label: "예약하기" };
    }

    // 예약중 → 예약취소 가능
    if (postStatus === "RESERVED" && dealStatus === "RESERVED") {
      return { type: "single", next: "ACTIVE", label: "예약취소" };
    }
  }

  // 구매자일 때
  if (!isOwner) {
    if (postStatus === "RESERVED" && dealStatus === "RESERVED") {
      return {
        type: "double",
        nextA: "COMPLETED",
        labelA: "구매확정",
        nextB: "ACTIVE",
        labelB: "구매취소",
      };
    }
  }

  return { type: "none" };
};

export default resolveDealAction;
