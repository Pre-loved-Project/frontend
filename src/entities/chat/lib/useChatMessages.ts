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

    //chats list의 lastMessage 업데이트
    const roles = [undefined, "buyer", "seller"];
    roles.forEach((role) => {
      queryClient.setQueryData<Chat[]>(["chats", role], (oldChats) => {
        if (!oldChats) return oldChats;

        const updatedChats = oldChats.map((chat) =>
          chat.chatId === chatId
            ? {
                ...chat,
                lastMessage: newMsg,
              }
            : chat,
        );

        return updatedChats.sort(
          (a, b) =>
            new Date(b.lastMessage?.sendAt ?? 0).getTime() -
            new Date(a.lastMessage?.sendAt ?? 0).getTime(),
        );
      });
    });
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
    isError,
    error,
    scrollContainerRef,
    messagesEndRef,
  };
};
