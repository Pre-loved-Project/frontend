"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { SearchCommands } from "@/shared/commands/SearchCommands";

export function useResetKeywordOnPathChange() {
  const pathname = usePathname();
  const prevPathRef = useRef<string>("");

  useEffect(() => {
    if (prevPathRef.current && prevPathRef.current !== pathname) {
      SearchCommands.changeKeyword("");
    }

    prevPathRef.current = pathname;
  }, [pathname]);
}
