import { create } from "zustand";
import { ChatSocket, ChatSocketEvents } from "@/entities/chat/model/chatSocket";
import { ChatListSocket, ChatListSocketEvents } from "./chatListSocket";
interface ChatSocketManager {
  chatListSocket: ChatListSocket | null;
  chatRoomSocket: ChatSocket | null;
  chatListSocketConnected: boolean;
  chatRoomSocketConnected: boolean;
  connectChatRoom: (
    chatId: number,
    otherId: number,
    handlers: ChatSocketEvents,
  ) => void;
  connectChatList: (handlers: ChatListSocketEvents) => void;
  disconnectChatList: () => Promise<void>;
  disconnectChatRoom: () => Promise<void>;
}

export const useChatSocketManager = create<ChatSocketManager>((set, get) => ({
  chatListSocket: null,
  chatRoomSocket: null,
  chatListSocketConnected: false,
  chatRoomSocketConnected: false,

  async connectChatList(handlers) {
    const { chatRoomSocket } = get();
    if (chatRoomSocket) {
      await chatRoomSocket.close();
      set({ chatRoomSocket: null });
    }

    if (get().chatListSocket?.isOpen()) return;

    const socket = new ChatListSocket({
      ...handlers,
      onOpen: () => {
        set({ chatListSocketConnected: true });
        handlers.onOpen?.();
      },
      onClose: (code, reason) => {
        set({ chatListSocketConnected: false });
        handlers.onClose?.(code, reason);
      },
    });
    set({ chatListSocket: socket });
    await socket.connect();
  },

  async connectChatRoom(chatId, otherId, handlers) {
    const { chatListSocket } = get();
    if (chatListSocket) {
      await chatListSocket.close();
      set({ chatListSocket: null });
    }

    if (get().chatRoomSocket?.isOpen()) return;

    const socket = new ChatSocket(chatId, otherId, {
      ...handlers,
      onOpen: () => {
        set({ chatRoomSocketConnected: true });
        handlers.onOpen?.();
      },
      onClose: (code, reason) => {
        set({ chatRoomSocketConnected: false });
        handlers.onClose?.(code, reason);
      },
    });
    set({ chatRoomSocket: socket });
    await socket.connect();
  },

  async disconnectChatList() {
    const socket = get().chatListSocket;
    if (!socket) return;
    await socket.close();
    set({ chatListSocket: null });
  },

  async disconnectChatRoom() {
    const socket = get().chatRoomSocket;
    if (!socket) return;
    await socket.close();
    set({ chatRoomSocket: null });
  },
}));
