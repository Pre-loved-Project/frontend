"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { MessageProps } from "../../model/types";
import { MessageRow, MessageRowProps } from "../MessageRow/MessageRow";
import { mockMessages } from "../../model/mock";
import Button from "@/shared/ui/Button/Button";
import { TextField } from "@/shared/ui/TextField/TextField";
import DeleteIcon from "@/shared/images/delete.svg";
import { PostDetail } from "@/entities/post/model/types/post";
import { apiFetch } from "@/shared/api/fetcher";
import { useModalStore } from "@/shared/model/modal.store";

export const ChattingRoom = ({
  postingId,
  chatId,
}: {
  postingId: number;
  chatId?: number;
}) => {
  const [post, setPost] = useState<PostDetail | null>(null);
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [isPostLoading, setIsPostLoading] = useState(false);

  const { openModal, closeModal } = useModalStore();
  const profileImage =
    "https://chalddackimage.blob.core.windows.net/chalddackimage/profile_d776b3ca-9871-4ad1-a2f6-e7676ac03052.jpeg";

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

  const messagesWithComputedProps = (
    msgList: MessageProps[],
  ): MessageRowProps[] => {
    const result: MessageRowProps[] = [];
    let lastDate: string | null = null;

    msgList.forEach((msg, i) => {
      const prev = msgList[i - 1];
      const next = msgList[i + 1];

      const currentDate = formatDate(msg.sendAt);
      const currentTime = formatTime(msg.sendAt);
      const nextTime = next ? formatTime(next.sendAt) : null;

      const showProfile = !msg.isMine && (!prev || prev.isMine);
      const showTime =
        !next || next.isMine !== msg.isMine || nextTime !== currentTime;

      //날짜가 바뀌면 날짜 구분선 추가
      if (lastDate !== currentDate) {
        result.push({
          message: {
            messageId: -i,
            type: "system",
            content: currentDate,
            sendAt: msg.sendAt,
            isMine: false,
            isRead: true,
          },
          showProfile: false,
          showTime: false,
        });
        lastDate = currentDate;
      }

      result.push({
        message: msg,
        profileImage: !msg.isMine && showProfile ? profileImage : undefined,
        showProfile,
        showTime,
      });
    });
    return result;
  };

  useEffect(() => {
    //게시물 정보 조회하여 렌더링
    async function fetchPost() {
      try {
        setIsPostLoading(true);
        const res = await apiFetch<PostDetail>(`/api/postings/${postingId}`, {
          method: "GET",
        });

        setPost(res);
        setIsPostLoading(false);
      } catch {
        openModal("normal", {
          message: "게시물 정보 조회에 실패했습니다.",
          onClick: () => closeModal(),
        });
      }
    }
    fetchPost();
    setMessages(mockMessages);
  }, []);

  const displayMessages = useMemo(
    () => messagesWithComputedProps(messages),
    [messages],
  );

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

    setMessages((prev) => [
      ...prev,
      {
        messageId: Date.now(),
        type,
        content,
        isMine: true,
        sendAt,
        isRead: true,
      },
    ]);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file && file.type.startsWith("image/")) {
      setImage(file); // 선택된 이미지 파일을 상태에 저장
    }
  };

  if (isPostLoading)
    return <p className="text-center text-white">로딩 중...</p>;

  return (
    <div className="relative h-[calc(100vh-70px)] w-full xl:h-[calc(100vh-100px)]">
      {/* 게시글 정보 영역 */}
      <div className="absolute top-0 left-0 flex h-[100px] w-full items-center gap-4 border-b border-gray-500 p-4">
        {/* 게시글 이미지 */}
        <img
          src={post?.images[0]}
          alt="게시글 이미지"
          className="h-15 w-15 rounded object-cover"
        />
        {/* 제목과 가격 세로 정렬 */}
        <div className="flex flex-col">
          <span className="font-bold text-white">{post?.title}</span>
          <span className="text-white">
            {post?.price.toLocaleString("ko-KR") + " 원"}
          </span>
        </div>
      </div>

      {/* 메시지 리스트 영역 */}
      <div className="absolute top-[100px] bottom-[100px] left-0 w-full overflow-y-auto p-4">
        <div className="flex flex-col gap-4">
          {displayMessages.map((row) => (
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
