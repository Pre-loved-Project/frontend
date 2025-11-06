"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { User } from "@/entities/user/model/types/user";
import { PostDetail } from "@/entities/post/model/types/post";
import { MessageProps, MessagesResponse } from "../../model/types";
import { MessageRow, MessageRowProps } from "../MessageRow/MessageRow";
import Button from "@/shared/ui/Button/Button";
import { TextField } from "@/shared/ui/TextField/TextField";
import DeleteIcon from "@/shared/images/delete.svg";
import { apiFetch } from "@/shared/api/fetcher";
import { uploadImage } from "@/shared/api/uploadImage";
import { useModalStore } from "@/shared/model/modal.store";
import { ChatSocket } from "../../model/socket";

export const ChattingRoom = ({
  postingId,
  otherId,
  chatId: initialChatId,
}: {
  postingId: number;
  otherId: number;
  chatId?: number;
}) => {
  const [chatId, setChatId] = useState<number | null>(initialChatId ?? null);
  const [post, setPost] = useState<PostDetail | null>(null);
  const [otherUser, setOtherUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [cursor, setCursor] = useState<number | null>(null);
  const [hasNext, setHasNext] = useState<boolean>(true);

  const [isOtherUserLoading, setIsOtherUserLoading] = useState(false);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [isMessagesLoading, setIsMessagesLoading] = useState(false);

  const { openModal, closeModal } = useModalStore();

  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<ChatSocket | null>(null);

  const connectSocket = (id: number): Promise<void> => {
    return new Promise((resolve) => {
      if (socketRef.current) socketRef.current.leaveRoom();

      const socket = new ChatSocket(id, {
        onOpen: () => {
          console.log("[Socket] connected");
          resolve();
        },
        onMessage: (msg) => setMessages((prev) => [...prev, msg]),
        onSystem: (sys) => console.log("[System]", sys.message),
        onClose: (code) => console.log("[Socket] Closed:", code),
      });

      socket.connect();
      socketRef.current = socket;
    });
  };

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
        profileImage:
          !msg.isMine && showProfile
            ? otherUser?.imageUrl
              ? otherUser.imageUrl
              : "/icons/user.svg"
            : undefined,
        showProfile,
        showTime,
      });
    });
    return result;
  };

  //게시물 정보 조회하여 렌더링
  useEffect(() => {
    async function fetchPost() {
      try {
        setIsPostLoading(true);
        const res = await apiFetch<PostDetail>(`/api/postings/${postingId}`, {
          method: "GET",
        });

        setPost(res);
      } catch {
        openModal("normal", {
          message: "게시물 정보 조회에 실패했습니다.",
          onClick: () => closeModal(),
        });
      } finally {
        setIsPostLoading(false);
      }
    }
    fetchPost();
  }, [postingId]);

  //상대방 정보 가져오기
  useEffect(() => {
    async function fecthUser() {
      try {
        setIsOtherUserLoading(true);
        const res = await apiFetch<User>(`/api/users/${otherId}`, {
          method: "GET",
        });
        setOtherUser(res);
      } catch {
        openModal("normal", {
          message: "상대 유저 정보 조회에 실패했습니다.",
          onClick: () => closeModal(),
        });
      } finally {
        setIsOtherUserLoading(false);
      }
    }
    fecthUser();
  }, []);

  useEffect(() => {
    if (!chatId) return;

    async function fetchInitialMessages() {
      try {
        setIsMessagesLoading(true);
        const res = await apiFetch<MessagesResponse>(
          `/api/chat/${chatId}?size=20`,
          { method: "GET" },
        );
        const sorted = [...res.messages].sort(
          (a, b) => new Date(a.sendAt).getTime() - new Date(b.sendAt).getTime(),
        );
        setMessages(sorted);
        setCursor(res.nextCursor);
        setHasNext(res.hasNext);
      } catch {
        openModal("normal", {
          message: "메시지 조회에 실패했습니다.",
          onClick: () => closeModal(),
        });
      } finally {
        setIsMessagesLoading(false);
      }
    }
    fetchInitialMessages();
  }, [chatId]);

  const displayMessages = useMemo(
    () => messagesWithComputedProps(messages),
    [messages],
  );

  //기존 채팅방이 있을 경우 바로 소켓 연결
  useEffect(() => {
    if (!socketRef.current && chatId) connectSocket(chatId);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    //채팅방이 없을 시 새로운 채팅방 생성 후 소켓 연결
    if (!text.trim() && !image) return;

    if (!chatId) {
      try {
        const res = await apiFetch<{ chatId: number; createdAt: string }>(
          `/api/chat`,
          {
            method: "POST",
            body: JSON.stringify({ postingId }),
          },
        );
        setChatId(res.chatId);
        await connectSocket(res.chatId);
      } catch {
        openModal("normal", {
          message: "채팅방 생성에 실패했습니다.",
          onClick: closeModal,
        });
      }
    }

    if (text.trim()) sendMessage("text", text);
    if (image) {
      const uploadedImageUrl = await uploadImage(image);
      sendMessage("image", uploadedImageUrl);
    }

    setText("");
    setImage(null);
  };

  const sendMessage = (type: "text" | "image", content: string) => {
    const now = new Date();
    const sendAt = now.toISOString();
    socketRef.current?.sendMessage(type, content);
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

  if (isPostLoading || isOtherUserLoading || isMessagesLoading)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-center text-lg font-medium text-white">로딩 중...</p>
      </div>
    );

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
        {displayMessages.length === 0 ? (
          <div className="flex h-full items-center justify-center text-sm text-gray-300">
            메시지가 없습니다. <br /> 지금 바로 채팅을 시작해보세요!
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {displayMessages.map((row) => (
              <MessageRow key={row.message.messageId} {...row} />
            ))}
          </div>
        )}
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
