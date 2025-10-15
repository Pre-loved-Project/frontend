import { NextResponse } from "next/server";

export async function GET() {
  // 임시 mock 데이터 (테스트용)
  const mockPosts = [
    {
      postingId: 1,
      title: "다이슨 슈퍼소닉 드라이기 판매합니다",
      price: 420000,
      sellerId: 101,
      content: "정품 A급 상태로, 사용 기간 짧고 작동 아주 잘 됩니다.",
      createdAt: "2025-10-04",
      likeCount: 12,
      chatCount: 3,
      viewCount: 150,
      thumbnail:
        "https://tse3.mm.bing.net/th/id/OIP.LIvrz2QviNSqdO1JhMEf0gHaHk?cb=12&pid=Api",
    },
    {
      postingId: 2,
      title: "다이슨 슈퍼소닉 드라이기 판매합니다",
      price: 420000,
      sellerId: 101,
      content: "정품 A급 상태로, 사용 기간 짧고 작동 아주 잘 됩니다.",
      createdAt: "2025-10-04",
      likeCount: 12,
      chatCount: 3,
      viewCount: 150,
      thumbnail:
        "https://tse3.mm.bing.net/th/id/OIP.LIvrz2QviNSqdO1JhMEf0gHaHk?cb=12&pid=Api",
    },
    {
      postingId: 3,
      title: "다이슨 슈퍼소닉 드라이기 판매합니다",
      price: 420000,
      sellerId: 101,
      content: "정품 A급 상태로, 사용 기간 짧고 작동 아주 잘 됩니다.",
      createdAt: "2025-10-04",
      likeCount: 12,
      chatCount: 3,
      viewCount: 150,
      thumbnail:
        "https://tse3.mm.bing.net/th/id/OIP.LIvrz2QviNSqdO1JhMEf0gHaHk?cb=12&pid=Api",
    },
  ];

  return NextResponse.json(mockPosts);
}
