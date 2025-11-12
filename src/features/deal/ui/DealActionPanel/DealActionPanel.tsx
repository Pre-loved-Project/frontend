import React from "react";
import {
  PostStatus,
  SELLING,
  RESERVED,
} from "@/entities/post/model/types/postStatus";
import {
  DealStatus,
  ACTIVE,
  RESERVED as DEAL_RESERVED,
} from "../../model/type/dealStatus";

import Button from "@/shared/ui/Button/Button";

interface DealActionPanelProps {
  isOwner: boolean;
  postStatus: PostStatus;
  dealStatus: DealStatus;
}

const DealActionPanel = ({
  isOwner,
  postStatus,
  dealStatus,
}: DealActionPanelProps) => {
  const buttonClass =
    "w-[70px] text-[14px] md:py-2 md:w-[70px] md:text-[14px] md:py-2 xl:w-[70px] xl:text-[14px] xl:py-2";
  if (isOwner) {
    if (postStatus === SELLING && dealStatus === ACTIVE) {
      return (
        <Button variant="primary" className={buttonClass}>
          예약하기
        </Button>
      );
    }
    if (postStatus === RESERVED && dealStatus === DEAL_RESERVED) {
      return (
        <Button variant="tertiary" className={buttonClass}>
          예약취소
        </Button>
      );
    }
  }

  if (!isOwner) {
    if (postStatus === RESERVED && dealStatus === DEAL_RESERVED) {
      return (
        <div className="flex gap-2">
          <Button variant="primary" className={buttonClass}>
            예약확정
          </Button>
          <Button variant="tertiary" className={buttonClass}>
            예약취소
          </Button>
        </div>
      );
    }
  }

  return null;
};

export default DealActionPanel;
