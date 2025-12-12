import { MessageProps } from "../../model/types";
import { Message } from "../Message/Message";

export interface MessageRowProps {
  message: MessageProps;
  profileImage?: string;
  showProfile: boolean;
  showTime: boolean;
}

export const MessageRow = ({
  message,
  profileImage,
  showProfile,
  showTime,
}: MessageRowProps) => {
  const timeText = new Date(message.sendAt).toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  if (message.type === "system") {
    return (
      <div className="my-5 flex justify-center">
        <div className="rounded-full bg-gradient-to-r from-[#5097fa] to-[#5363ff] px-4 py-2 text-[13px] font-semibold text-white">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`mb-2 flex w-full pl-13 ${
        message.isMine ? "justify-end" : "justify-start"
      }`}
    >
      <div className="relative flex max-w-[70%] flex-col">
        {!message.isMine && showProfile && (
          <img
            src={profileImage}
            alt="프로필"
            className="absolute top-0 -left-13 h-9 w-9 rounded-full"
          />
        )}

        <Message {...message} />
        {message.isMine && !message.isRead && (
          <span
            className={`absolute -left-4 text-[11px] font-bold text-blue-400 ${
              showTime ? "bottom-4" : "bottom-0"
            }`}
          >
            1
          </span>
        )}

        {showTime && (
          <span
            className={`absolute bottom-0 text-[11px] text-gray-400 ${
              message.isMine ? "-left-9" : "-right-9"
            }`}
          >
            {timeText}
          </span>
        )}
      </div>
    </div>
  );
};
