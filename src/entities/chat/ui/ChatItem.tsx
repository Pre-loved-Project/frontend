import Image from "next/image";
import type { Chat } from "../model/types";
import Profile from "@/entities/user/ui/card/assets/profile.jpg";
import { useFormattedTime } from "@/entities/chat/lib/useFormattedTime";

interface ChatItemProps {
  chat: Chat;
  onClick?: () => void;
}

const ChatItem = ({ chat, onClick }: ChatItemProps) => {
  const formattedTime = useFormattedTime(chat.createdAt);

  return (
    <button
      onClick={onClick}
      className="flex h-[80px] w-full items-center gap-3 bg-transparent px-4 py-3 text-left"
    >
      <div className="relative h-12 w-12 flex-shrink-0">
        <Image
          src={chat.otherImage || Profile}
          alt={`${chat.otherNick} 프로필`}
          fill
          sizes="48px"
          className="rounded-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-white">{chat.otherNick}</span>
          <span className="text-xs text-gray-400">{formattedTime}</span>
        </div>

        <p className="truncate text-sm text-gray-400">{chat.lastMessage}</p>
      </div>
    </button>
  );
};

export default ChatItem;
