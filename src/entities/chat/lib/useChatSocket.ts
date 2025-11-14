import { useEffect, useRef } from "react";
import { ChatSocket } from "../model/socket";
import { MessageProps } from "../model/types";

export const useChatSocket = (
  chatId: number | null,
  pushMessageToCache: (msg: MessageProps) => void,
  scrollToBottom?: () => void,
) => {
  const socketRef = useRef<ChatSocket | null>(null);
  const isConnectedRef = useRef(false);

  useEffect(() => {
    if (!chatId) return;

    const socket = new ChatSocket(chatId, {
      onOpen: () => {
        console.log("[Socket] Connected");
        isConnectedRef.current = true;
      },
      onMessage: (msg) => {
        pushMessageToCache(msg);
        requestAnimationFrame(() => scrollToBottom?.());
      },
      onSystem: (sys) => console.log("[System]", sys.message),
      onClose: (code) => {
        console.log("[Socket] Closed:", code);
        isConnectedRef.current = false;
      },
      onError: () => {
        isConnectedRef.current = false;
      },
    });

    socket.connect().then(() => {
      isConnectedRef.current = true;
    });

    socketRef.current = socket;

    // cleanup
    return () => {
      socketRef.current?.leaveRoom();
      socketRef.current = null;
      isConnectedRef.current = false;
    };
  }, [chatId]);

  const waitForConnection = async () => {
    const socket = socketRef.current;
    if (!socket) return;

    // 연결 시도 중이면 connect()의 Promise를 기다려줌
    if (!isConnectedRef.current) {
      await socket.connect();
      isConnectedRef.current = true;
    }
  };

  const sendMessage = async (type: "text" | "image", content: string) => {
    await waitForConnection(); // 연결 안 되어있으면 여기서 기다림

    const now = new Date();
    const sendAt = now.toISOString();
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

  return { sendMessage };
};
