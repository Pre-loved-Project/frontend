"use client";

import ChatItem from "@/entities/chat/ui/ChatItem";
import { chats } from "@/entities/chat/model/mock";

const ChatList = ({ onSelect }: { onSelect: (id: number) => void }) => {
  return (
    <div className="flex flex-col divide-y divide-gray-600">
      {chats.map((chat) => (
        <ChatItem
          key={chat.chatId}
          chat={chat}
          onClick={() => onSelect(chat.chatId)}
        />
      ))}
    </div>
  );
};

export default ChatList;
