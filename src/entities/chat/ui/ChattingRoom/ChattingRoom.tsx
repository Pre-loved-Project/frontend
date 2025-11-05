"use client";
import React, { useState, useRef, useEffect } from "react";
import { MessageProps, MessagesResponse } from "../../model/types";
import { MessageRow, MessageRowProps } from "../MessageRow/MessageRow";
import { mockMessages } from "../../model/mock";
import Button from "@/shared/ui/Button/Button";
import { TextField } from "@/shared/ui/TextField/TextField";
import DeleteIcon from "@/shared/images/delete.svg";

export const ChattingRoom = () => {
  const number = 50000;
  const [messages, setMessages] = useState<MessageRowProps[]>([]);

  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const formatTime = (time: string) =>
    new Date(time).toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

  const formatDate = (time: string) => {
    const date = new Date(time);
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  useEffect(() => {
    const computedMessages: MessageRowProps[] = [];
    let lastDate: string | null = null;

    mockMessages.forEach((msg, i) => {
      const prev = mockMessages[i - 1];
      const next = mockMessages[i + 1];

      const showProfile = !msg.isMine && (!prev || prev.isMine);

      const currentTime = formatTime(msg.sendAt);
      const nextTime = next ? formatTime(next.sendAt) : null;
      const showTime =
        !next || next.isMine !== msg.isMine || nextTime !== currentTime;

      const currentDate = formatDate(msg.sendAt);
      if (lastDate !== currentDate) {
        computedMessages.push({
          message: {
            messageId: Date.now(),
            type: "system",
            content: currentDate,
            isMine: false,
            sendAt: msg.sendAt,
            isRead: true,
          },
          showProfile: false,
          showTime: false,
        });
        lastDate = currentDate;
      }

      computedMessages.push({
        message: { ...msg },
        showProfile,
        showTime,
      });
    });

    setMessages(computedMessages);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!text.trim() && !image) return;

    if (text.trim()) {
      sendMessage("text", text);
    }

    if (image) {
      sendMessage("image", URL.createObjectURL(image)); //TODO : 이미지 업로드
    }

    setText("");
    setImage(null);
  };

  const sendMessage = (type: "text" | "image", content: string) => {
    const now = new Date();
    const sendAt = now.toISOString();
    const currentDate = formatDate(sendAt);

    setMessages((prev) => {
      const updatedPrev = [...prev];

      const last = prev[prev.length - 1].message;
      const lastDate = last ? formatDate(last.sendAt) : null;
      const newMsgTime = formatTime(sendAt);
      const lastMsgTime = last ? formatTime(last.sendAt) : null;

      if (lastDate !== currentDate) {
        updatedPrev.push({
          message: {
            messageId: Date.now() + new Date(last?.sendAt).getTime(),
            type: "system",
            content: currentDate,
            isMine: false,
            sendAt,
            isRead: true,
          },
          showProfile: false,
          showTime: false,
        });
      }

      const newMessageRow: MessageRowProps = {
        message: {
          messageId: Date.now(),
          type,
          content,
          isMine: true,
          sendAt,
          isRead: true,
        },
        showProfile: false,
        showTime: true,
      };

      //직전 메시지가 같은 시간이라면 showTime false로 수정
      if (last?.isMine === true && lastMsgTime === newMsgTime) {
        updatedPrev[updatedPrev.length - 1] = {
          ...updatedPrev[updatedPrev.length - 1],
          showTime: false,
        };
      }

      return [...updatedPrev, newMessageRow];
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file && file.type.startsWith("image/")) {
      setImage(file); // 선택된 이미지 파일을 상태에 저장
    }
  };

  return (
    <div className="relative h-[calc(100vh-70px)] w-full xl:h-[calc(100vh-100px)]">
      {/* 게시글 정보 영역 */}
      <div className="absolute top-0 left-0 flex h-[100px] w-full items-center gap-4 border-b border-gray-500 p-4">
        {/* 게시글 이미지 */}
        <img
          src="https://chalddackimage.blob.core.windows.net/chalddackimage/bf6828c2-3151-433a-b582-ff954f7be6c1-mid.jpeg"
          alt="게시글 이미지"
          className="rounded-full"
          width={90}
          height={90}
        />
        {/* 제목과 가격 세로 정렬 */}
        <div className="flex flex-col">
          <span className="font-bold text-white">아토마 어쩌구 크림</span>
          <span className="text-white">
            {number.toLocaleString("ko-KR") + " 원"}
          </span>
        </div>
      </div>

      {/* 메시지 리스트 영역 */}
      <div className="absolute top-[100px] bottom-[100px] left-0 w-full overflow-y-auto p-4">
        <div className="flex flex-col gap-4">
          {messages.map((row) => (
            <MessageRow key={row.message.messageId} {...row} />
          ))}
        </div>
        <div ref={messagesEndRef} />
      </div>

      {image && (
        <div className="absolute bottom-[100px] left-0 px-8">
          <div className="relative flex items-center justify-center rounded-md bg-gradient-to-r from-[rgba(80,151,250,0.4)] to-[rgba(83,99,255,0.4)] p-8 px-20">
            <img
              src={URL.createObjectURL(image)}
              alt="Selected image"
              className="h-[100px] w-[100px] rounded-md object-cover md:h-[150px] md:w-[150px] xl:h-[150px] xl:w-[150px]"
            />
            <button
              type="button"
              onClick={() => setImage(null)}
              className="absolute top-1 right-1"
            >
              <DeleteIcon
                width={24}
                height={24}
                aria-label="닫기"
                className="cursor-pointer"
                role="img"
              />
            </button>
          </div>
        </div>
      )}

      {/* 메시지 입력 창 영역 */}
      <div className="absolute bottom-0 left-0 flex h-[100px] w-full items-center gap-4 p-4">
        <label className="bg-black-900 cursor-pointer rounded-full p-2">
          <img
            src="/icons/image-select.svg"
            alt="Upload Icon"
            className="h-[24px] w-[24px] md:h-[25px] md:w-[25px] xl:h-[34px] xl:w-[34px]"
          />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>

        {/* 텍스트 입력창 */}
        <TextField
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="메시지를 입력하세요..."
          className="h-full w-full md:h-full md:w-full xl:h-full xl:w-full"
        />

        {/* 전송 버튼 */}
        <Button
          variant="primary"
          disabled={!text && !image} // 텍스트와 이미지 없으면 비활성화
          className="w-[100px] md:w-[100px] xl:w-[150px]"
          onClick={handleSend}
        >
          전송
        </Button>
      </div>
    </div>
  );
};
