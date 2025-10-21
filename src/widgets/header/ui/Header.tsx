"use client";

import { useState } from "react";

import HeaderMobile from "./HeaderMobile";
import HeaderMobileSearch from "./HeaderMobileSearch";
import HeaderDesktop from "./HeaderDesktop";

import ChatIcon from "@/shared/images/chats.svg";
import AnalyzeIcon from "@/shared/images/analyze.svg";
import UserIcon from "@/shared/images/user.svg";

import { useAuthStore } from "@/features/auth/model/auth.store";

const navItems = [
  {
    href: "/chat",
    label: "채팅하기",
    icon: ChatIcon,
    hasDivider: false,
  },
  {
    href: "/ai",
    label: "분석하기",
    icon: AnalyzeIcon,
    hasDivider: true,
  },
  {
    href: "/my",
    label: "마이페이지",
    icon: UserIcon,
    hasDivider: false,
  },
];

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const isLogined = useAuthStore((state) => state.isLogined);

  return (
    <header className="fixed top-0 left-0 h-[70px] w-full bg-[#1C1C22] px-[20px] md:h-[80px] md:px-[30px] xl:h-[100px]">
      <div className="flex h-full w-full items-center justify-between lg:mx-auto lg:max-w-[1200px]">
        {!showSearch ? (
          <HeaderMobile setShowSearch={setShowSearch} />
        ) : (
          <HeaderMobileSearch setShowSearch={setShowSearch} />
        )}

        <HeaderDesktop isLogined={isLogined} navItems={navItems} />
      </div>
    </header>
  );
};

export default Header;
