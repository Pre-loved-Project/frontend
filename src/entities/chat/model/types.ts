export interface Chat {
  chatId: number;
  postingId: number;
  postingTitle: string;
  role: string;
  lastMessage: string;
  createdAt: string;
  status: string;
  otherId: number;
  otherNick: string;
  otherImage: string;
}

export interface MessageProps {
  messageId: number;
  type: "text" | "image" | "system";
  content: string;
  sendAt: string;
  isMine: boolean;
  isRead: boolean;
}

export interface MessagesResponse {
  messages: MessageProps[];
  hasNext: boolean;
  nextCursor: number | null;
}
