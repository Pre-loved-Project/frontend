import { differenceInDays, format } from "date-fns";

/**
 * 오늘 → "HH:mm"
 * 어제 → "어제"
 * 그 이전 → "MM.dd"
 */
export function useFormattedTime(createdAt: string) {
  if (!createdAt) return "";

  const date = new Date(createdAt);
  const now = new Date();
  const diffDays = differenceInDays(now, date);

  if (diffDays === 0) return format(date, "HH:mm");
  if (diffDays === 1) return "어제";
  return format(date, "MM.dd");
}
