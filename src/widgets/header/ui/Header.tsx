"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import HeaderMobile from "./HeaderMobile";
import HeaderMobileSearch from "./HeaderMobileSearch";
import HeaderDesktop from "./HeaderDesktop";

import { useAuthStore } from "@/features/auth/model/auth.store";
import { useChatStore } from "@/features/chat/model/chat.store";

import MobileSideMenu from "./MobileSideMenu";

const navItems = [
  {
    href: "/chat",
    label: "채팅하기",
    icon: "/icons/chats.svg",
    hasDivider: false,
  },
  {
    href: "/ai",
    label: "분석하기",
    icon: "/icons/analyze.svg",
    hasDivider: true,
  },
  {
    href: "/my",
    label: "마이페이지",
    icon: "/icons/user.svg",
    hasDivider: false,
  },
];

type TabKey = "all" | "buyer" | "seller";
const TABS: { key: TabKey; label: string }[] = [
  { key: "all", label: "전체" },
  { key: "buyer", label: "구매" },
  { key: "seller", label: "판매" },
];

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const isLogined = useAuthStore((state) => state.isLogined);
  const openChat = useChatStore((state) => state.mount);

  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed top-0 left-0 z-50 h-[70px] w-full bg-[#1C1C22] px-[20px] md:h-[80px] md:px-[30px] xl:h-[100px]">
      <div className="flex h-full w-full items-center justify-between lg:mx-auto lg:max-w-[1200px]">
        {!showSearch ? (
          <HeaderMobile
            setShowSearch={setShowSearch}
            onOpenMenu={() => setMenuOpen(true)}
          />
        ) : (
          <HeaderMobileSearch setShowSearch={setShowSearch} />
        )}
        <HeaderDesktop
          isLogined={isLogined}
          navItems={navItems}
          onOpenChat={openChat}
        />
      </div>

      {mounted &&
        menuOpen &&
        createPortal(
          <MobileSideMenu
            onClose={() => setMenuOpen(false)}
            onOpenChat={openChat}
          />,
          document.body,
        )}
    </header>
  );
};

export default Header;
