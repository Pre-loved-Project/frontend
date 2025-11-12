import { useEffect, useState, useRef } from "react";
import { apiFetch } from "@/shared/api/fetcher";
import { MessagesResponse, MessageProps } from "../model/types";
import { useModalStore } from "@/shared/model/modal.store";

export const useChatMessages = (chatId: number | null) => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [cursor, setCursor] = useState<number | null>(null);
  const [hasNext, setHasNext] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { openModal, closeModal } = useModalStore();

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // 초기 메시지
  useEffect(() => {
    if (!chatId) return;

    async function fetchMessages() {
      try {
        setIsLoading(true);
        const res = await apiFetch<MessagesResponse>(
          `/api/chat/${chatId}?size=20`,
          { method: "GET" },
        );

        setMessages(res.messages.reverse());
        setCursor(res.nextCursor);
        setHasNext(res.hasNext);

        if (messagesEndRef.current) {
          messagesEndRef.current.scrollIntoView({ behavior: "auto" });
        }
      } catch {
        openModal("normal", {
          message: "메시지 조회에 실패했습니다.",
          onClick: () => closeModal(),
        });
      } finally {
        setIsLoading(false);
      }
    }

    fetchMessages();
  }, [chatId]);

  // 이전 메시지 추가 로드
  const fetchMoreMessages = async () => {
    if (!chatId || !hasNext || isLoading) return;

    const container = scrollContainerRef.current;
    const prevHeight = container?.scrollHeight ?? 0;

    try {
      setIsLoading(true);
      const res = await apiFetch<MessagesResponse>(
        `/api/chat/${chatId}?cursor=${cursor}&size=20`,
        { method: "GET" },
      );
      setMessages((prev) => [...[...res.messages].reverse(), ...prev]);
      setCursor(res.nextCursor);
      setHasNext(res.hasNext);
      //스크롤 높이 조정
      if (container) {
        requestAnimationFrame(() => {
          const newHeight = container.scrollHeight;
          container.scrollTop += newHeight - prevHeight;
        });
      }
    } catch {
      openModal("normal", {
        message: "이전 메시지를 불러오는데 실패했습니다.",
        onClick: () => closeModal(),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    setMessages,
    isLoading,
    hasNext,
    fetchMoreMessages,
    scrollContainerRef,
    messagesEndRef,
  };
};
