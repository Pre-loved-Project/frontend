// src/features/chat/hooks/useChatListSocket.ts

import { useEffect, useRef } from "react";
import { ChatListSocket } from "../model/chatListSocket";
import { handleError } from "@/shared/error/handleError";
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
  const socketRef = useRef<ChatListSocket | null>(null);

  const connectListSocket = async () => {
    if (socketRef.current?.isOpen()) return;

    if (!socketRef.current) {
      socketRef.current = new ChatListSocket({
        onOpen: () => {
          console.log("[useChatListSocket] List Socket Ready.");
        },
        onChatCreated: onChatCreated,
        onChatListUpdate: onChatListUpdate,
        onClose: (code) => {
          console.log(`[useChatListSocket] Closed: ${code}`);
        },
      });
    }

    try {
      await socketRef.current.connect();
    } catch (error) {
      console.error("[useChatListSocket] Initial connection failed:", error);
      handleError(error);
    }
  };

  useEffect(() => {
    connectListSocket();

    return () => {
      socketRef.current?.close();
      socketRef.current = null;
    };
  }, []);

  const isConnected = socketRef.current?.isOpen();

  return {
    isConnected,
  };
};
