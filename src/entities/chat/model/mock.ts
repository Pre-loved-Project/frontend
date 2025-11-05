import { ChatMessage } from "../ui/MessageRow/MessageRow";
export const chats = [
  {
    chatId: 501,
    postingId: 101,
    postingTitle: "맥북 프로 16인치 판매",
    role: "buyer",
    lastMessage: "가격 조정이 가능할까요?",
    createdAt: "2025-10-24T09:30:00Z",
    status: "RESERVED",
    otherId: 33,
    otherNick: "홍길동",
    otherImage: "",
  },
  {
    chatId: 502,
    postingId: 102,
    postingTitle: "아이패드 미니 판매",
    role: "seller",
    lastMessage: "상품 상태에 대해 궁금한 점이 있습니다.",
    createdAt: "2025-10-23T21:00:00Z",
    status: "SOLD",
    otherId: 35,
    otherNick: "김민수",
    otherImage: "",
  },
  {
    chatId: 503,
    postingId: 103,
    postingTitle: "닌텐도 스위치 OLED 팝니다",
    role: "buyer",
    lastMessage: "직거래 가능한가요?",
    createdAt: "2025-10-22T15:10:00Z",
    status: "ACTIVE",
    otherId: 36,
    otherNick: "이서준",
    otherImage: "",
  },
  {
    chatId: 504,
    postingId: 104,
    postingTitle: "에어팟 프로 2세대 판매",
    role: "seller",
    lastMessage: "혹시 구성품은 모두 있나요?",
    createdAt: "2025-10-21T13:45:00Z",
    status: "ACTIVE",
    otherId: 37,
    otherNick: "박지현",
    otherImage: "",
  },
  {
    chatId: 505,
    postingId: 105,
    postingTitle: "게이밍 의자 판매합니다",
    role: "buyer",
    lastMessage: "의자 상태 괜찮나요?",
    createdAt: "2025-10-19T10:20:00Z",
    status: "RESERVED",
    otherId: 38,
    otherNick: "최민재",
    otherImage: "",
  },
];

export const mockMessages: ChatMessage[] = [
  // 🔹 [1] 첫 메시지 — 상대방 (프로필 보임, 시간 표시)
  {
    id: 1,
    type: "text",
    content: "안녕하세요! 이 물건 아직 있나요?",
    isMine: false,
    profileImage:
      "https://chalddackimage.blob.core.windows.net/chalddackimage/profile_d776b3ca-9871-4ad1-a2f6-e7676ac03052.jpeg",
    sendAt: "2025-10-31T10:00:00Z",
  },

  // 🔹 [2] 내 메시지 (시간 차 있음 → 시간 표시)
  {
    id: 2,
    type: "text",
    content: "네, 아직 있습니다 🙂",
    isMine: true,
    sendAt: "2025-10-31T10:01:00Z",
  },

  // 🔹 [3] 상대방 이미지 메시지 (같은 유저, 같은 분 안 → 프로필 X, 시간 X)
  {
    id: 3,
    type: "image",
    content:
      "https://chalddackimage.blob.core.windows.net/chalddackimage/150100000286_03.webp",
    isMine: false,
    profileImage:
      "https://chalddackimage.blob.core.windows.net/chalddackimage/profile_d776b3ca-9871-4ad1-a2f6-e7676ac03052.jpeg",
    sendAt: "2025-10-31T10:01:30Z",
  },

  // 🔹 [4] 상대방 텍스트 메시지 (같은 유저, 같은 분 → 프로필 X, 마지막 → 시간 표시)
  {
    id: 4,
    type: "text",
    content: "좋아요, 거래 원해요!",
    isMine: false,
    profileImage:
      "https://chalddackimage.blob.core.windows.net/chalddackimage/profile_d776b3ca-9871-4ad1-a2f6-e7676ac03052.jpeg",
    sendAt: "2025-10-31T10:02:00Z",
  },

  // 🔹 [5] 내 메시지 여러 개 (같은 분 → 앞은 showTime=false, 마지막만 true)
  {
    id: 5,
    type: "text",
    content: "좋아요. 어디서 거래할까요?",
    isMine: true,
    sendAt: "2025-10-31T10:03:10Z",
  },
  {
    id: 6,
    type: "text",
    content: "저는 강남역 근처 가능합니다.",
    isMine: true,
    sendAt: "2025-10-31T10:03:40Z",
  },
  {
    id: 7,
    type: "text",
    content: "시간은 언제쯤 괜찮으세요?",
    isMine: true,
    sendAt: "2025-10-31T10:04:00Z",
  },

  // 🔹 [8] 상대방 메시지 (새로운 유저 → 프로필 보임, 시간 표시)
  {
    id: 8,
    type: "text",
    content: "오후 3시쯤 어떠세요?",
    isMine: false,
    profileImage:
      "https://chalddackimage.blob.core.windows.net/chalddackimage/profile_d776b3ca-9871-4ad1-a2f6-e7676ac03052.jpeg",
    sendAt: "2025-10-31T10:05:00Z",
  },

  // 🔹 [9] 내 메시지 (시간 간격 큼 → 시간 표시)
  {
    id: 9,
    type: "text",
    content: "좋습니다. 그때 뵐게요!",
    isMine: true,
    sendAt: "2025-10-31T10:10:00Z",
  },

  // 🔹 [10] 날짜 변경 (새로운 날짜 → 날짜 구분선 확인용)
  {
    id: 10,
    type: "text",
    content: "안녕하세요, 어제 말씀드린 거래건입니다.",
    isMine: false,
    profileImage:
      "https://chalddackimage.blob.core.windows.net/chalddackimage/profile_d776b3ca-9871-4ad1-a2f6-e7676ac03052.jpeg",
    sendAt: "2025-11-01T09:55:00Z",
  },
  {
    id: 11,
    type: "text",
    content: "오늘 일정 그대로죠?",
    isMine: false,
    profileImage:
      "https://chalddackimage.blob.core.windows.net/chalddackimage/profile_d776b3ca-9871-4ad1-a2f6-e7676ac03052.jpeg",
    sendAt: "2025-11-01T09:56:00Z",
  },
  {
    id: 12,
    type: "text",
    content: "네, 맞아요! 오후 3시 강남역에서 봬요.",
    isMine: true,
    sendAt: "2025-11-01T09:57:00Z",
  },
];
