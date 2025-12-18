// src/features/chat/hooks/useChatListSocket.ts

import { useEffect } from "react";
import { useChatSocketManager } from "../model/chatSocketManager.store";
import { Chat, MessageProps } from "@/entities/chat/model/types";

interface UseChatListSocketProps {
  onChatCreated: (chat: Chat) => void;
  onChatListUpdate: (update: {
    chatId: number;
    lastMessage: MessageProps;
  }) => void;
}

export const useChatListSocket = ({
  onChatCreated,
  onChatListUpdate,
}: UseChatListSocketProps) => {
  const { chatListSocket, connectChatList, disconnectChatList } =
    useChatSocketManager();

  useEffect(() => {
    connectChatList({
      onOpen: () => {
        console.log(`ChatList Socket connected`);
      },
      onChatCreated,
      onChatListUpdate,
      onClose: () => {
        console.log(`ChatList Socket disconnected`);
      },
    });

    return () => {
      disconnectChatList();
    };
  }, []);

  return {
    isSocketConnected: useChatSocketManager((s) => s.chatListSocketConnected),
  };
};
