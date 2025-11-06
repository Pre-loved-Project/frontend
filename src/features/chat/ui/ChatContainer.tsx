"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useChatStore } from "@/features/chat/model/chat.store";
import ChatList from "@/features/chat/ui/ChatList";
import { ChattingRoom } from "@/entities/chat/ui/ChattingRoom/ChattingRoom";
import cn from "@/shared/lib/cn";

type TabKey = "all" | "buyer" | "seller";
const TABS: { key: TabKey; label: string }[] = [
  { key: "all", label: "전체" },
  { key: "buyer", label: "구매" },
  { key: "seller", label: "판매" },
];

export default function ChatContainer() {
  const { isOpen, isVisible, activeId, hide, unmount, setActiveId } =
    useChatStore();

  const [tab, setTab] = useState<TabKey>("all");
  const [mounted, setMounted] = useState(false);

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLElement>) => {
    if (e.propertyName !== "opacity") return;
    if (!isVisible) unmount();
  };

  useEffect(() => setMounted(true), []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div>
      <div
        className={`fixed inset-0 z-[900] bg-black/40 transition-opacity ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={hide}
        onTransitionEnd={handleTransitionEnd}
      />

      <aside
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 z-[901] h-[100dvh] w-full max-w-[520px] transform bg-[#1F1F28] shadow-2xl transition-transform ease-out ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex h-[60px] items-center justify-between border-b border-white/10 px-4 py-3">
          {activeId && (
            <button
              onClick={() => setActiveId()}
              className="cursor-pointer rounded px-2 py-1 text-white/80"
            >
              ←
            </button>
          )}
          <h2 className="text-md font-semibold text-white">
            {activeId ? "채팅방" : "채팅"}
          </h2>
          <button onClick={hide}>
            <img src="/icons/delete.svg" alt="" className="h-4 w-4" />
          </button>
        </header>

        <div className="flex h-[calc(100dvh-60px)] flex-col">
          {!activeId && (
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
            {activeId ? (
              <ChattingRoom />
            ) : (
              <ChatList tab={tab} onSelect={(id) => setActiveId(id)} />
            )}
          </div>
        </div>
      </aside>
    </div>,
    document.body,
  );
}
