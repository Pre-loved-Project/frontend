"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchForm from "./SearchForm";
import { useOpenCreatePostWithAuth } from "@/features/createPost/lib/useOpenCreatePost";

interface HeaderDesktopProps {
  isLogined: boolean;
  navItems: {
    href: string;
    label: string;
    icon: string;
    hasDivider: boolean;
  }[];
  onOpenChat: (info?: {
    postingId: number;
    otherId: number;
    chatId?: number;
  }) => void;
}

const HeaderDesktop = ({
  isLogined,
  navItems,
  onOpenChat,
}: HeaderDesktopProps) => {
  const pathname = usePathname();
  const { handleOpen } = useOpenCreatePostWithAuth();

  const hideSellButton = pathname.startsWith("/my");

  return (
    <div className="hidden w-full items-center justify-between md:flex">
      <div className="text-white">
        <Link href="/">
          <img src="/icons/logo.png" className="h-15 w-15" />
        </Link>
      </div>

      <div className="flex items-center">
        <SearchForm className="ms-7 me-7" />

        {isLogined ? (
          <ul className="flex text-sm font-normal text-white">
            {!hideSellButton && (
              <li className="flex items-center justify-center px-3">
                <button
                  type="button"
                  onClick={handleOpen}
                  className="flex cursor-pointer items-center justify-center"
                >
                  <img
                    src="/icons/sell.svg"
                    alt="판매하기"
                    className="h-4 w-4"
                  />
                  <p className="ml-1">판매하기</p>
                </button>
              </li>
            )}

            {navItems.map(({ href, label, icon, hasDivider }) => (
              <li
                key={href}
                className={`flex items-center justify-center px-3 first:pr-3 last:pl-3 ${
                  hasDivider
                    ? "relative before:absolute before:left-0 before:h-4 before:w-px before:bg-white after:absolute after:right-0 after:h-4 after:w-px after:bg-white"
                    : ""
                }`}
              >
                {href === "/chat" ? (
                  <button
                    type="button"
                    onClick={() => onOpenChat()}
                    className="flex cursor-pointer items-center justify-center"
                  >
                    <img src={icon} alt={label} className="h-4 w-4" />
                    <p className="ml-1">{label}</p>
                  </button>
                ) : (
                  <Link
                    href={href}
                    className="flex items-center justify-center"
                  >
                    <img src={icon} alt={label} className="h-4 w-4" />
                    <p className="ml-1">{label}</p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <ul className="flex gap-[60px] text-sm font-normal text-white">
            <li className="ml-[30px]">
              <Link href="/login">로그인</Link>
            </li>
            <li>
              <Link href="/signup">회원가입</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default HeaderDesktop;
