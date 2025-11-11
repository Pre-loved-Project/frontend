"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useSearchStore } from "../model/search.store";

export function useResetKeywordOnPathChange() {
  const pathname = usePathname();
  const { setKeyword } = useSearchStore();
  const prevPathRef = useRef<string>("");

  useEffect(() => {
    if (prevPathRef.current && prevPathRef.current !== pathname) {
      setKeyword("");
    }

    prevPathRef.current = pathname;
  }, [pathname, setKeyword]);
}
