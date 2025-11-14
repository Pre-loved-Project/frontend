import {
  InfiniteData,
  useInfiniteQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useEffect, useRef, useMemo } from "react";
import { apiFetch } from "@/shared/api/fetcher";
import { MessagesResponse, MessageProps } from "../model/types";
import { useModalStore } from "@/shared/model/modal.store";

export const useChatMessages = (chatId: number | null) => {
  const queryClient = useQueryClient();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const { openModal, closeModal } = useModalStore();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage: isMessagesLoading,
    isLoading: isMessagesFirstLoading,
  } = useInfiniteQuery({
    queryKey: ["chatMessages", chatId],
    enabled: !!chatId,
    initialPageParam: null as number | null,

    queryFn: async ({ pageParam }) => {
      const url = pageParam
        ? `/api/chat/${chatId}?cursor=${pageParam}&size=20`
        : `/api/chat/${chatId}?size=20`;

      return apiFetch<MessagesResponse>(url, { method: "GET" });
    },

    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.nextCursor : undefined,
  });

  useEffect(() => {
    if (error) {
      openModal("normal", {
        message: "메시지 로딩 중 에러가 발생했습니다.",
        onClick: closeModal,
      });
    }
  }, [error]);

  const messages: MessageProps[] = useMemo(() => {
    if (!data) return [];

    return data.pages
      .slice()
      .reverse()
      .flatMap((page) => [...page.messages].reverse());
  }, [data]);

  const pushMessageToCache = (newMsg: MessageProps) => {
    queryClient.setQueryData<InfiniteData<MessagesResponse>>(
      ["chatMessages", chatId],
      (oldData) => {
        if (!oldData) return oldData;
        const firstPage = oldData.pages[0];

        const updatedFirstPage: MessagesResponse = {
          ...firstPage,
          messages: [newMsg, ...firstPage.messages],
        };

        return {
          pageParams: oldData.pageParams,
          pages: [updatedFirstPage, ...oldData.pages.slice(1)],
        };
      },
    );
  };

  const fetchMoreMessages = async () => {
    const container = scrollContainerRef.current;
    const prevHeight = container?.scrollHeight ?? 0;

    await fetchNextPage();

    if (container) {
      requestAnimationFrame(() => {
        const newHeight = container.scrollHeight;
        container.scrollTop = newHeight - prevHeight;
      });
    }
  };

  return {
    messages,
    pushMessageToCache,
    fetchMoreMessages,
    hasNextPage,
    isMessagesFirstLoading,
    isMessagesLoading,
    error,
    scrollContainerRef,
    messagesEndRef,
  };
};
