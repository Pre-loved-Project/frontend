import { useEffect, useState } from "react";
import { apiFetch } from "@/shared/api/fetcher";
import { MessagesResponse, MessageProps } from "../model/types";
import { useModalStore } from "@/shared/model/modal.store";

export const useChatMessages = (chatId: number | null) => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [cursor, setCursor] = useState<number | null>(null);
  const [hasNext, setHasNext] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { openModal, closeModal } = useModalStore();

  useEffect(() => {
    if (!chatId) return;

    async function fetchMessages() {
      try {
        setIsLoading(true);
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
        setIsLoading(false);
      }
    }

    fetchMessages();
  }, [chatId]);

  return { messages, setMessages, cursor, hasNext, isLoading };
};
