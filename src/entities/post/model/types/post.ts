export interface Post {
  postingId: number;
  title: string;
  price: number;
  sellerId: number;
  content: string;
  createdAt: string;
  likeCount: number;
  chatCount: number;
  viewCount: number;
  thumbnail: string;
}

export interface PostDetail {
  postingId: number;
  sellerId: number;
  title: string;
  price: number;
  content: string;
  category: string;
  viewCount: number;
  likeCount: number;
  chatCount: number;
  createdAt: string;
  updatedAt: string;
  images: string[];
  isOwner: boolean;
  isFavorite: boolean;
}
