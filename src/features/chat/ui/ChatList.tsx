"use client";

import { useEffect, useState } from "react";
import ChatItem from "@/entities/chat/ui/ChatItem";
import { fetchChatList } from "../model/chat.api";
import type { Chat } from "@/entities/chat/model/types";

const ChatList = ({
  onSelect,
  tab,
}: {
  onSelect: (id: number) => void;
  tab?: "all" | "buyer" | "seller";
}) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const role =
          tab === "all" ? undefined : tab === "buyer" ? "buyer" : "seller";
        const data = await fetchChatList(role);
        console.log(data);
        setChats(data);
      } catch (err) {
        console.error("채팅 목록 불러오기 실패:", err);
        setError("채팅 목록을 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [tab]);

  if (loading) {
    return <p className="p-4 text-center text-white/70">불러오는 중...</p>;
  }

  if (error) {
    return <p className="p-4 text-center text-red-400">{error}</p>;
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
          onClick={() => onSelect(chat.chatId)}
        />
      ))}
    </div>
  );
};

export default ChatList;
