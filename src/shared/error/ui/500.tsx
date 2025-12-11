"use client";

import { useEffect } from "react";
import { useChatStore } from "@/features/chat/model/chat.store";

export default function ServerErrorPage({ message }: { message?: string }) {
  const { unmount } = useChatStore();

  useEffect(() => {
    unmount();
  }, [unmount]);

  return (
    <div className="flex flex-col items-center justify-center py-20 text-white">
      <h1 className="text-3xl font-bold">문제가 발생했어요</h1>

      <p className="mt-4 text-center text-lg whitespace-pre-line opacity-80">
        {message ??
          "일시적인 문제로 페이지를 불러오지 못했어요.\n잠시 후 다시 시도해주세요."}
      </p>

      <button
        onClick={() => window.location.reload()}
        className="mt-8 rounded-md bg-[#383848] px-5 py-2 text-white hover:cursor-pointer hover:bg-[#4a4a5a]"
      >
        새로고침
      </button>
    </div>
  );
}
