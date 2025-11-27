"use client";

import { useEffect } from "react";
import { useChatStore } from "@/features/chat/model/chat.store";
import Link from "next/link";

export default function NotFoundErrorPage({ message }: { message?: string }) {
  const { unmount } = useChatStore();

  useEffect(() => {
    unmount();
  }, [unmount]);

  return (
    <div className="flex flex-col items-center justify-center py-20 text-white">
      <h1 className="text-3xl font-bold">페이지를 찾을 수 없습니다</h1>
      <p className="mt-4 text-lg opacity-80">
        {message ?? "요청한 페이지가 존재하지 않습니다."}
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded bg-white px-4 py-2 font-semibold text-black hover:bg-gray-200"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
