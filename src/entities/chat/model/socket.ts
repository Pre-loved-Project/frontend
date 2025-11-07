import { MessageProps } from "./types";
import { useAuthStore } from "@/features/auth/model/auth.store";

export interface ChatSocketEvents {
  onOpen?: () => void;
  onMessage?: (message: MessageProps) => void;
  onSystem?: (system: { type: string; message: string }) => void;
  onClose?: (code: number, reason?: string) => void;
  onError?: (event: Event) => void;
}

export class ChatSocket {
  private socket: WebSocket | null = null;
  private chatId: number;
  private events: ChatSocketEvents;

  constructor(chatId: number, events: ChatSocketEvents = {}) {
    this.chatId = chatId;
    this.events = events;
  }

  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.socket) {
        console.warn("[Socket] Already connected");
        resolve();
        return;
      }

      const { accessToken } = useAuthStore.getState();
      const wsUrl = `${
        process.env.NEXT_PUBLIC_API_WS_URL || "ws://localhost:8000"
      }/ws/chat/${this.chatId}?token=${accessToken}`;

      this.socket = new WebSocket(wsUrl);

      this.socket.onopen = () => {
        console.log("[Socket] Connected");
        this.events.onOpen?.();
        resolve(); // ✅ 연결 완료
      };

      this.socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (["welcome", "system", "read"].includes(data.type)) {
            this.events.onSystem?.(data);
            return;
          }

          if (data.messageId && data.content) {
            const msg: MessageProps = {
              messageId: data.messageId,
              type: data.type,
              content: data.content,
              isMine: false,
              sendAt: data.createdAt,
              isRead: false,
            };
            this.events.onMessage?.(msg);
          }
        } catch (err) {
          console.error("[Socket] Message parse error:", err);
        }
      };

      this.socket.onclose = (event) => {
        console.warn("[Socket] Closed:", event.code);
        this.events.onClose?.(event.code, event.reason);
        this.socket = null;
      };

      this.socket.onerror = (err) => {
        console.error("[Socket] Error:", err);
        this.events.onError?.(err);
        reject(err);
      };
    });
  }

  sendMessage(type: "text" | "image", content: string) {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      console.warn("[Socket] Not connected");
      return;
    }

    const payload = {
      event: "send_message",
      type,
      content,
    };

    this.socket.send(JSON.stringify(payload));
  }

  leaveRoom() {
    if (!this.socket) return;
    console.log(this.socket);
    this.socket.send(JSON.stringify({ event: "leave_room" }));
    this.socket.close(1000, "User left");
    this.socket = null;
  }
}
