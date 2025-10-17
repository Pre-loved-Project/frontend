import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  // 임시 mock 데이터 (테스트용)
  const mockPost = {
    postingId: Number(id),
    sellerId: 101,
    title: "다이슨 슈퍼소닉 드라이기",
    price: 320000,
    content: `사용감 거의 없는 다이슨 드라이기 판매합니다.
정품이고 구성품 모두 있습니다.
직거래/택배 모두 가능해요.`,
    category: "가전제품",
    viewCount: 154,
    likeCount: 12,
    chatCount: 3,
    createdAt: "2025-10-15T10:30:00Z",
    updatedAt: "2025-10-15T10:30:00Z",
    images: [
      "https://tse3.mm.bing.net/th/id/OIP.LIvrz2QviNSqdO1JhMEf0gHaHk?cb=12&pid=Api",
      "https://tse3.mm.bing.net/th/id/OIP.LIvrz2QviNSqdO1JhMEf0gHaHk?cb=12&pid=Api",
      "https://tse3.mm.bing.net/th/id/OIP.LIvrz2QviNSqdO1JhMEf0gHaHk?cb=12&pid=Api",
    ],
    isOwner: false,
  };

  return NextResponse.json(mockPost);
}
