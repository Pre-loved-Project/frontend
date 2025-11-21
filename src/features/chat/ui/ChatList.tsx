"use client";

import ChatItem from "@/entities/chat/ui/ChatItem";
import { fetchChatList } from "../model/chat.api";
import type { Chat } from "@/entities/chat/model/types";
import { useQuery } from "@tanstack/react-query";
import { DealStatus } from "@/entities/chat/model/types";

interface ChatListProps {
  onSelect: (info: {
    postingId: number;
    otherId: number;
    chatId?: number;
    status?: DealStatus;
  }) => void;
  tab?: "all" | "buyer" | "seller";
}

const ChatList = ({ onSelect, tab = "all" }: ChatListProps) => {
  const role = tab === "all" ? undefined : tab === "buyer" ? "buyer" : "seller";

  const {
    data: chats = [],
    isLoading,
    isError,
    error,
  } = useQuery<Chat[], Error>({
    queryKey: ["chats", role],
    queryFn: () => fetchChatList(role),
  });

  if (isLoading) {
    return <p className="p-4 text-center text-white/70">불러오는 중...</p>;
  }

  if (isError) {
    console.error("채팅 목록 불러오기 실패:", error);
  }

  if (!chats?.length) {
    return (
      <p className="p-4 text-center text-white/70">채팅 내역이 없습니다.</p>
    );
  }

  return (
    <div className="flex flex-col divide-y divide-gray-600">
      {chats.map((chat) => (
        <ChatItem
          key={chat.chatId}
          chat={chat}
          onClick={() =>
            onSelect({
              postingId: chat.postingId,
              otherId: chat.otherId,
              chatId: chat.chatId,
              status: chat.status,
            })
          }
        />
      ))}
    </div>
  );
};

export default ChatList;
