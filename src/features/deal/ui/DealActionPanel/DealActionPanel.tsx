import React from "react";
import { PostStatus } from "@/entities/post/model/types/post";
import { DealStatus } from "@/entities/chat/model/types";
import resolveDealAction from "../../lib/resolveDealAction";

import Button from "@/shared/ui/Button/Button";

interface DealActionPanelProps {
  isOwner: boolean;
  postStatus: PostStatus;
  dealStatus: DealStatus;
  onDealChange: (nextStatus: DealStatus) => void;
  isLoading: boolean;
}

const DealActionPanel = ({
  isOwner,
  postStatus,
  dealStatus,
  onDealChange,
  isLoading,
}: DealActionPanelProps) => {
  const buttonClass =
    "w-[70px] text-[14px] py-2 md:w-[70px] md:text-[14px] md:py-2 xl:w-[70px] xl:text-[14px] xl:py-2";
  const doubleButtonClass =
    "w-[50px] text-[12px] py-5 md:w-[50px] md:text-[12px] md:py-5 xl:w-[50px] xl:text-[12px] xl:py-5";
  const action = resolveDealAction(isOwner, postStatus, dealStatus);
  const getLoadingText = (s: DealStatus) => {
    switch (s) {
      case "RESERVED":
        return "예약 처리중...";
      case "ACTIVE":
        return "취소 처리중...";
      case "COMPLETED":
        return "구매 확정중...";
      default:
        return "처리중...";
    }
  };

  // 클릭 함수
  const handleClick = (next: DealStatus) => {
    onDealChange(next);
  };

  if (action.type === "none") return null;
  if (action.type === "single") {
    return (
      <Button
        variant={"primary"}
        disabled={isLoading}
        className={buttonClass}
        onClick={() => handleClick(action.next)}
      >
        {isLoading ? getLoadingText(action.next) : action.label}
      </Button>
    );
  }

  if (action.type === "double") {
    return (
      <div className="flex gap-2">
        <Button
          variant={"primary"}
          disabled={isLoading}
          className={doubleButtonClass}
          onClick={() => handleClick(action.nextA)}
        >
          {isLoading ? getLoadingText(action.nextA) : action.labelA}
        </Button>

        <Button
          variant={"tertiary"}
          disabled={isLoading}
          className={doubleButtonClass}
          onClick={() => handleClick(action.nextB)}
        >
          {isLoading ? getLoadingText(action.nextB) : action.labelB}
        </Button>
      </div>
    );
  }
};

export default DealActionPanel;
