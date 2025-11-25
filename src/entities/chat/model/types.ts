export type DealStatus = "ACTIVE" | "RESERVED" | "COMPLETED";

export interface Chat {
  chatId: number;
  postingId: number;
  postingTitle: string;
  role: string;
  lastMessage: MessageProps;
  createdAt: string;
  status: DealStatus;
  otherId: number;
  otherNickname: string;
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
