import { Socket, SocketEvents } from "./socket";
import type { DealStatus, MessageProps } from "./types";
import type { PostStatus } from "@/entities/post/model/types/post";

export interface ChatSocketEvents extends SocketEvents {
  onMessage?: (message: MessageProps) => void;
  onSystem?: (system: { type: string; message: string }) => void;
  onDealUpdate?: (update: {
    postStatus: PostStatus;
    dealStatus: DealStatus;
    message: string;
  }) => void;
}

export class ChatSocket extends Socket<ChatSocketEvents> {
  private chatId: number;

  constructor(chatId: number, events: ChatSocketEvents = {}) {
    super(events);
    this.chatId = chatId;
  }

  protected getEndpointPath(): string {
    return `/ws/chat/${this.chatId}`;
  }

  protected getDebugName(): string {
    return `ChatSocket (ID: ${this.chatId})`;
  }

  protected getCloseCodeName(): string {
    return "leave_room"; // 개별 채팅방 종료 이벤트 이름
  }

  // 개별 채팅방 고유의 메시지 처리 로직 구현
  protected handleMessage(event: MessageEvent): void {
    try {
      const data = JSON.parse(event.data);

      if (data.type === "deal_update") {
        this.events.onDealUpdate?.(data);
        return;
      }

      if (["welcome", "system", "read"].includes(data.type)) {
        this.events.onSystem?.(data);
        return;
      }

      if (data.messageId && data.content) {
        // 메시지 수신 로직
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
      console.error("[ChatSocket] Message parse error:", err);
    }
  }

  public sendMessage(type: "text" | "image", content: string) {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      console.warn("[ChatSocket] Not connected");
      return;
    }

    const payload = { event: "send_message", type, content };
    this.socket.send(JSON.stringify(payload));
  }
}
