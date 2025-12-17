import { useState, useEffect, useRef } from "react";
import { ChatSocket } from "../model/chatSocket";
import { DealStatus, MessageProps } from "../model/types";
import { PostStatus } from "@/entities/post/model/types/post";

interface QueuedMessage {
  type: "text" | "image";
  content: string;
}

export const useChatSocket = (
  chatId: number | null,
  otherId: number | null,
  pushMessageToCache: (msg: MessageProps) => void,
  scrollToBottom?: () => void,
  onDealUpdate?: (update: {
    postStatus: PostStatus;
    dealStatus: DealStatus;
  }) => void,
  getLastOtherMessageId?: () => number | null,
  onMessageRead?: (messageId: number) => void,
) => {
  const [isSocketConnected, setIsSocketConncted] = useState(false);
  const socketRef = useRef<ChatSocket | null>(null);
  const messageQueue = useRef<QueuedMessage[]>([]); // 🔥 메시지 큐

  /** 메시지 전송 공통 함수 (push + socket) */
  const processMessage = (type: "text" | "image", content: string) => {
    socketRef.current?.sendMessage(type, content);
    requestAnimationFrame(() => scrollToBottom?.());
  };

  /** 큐 flush */
  const flushQueue = () => {
    if (!socketRef.current || !socketRef.current.isOpen()) return;
    messageQueue.current.forEach(({ type, content }) => {
      processMessage(type, content);
    });
    messageQueue.current = [];
  };

  //현재 화면 상대 마지막 메시지를 서버에 읽음 처리 요청
  const readLastMessage = () => {
    const lastId = getLastOtherMessageId?.();
    if (lastId && socketRef.current?.isOpen()) {
      socketRef.current.readMessage(lastId);
      console.log(`[Socket] Send read_message for ID: ${lastId}`);
    }
  };

  const connectSocket = async () => {
    if (!chatId || !otherId) return;
    if (socketRef.current?.isOpen()) return;

    if (!socketRef.current) {
      socketRef.current = new ChatSocket(chatId, otherId, {
        onOpen: () => {
          setIsSocketConncted(true);
          console.log("[Socket] Connected");
          flushQueue();
        },
        onMessage: (msg) => {
          pushMessageToCache(msg);
          requestAnimationFrame(() => scrollToBottom?.());
          if (!msg.isMine) {
            readLastMessage();
          }
        },
        onDealUpdate: (update) => {
          onDealUpdate?.(update);
          pushMessageToCache({
            messageId: Date.now(),
            type: "system",
            content: update.systemMessage,
            isMine: false,
            sendAt: new Date().toISOString(),
            isRead: true,
          });
          requestAnimationFrame(() => scrollToBottom?.());
        },
        onRead: onMessageRead,
        onClose: () => {
          console.log("[Socket] disconnected");
          setIsSocketConncted(false);
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
      setIsSocketConncted(false);
    };
  }, [chatId]);

  const sendMessage = async (type: "text" | "image", content: string) => {
    if (!chatId || !socketRef.current?.isOpen()) {
      messageQueue.current.push({ type, content });
      return;
    }

    processMessage(type, content);
  };

  return { isSocketConnected, sendMessage, readLastMessage };
};
