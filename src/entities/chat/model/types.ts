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
