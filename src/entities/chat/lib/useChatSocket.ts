import { useEffect, useRef } from "react";
import { DealStatus, MessageProps } from "../model/types";
import { PostStatus } from "@/entities/post/model/types/post";
import { useChatSocketManager } from "@/features/chat/model/chatSocketManager.store";
import { ChatSocket } from "../model/chatSocket";

interface QueuedMessage {
  type: "text" | "image";
  content: string;
}

export const useChatSocket = (
  chatId: number | null,
  otherId: number | null,
  pushMessageToCache: (msg: MessageProps) => void,
  onDealUpdate?: (update: {
    postStatus: PostStatus;
    dealStatus: DealStatus;
  }) => void,
  onMessageRead?: (messageId: number) => void,
) => {
  const { connectChatRoom, disconnectChatRoom } = useChatSocketManager();
  const socketRef = useRef<ChatSocket | null>(null);
  const messageQueue = useRef<QueuedMessage[]>([]);
  const readQueue = useRef<number[]>([]);

  const sendMessage = async (type: "text" | "image", content: string) => {
    if (!chatId || !socketRef.current?.isOpen()) {
      messageQueue.current.push({ type, content });
      return;
    }

    socketRef.current.sendMessage(type, content);
  };

  //현재 화면 상대 마지막 메시지를 서버에 읽음 처리 요청
  const readLastMessage = (messageId: number) => {
    if (messageId) {
      if (!socketRef.current?.isOpen()) {
        readQueue.current.push(messageId);
        return;
      }
      socketRef.current.readMessage(messageId);
    }
  };

  useEffect(() => {
    if (!chatId || !otherId) return;

    connectChatRoom(chatId, otherId, {
      onOpen: () => {
        socketRef.current = useChatSocketManager.getState().chatRoomSocket;
        messageQueue.current.forEach(({ type, content }) =>
          socketRef.current?.sendMessage(type, content),
        );
        readQueue.current.forEach((chatId) =>
          socketRef.current?.readMessage(chatId),
        );
        messageQueue.current = [];
        readQueue.current = [];
      },

      onMessage: (msg) => {
        pushMessageToCache(msg);
        if (!msg.isMine) readLastMessage(msg.messageId);
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
      },

      onRead: onMessageRead,
    });

    return () => {
      disconnectChatRoom();
      socketRef.current = null;
    };
  }, [chatId, otherId]);

  return {
    isSocketConnected: useChatSocketManager((s) => s.chatRoomSocketConnected),
    sendMessage,
    readLastMessage,
  };
};
