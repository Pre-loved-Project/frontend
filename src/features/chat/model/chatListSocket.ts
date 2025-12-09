import { Socket, SocketEvents } from "../../../entities/chat/model/socket";
import type { Chat, MessageProps } from "../../../entities/chat/model/types";

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

  protected handleMessage(event: MessageEvent): void {
    try {
      const data = JSON.parse(event.data);
      console.log(
        `event : ${JSON.stringify(event)}, data : ${JSON.stringify(data)} 호출`,
      );
      switch (data.event) {
        case "chat_created":
          this.events.onChatCreated?.(data.payload);
          break;
        case "chat_list_update":
          this.events.onChatListUpdate?.(data.payload);
          break;
        case "system_message":
          this.events.onSystem?.(data);
          break;
      }
    } catch (err) {
      console.error(`[${this.getDebugName()}] Message parse error:`, err);
    }
  }
}
