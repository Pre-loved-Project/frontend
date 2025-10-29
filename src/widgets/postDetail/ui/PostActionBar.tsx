"use client";
import Button from "@/shared/ui/Button/Button";
import LikeButton from "@/features/like/ui/LikeButton";

interface Props {
  isOwner: boolean;
  liked: boolean;
  loading: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onChat: () => void;
  onToggleLike: () => void;
}

export function PostActionBar({
  isOwner,
  liked,
  loading,
  onEdit,
  onDelete,
  onChat,
  onToggleLike,
}: Props) {
  return (
    <div className="flex items-center justify-center gap-[10px]">
      {isOwner ? (
        <>
          <Button className="w-full flex-1" onClick={onEdit}>
            수정하기
          </Button>
          <Button className="w-full flex-1" onClick={onDelete}>
            삭제하기
          </Button>
        </>
      ) : (
        <>
          <Button className="w-full flex-1" onClick={onChat}>
            채팅하기
          </Button>
          <LikeButton liked={liked} loading={loading} onToggle={onToggleLike} />
        </>
      )}
    </div>
  );
}
