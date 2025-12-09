import { useEffect, useRef } from "react";
import { ChatSocket } from "../model/chatSocket";
import { DealStatus, MessageProps } from "../model/types";
import { PostStatus } from "@/entities/post/model/types/post";

interface QueuedMessage {
  type: "text" | "image";
  content: string;
  sendAt: string;
}

export const useChatSocket = (
  chatId: number | null,
  pushMessageToCache: (msg: MessageProps) => void,
  scrollToBottom?: () => void,
  onDealUpdate?: (update: {
    postStatus: PostStatus;
    dealStatus: DealStatus;
  }) => void,
) => {
  const socketRef = useRef<ChatSocket | null>(null);
  const messageQueue = useRef<QueuedMessage[]>([]); // 🔥 메시지 큐

  /** 메시지 전송 공통 함수 (push + socket) */
  const processMessage = (
    type: "text" | "image",
    content: string,
    sendAt: string,
  ) => {
    pushMessageToCache({
      messageId: Date.now(),
      type,
      content,
      isMine: true,
      sendAt,
      isRead: true,
    });

    socketRef.current?.sendMessage(type, content);

    requestAnimationFrame(() => scrollToBottom?.());
  };

  /** 큐 flush */
  const flushQueue = () => {
    if (!socketRef.current || !socketRef.current.isOpen()) return;
    messageQueue.current.forEach(({ type, content, sendAt }) => {
      processMessage(type, content, sendAt);
    });
    messageQueue.current = [];
  };

  const connectSocket = async () => {
    if (!chatId) return;
    if (socketRef.current?.isOpen()) return;

    if (!socketRef.current) {
      socketRef.current = new ChatSocket(chatId, {
        onOpen: () => {
          console.log("[Socket] Connected");
          flushQueue();
        },
        onMessage: (msg) => {
          pushMessageToCache(msg);
          requestAnimationFrame(() => scrollToBottom?.());
        },
        onDealUpdate: (update) => {
          onDealUpdate?.(update);
          pushMessageToCache({
            messageId: Date.now(),
            type: "system",
            content: update.message,
            isMine: false,
            sendAt: new Date().toISOString(),
            isRead: true,
          });
          requestAnimationFrame(() => scrollToBottom?.());
        },
      });
    }

    await socketRef.current.connect();
  };

  useEffect(() => {
    if (chatId) connectSocket();

    return () => {
      socketRef.current?.close();
      socketRef.current = null;
    };
  }, [chatId]);

  const sendMessage = async (type: "text" | "image", content: string) => {
    const sendAt = new Date().toISOString();

    if (!chatId || !socketRef.current?.isOpen()) {
      messageQueue.current.push({ type, content, sendAt });
      return;
    }

    processMessage(type, content, sendAt);
  };

  return { sendMessage };
};
