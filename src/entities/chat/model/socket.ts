import { DealStatus, MessageProps } from "./types";
import { useAuthStore } from "@/features/auth/model/auth.store";
import { PostStatus } from "@/entities/post/model/types/post";
import { AuthorizationError } from "@/shared/error/error";
import { handleError } from "@/shared/error/handleError";

export interface ChatSocketEvents {
  onOpen?: () => void;
  onMessage?: (message: MessageProps) => void;
  onSystem?: (system: { type: string; message: string }) => void;
  onDealUpdate?: (update: {
    postStatus: PostStatus;
    dealStatus: DealStatus;
    message: string;
  }) => void;
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

  isOpen(): boolean {
    return this.socket !== null && this.socket.readyState === WebSocket.OPEN;
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
        resolve();
      };

      this.socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);

          if (data.type === "deal_update") {
            this.events.onDealUpdate?.({
              dealStatus: data.dealStatus,
              postStatus: data.postStatus,
              message: data.systemMessage,
            });
            return;
          }

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

      this.socket.onclose = async (event) => {
        if (event.code === 4001) {
          console.warn("[Socket] Token expired (4001)");

          const { logout, setAccessToken } = useAuthStore.getState();

          try {
            const refreshed = await fetch("/api/auth/refresh", {
              method: "POST",
              credentials: "include",
            });

            if (!refreshed.ok) {
              logout();

              throw new AuthorizationError(
                "세션이 만료되었습니다.\n다시 로그인 해주세요.",
              );
            }

            const { accessToken: newToken } = await refreshed.json();
            setAccessToken(newToken);

            this.reconnect();
          } catch (err) {
            handleError(err);
            logout();
            return;
          }
        }

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

  private reconnect() {
    console.log("[Socket] Reconnecting after refresh…");
    this.socket = null;
    this.connect();
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

    const state = this.socket.readyState;

    if (state === WebSocket.OPEN) {
      this.socket.send(JSON.stringify({ event: "leave_room" }));
      this.socket.close(1000, "User left");
    } else {
      this.socket.close(1000, `User left skipped - ${state.toString()}`);
    }

    this.socket = null;
  }
}
