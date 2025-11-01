"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import HeaderMobile from "./HeaderMobile";
import HeaderMobileSearch from "./HeaderMobileSearch";
import HeaderDesktop from "./HeaderDesktop";

import ChatIcon from "@/shared/images/chats.svg";
import AnalyzeIcon from "@/shared/images/analyze.svg";
import UserIcon from "@/shared/images/user.svg";
import DeleteIcon from "@/shared/images/delete.svg";

import { useAuthStore } from "@/features/auth/model/auth.store";
import MobileSideMenu from "./MobileSideMenu";
import ChatList from "@/features/chatList/ui/ChatList";
import { ChattingRoom } from "@/entities/chat/ui/ChattingRoom/ChattingRoom";
import cn from "@/shared/lib/cn";

const navItems = [
  { href: "/chat", label: "채팅하기", icon: ChatIcon, hasDivider: false },
  { href: "/ai", label: "분석하기", icon: AnalyzeIcon, hasDivider: true },
  { href: "/my", label: "마이페이지", icon: UserIcon, hasDivider: false },
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

  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatVisible, setChatVisible] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);

  const [tab, setTab] = useState<TabKey>("all");

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const openChat = () => {
    setChatOpen(true);
    requestAnimationFrame(() => setChatVisible(true));
  };

  const closeChat = () => {
    setChatVisible(false);
    setChatOpen(false);
  };

  const handleAsideTransitionEnd = (e: React.TransitionEvent<HTMLElement>) => {
    if (e.currentTarget !== e.target) return;
    if (e.propertyName !== "transform") return;

    if (!chatVisible) {
      setChatOpen(false);
      setSelectedChatId(null);
    }
  };

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

      {mounted &&
        chatOpen &&
        createPortal(
          <div>
            <div
              className={`fixed inset-0 z-[900] bg-black/40 transition-opacity duration-300 md:block ${
                chatVisible ? "opacity-100" : "opacity-0"
              }`}
              onClick={closeChat}
            />

            <aside
              role="dialog"
              aria-modal="true"
              className={`fixed inset-0 z-[901] h-[100dvh] w-screen transform bg-[#1F1F28] shadow-2xl transition-transform duration-300 ease-out md:inset-auto md:top-0 md:right-0 md:h-[100dvh] md:w-full md:max-w-[520px] ${
                chatVisible ? "md:translate-x-0" : "md:translate-x-full"
              } `}
              onTransitionEnd={handleAsideTransitionEnd}
            >
              <header className="flex h-[60px] items-center justify-between border-b border-white/10 px-4 py-3">
                {selectedChatId && (
                  <button
                    type="button"
                    onClick={() => setSelectedChatId(null)}
                    className="cursor-pointer rounded px-2 py-1 text-white/80"
                    aria-label="목록으로"
                  >
                    ←
                  </button>
                )}
                <h2 className="text-md font-semibold text-white">
                  {selectedChatId ? `채팅방` : "채팅"}
                </h2>
                <DeleteIcon
                  onClick={closeChat}
                  className="h-4 w-4 cursor-pointer text-white/80"
                />
              </header>

              <div className="flex h-[calc(100dvh-60px)] flex-col">
                {!selectedChatId && (
                  <div className="relative border-b border-white/10 px-2">
                    <div className="relative flex gap-1">
                      {TABS.map(({ key, label }) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setTab(key)}
                          className={cn(
                            "w-full px-3 py-2 text-sm",
                            tab === key
                              ? "text-white"
                              : "text-white/60 hover:text-white/80",
                          )}
                        >
                          {label}
                        </button>
                      ))}
                      <span
                        className="absolute -bottom-[1px] left-0 h-[2px] bg-white transition-transform duration-200"
                        style={{
                          width: `${100 / TABS.length}%`,
                          transform: `translateX(${
                            TABS.findIndex((t) => t.key === tab) * 100
                          }%)`,
                        }}
                      />
                    </div>
                  </div>
                )}

                <div className="min-h-0 flex-1 overflow-y-auto px-2">
                  {selectedChatId ? (
                    <ChattingRoom />
                  ) : (
                    <ChatList onSelect={(id) => setSelectedChatId(id)} />
                  )}
                </div>
              </div>
            </aside>
          </div>,
          document.body,
        )}
    </header>
  );
};

export default Header;
