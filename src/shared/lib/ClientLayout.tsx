"use client";

import { useResetKeywordOnPathChange } from "@/shared/lib/useResetKeyword";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  useResetKeywordOnPathChange();
  return <>{children}</>;
}
