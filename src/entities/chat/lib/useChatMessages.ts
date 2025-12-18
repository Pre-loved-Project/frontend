import {
  InfiniteData,
  useInfiniteQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useRef, useMemo } from "react";
import { apiFetch } from "@/shared/api/fetcher";
import { MessagesResponse, MessageProps, Chat } from "../model/types";

export const useChatMessages = (chatId: number | null) => {
  const queryClient = useQueryClient();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const {
    data,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage: isMessagesLoading,
    isLoading: isMessagesFirstLoading,
  } = useInfiniteQuery({
    queryKey: ["chatMessages", chatId],
    enabled: !!chatId,
    initialPageParam: null as number | null,
    gcTime: 50_000,

    queryFn: async ({ pageParam }) => {
      const url = pageParam
        ? `/api/chat/${chatId}?cursor=${pageParam}&size=20`
        : `/api/chat/${chatId}?size=20`;

      return apiFetch<MessagesResponse>(url, { method: "GET" });
    },

    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.nextCursor : undefined,
  });

  const messages: MessageProps[] = useMemo(() => {
    if (!data) return [];

    return data.pages
      .slice()
      .reverse()
      .flatMap((page) => [...page.messages].reverse());
  }, [data]);

  const lastOtherMessageId: number | null = useMemo(() => {
    if (!messages.length) return null;

    for (let i = messages.length - 1; i >= 0; i--) {
      const msg = messages[i];
      if (msg.type !== "system" && !msg.isMine) {
        return msg.messageId;
      }
    }
    return null;
  }, [messages]);

  const pushMessageToCache = (newMsg: MessageProps) => {
    //메시지 리스트 업데이트
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
    queryClient.invalidateQueries({ queryKey: ["chats"] });
  };

  const applyReadStatus = () => {
    if (!chatId) return;
    let stopUpdating = false;

    queryClient.setQueryData<InfiniteData<MessagesResponse>>(
      ["chatMessages", chatId],
      (oldData) => {
        if (!oldData) return oldData;

        const updatedPages = oldData.pages.map((page) => ({
          ...page,
          messages: page.messages.map((msg) => {
            if (stopUpdating) return msg;
            if (msg.isMine) {
              if (!msg.isRead) {
                return { ...msg, isRead: true };
              } else {
                stopUpdating = true;
                return msg;
              }
            }
            return msg;
          }),
        }));

        return {
          pageParams: oldData.pageParams,
          pages: updatedPages,
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
    lastOtherMessageId,
    pushMessageToCache,
    applyReadStatus,
    fetchMoreMessages,
    hasNextPage,
    isMessagesFirstLoading,
    isMessagesLoading,
    isError,
    error,
    scrollContainerRef,
    messagesEndRef,
  };
};
