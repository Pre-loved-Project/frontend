// src/features/chat/model/ChatListSocket.ts

import { Socket, SocketEvents } from "./socket";
import type { Chat, MessageProps } from "./types";

// ChatListSocket 고유의 이벤트 확장
interface ChatListUpdatePayload {
  chatId: number;
  lastMessage: MessageProps;
}

export interface ChatListSocketEvents extends SocketEvents {
  onChatCreated?: (chat: Chat) => void;
  onChatListUpdate?: (update: ChatListUpdatePayload) => void;
  onSystem?: (system: { type: string; message: string }) => void;
}

export class ChatListSocket extends Socket<ChatListSocketEvents> {
  constructor(events: ChatListSocketEvents = {}) {
    super(events);
  }

  protected getEndpointPath(): string {
    return "/ws/chat-list";
  }

  protected getDebugName(): string {
    return "ChatListSocket";
  }

  protected getCloseCodeName(): string {
    return "leave_chat_list"; // 채팅 목록 종료 이벤트 이름
  }

  // 💡 SocketBase의 connect()를 오버라이드하여 연결 성공 후 join_chat_list 이벤트 전송
  public override connect(): Promise<void> {
    return super.connect().then(() => {
      if (this.socket?.readyState === WebSocket.OPEN) {
        // 상위 connect()가 성공하면 join 이벤트 전송
        this.socket.send(JSON.stringify({ event: "join_chat_list" }));
      }
    });
  }

  // 💡 채팅 목록 고유의 메시지 처리 로직 구현 (서버 명세 기반)
  protected handleMessage(event: MessageEvent): void {
    try {
      const data = JSON.parse(event.data);

      switch (data.event) {
        case "chat_created":
          // 새로운 채팅방 생성 알림
          this.events.onChatCreated?.(data);
          break;
        case "chat_list_update":
          // 기존 채팅방의 메시지 업데이트 알림
          this.events.onChatListUpdate?.(data);
          break;
        case "system_message":
          // 서버 시스템 알림
          this.events.onSystem?.(data);
          break;
        case "error":
          // 서버에서 명시적으로 에러를 보낼 경우
          console.error(`[${this.getDebugName()}] Server Error:`, data);
          this.events.onError?.(new Error(data.message) as unknown as Event); // Event 타입으로 변환 필요
          break;
      }
    } catch (err) {
      console.error(`[${this.getDebugName()}] Message parse error:`, err);
    }
  }
}
