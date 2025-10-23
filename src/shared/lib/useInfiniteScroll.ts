import { useEffect, useRef, useCallback } from "react";

/**
 * IntersectionObserver 기반 무한 스크롤 감지 훅
 * @param onIntersect 교차 시 실행할 콜백
 * @param isLoading 로딩 중 여부
 * @param hasMore 더 불러올 데이터가 있는지 여부
 * @returns ref 콜백 (마지막 요소에 전달)
 */
export function useInfiniteScroll<T extends HTMLElement = HTMLDivElement>(
  onIntersect: () => void,
  isLoading: boolean,
  hasMore: boolean,
) {
  const observer = useRef<IntersectionObserver | null>(null);

  const ref = useCallback(
    (node: T | null) => {
      if (isLoading || !hasMore) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) onIntersect();
      });

      if (node) observer.current.observe(node);
    },
    [onIntersect, isLoading, hasMore],
  );

  useEffect(() => {
    return () => observer.current?.disconnect();
  }, []);

  return ref;
}
