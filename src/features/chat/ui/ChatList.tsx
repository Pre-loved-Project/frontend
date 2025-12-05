"use client";

import ChatItem from "@/entities/chat/ui/ChatItem";
import { fetchChatList } from "../model/chat.api";
import type { Chat, MessageProps } from "@/entities/chat/model/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { DealStatus } from "@/entities/chat/model/types";
import { handleError } from "@/shared/error/handleError";
import { useChatListSocket } from "../lib/useChatListSocket";

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
  const queryClient = useQueryClient();
  const role = tab === "all" ? undefined : tab === "buyer" ? "buyer" : "seller";
  const queryKey = ["chats", role];

  const {
    data: chats = [],
    isLoading,
    isError,
    error,
  } = useQuery<Chat[], Error>({
    queryKey: ["chats", role],
    queryFn: () => fetchChatList(role),
  });

  const handleChatCreated = (newChat: Chat) => {
    const roles = [newChat.role, undefined];
    roles.forEach((updatedRole) => {
      queryClient.setQueryData<Chat[]>(["chats", updatedRole], (oldChats) => {
        if (!oldChats) return [newChat];
        return [newChat, ...oldChats];
      });
    });
  };

  const handleChatListUpdated = (update: {
    chatId: number;
    lastMessage: MessageProps;
  }) => {
    const roles = [undefined, "buyer", "seller"];
    roles.forEach((updatedRole) => {
      const queryKey = ["chats", updatedRole];
      queryClient.setQueryData(queryKey, (oldChats: Chat[] | undefined) => {
        if (!oldChats) return undefined;

        const updatedChatIndex = oldChats.findIndex(
          (chat) => chat.chatId === update.chatId,
        );
        if (updatedChatIndex === -1) return oldChats;

        const updatedChat: Chat = {
          ...oldChats[updatedChatIndex],
          lastMessage: {
            ...update.lastMessage,
          },
        };
        const remainChats = oldChats.filter(
          (_, index) => index !== updatedChatIndex,
        );
        return [updatedChat, ...remainChats];
      });
    });
  };
  if (isError) {
    handleError(error);
  }

  if (isLoading) {
    return <p className="p-4 text-center text-white/70">불러오는 중...</p>;
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
