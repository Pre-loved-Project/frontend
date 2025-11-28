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
      <h1 className="text-3xl font-bold">서버 오류 발생</h1>
      <p className="mt-4 text-lg opacity-80">
        {message ?? "잠시 후 다시 시도해주세요."}
      </p>
    </div>
  );
}
