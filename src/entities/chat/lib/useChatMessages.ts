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

  const lastReadMessageId = useMemo(() => {
    if (!data || data.pages.length == 0) return null;
    return data.pages[0].lastReadMessageId;
  }, [data]);

  const lastOtherMessageId: number | null = useMemo(() => {
    if (!messages.length) return null;

    for (let i = messages.length - 1; i >= 0; i--) {
      const msg = messages[i];
      if (msg.type !== "system" && !msg.isMine) {
        console.log(`현재 상대 마지막 메시지 id : ${msg.messageId}`);
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

  const applyReadStatus = () => {
    if (!chatId) return;
    console.log("applyReadStatus 호출");
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
                console.log(
                  `applayReadStatus에서 msg ${msg.messageId}가 true로 바뀜`,
                );
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
    lastReadMessageId,
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
