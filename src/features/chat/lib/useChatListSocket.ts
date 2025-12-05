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
      // 초기 연결 시 발생하는 인증/네트워크 에러 처리
      console.error("[useChatListSocket] Initial connection failed:", error);
      onConnectionError?.(error);
    }
  };

  useEffect(() => {
    // 컴포넌트 마운트 시 소켓 연결 시도
    connectListSocket();

    return () => {
      // 컴포넌트 언마운트 시 소켓 연결 해제
      socketRef.current?.close();
      socketRef.current = null;
    };
  }, []); // 💡 의존성 배열을 비워 마운트/언마운트 시점에만 실행되도록 보장

  const isConnected = socketRef.current?.isOpen();

  return {
    isConnected,
    // 필요하다면 수동 연결/해제 함수도 반환 가능
  };
};
