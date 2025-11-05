"use client";

import Link from "next/link";

import DeleteIcon from "@/shared/images/delete.svg";

export default function MobileSideMenu({
  onClose,
  onOpenChat,
}: {
  onClose: () => void;
  onOpenChat: () => void;
}) {
  const handleOpenChat = () => {
    onOpenChat();
    onClose();
  };

  return (
    <div>
      <div
        className="fixed inset-0 z-[900] bg-black/40 md:hidden"
        onClick={onClose}
      />
      <aside
        role="dialog"
        aria-modal="true"
        className="fixed top-0 left-0 z-[901] h-dvh w-[78%] max-w-[320px] bg-[#1C1C22] shadow-2xl md:hidden"
      >
        <header className="flex items-center justify-between px-4 py-3">
          <h2 className="text-base font-semibold text-white">메뉴</h2>
          <DeleteIcon
            onClick={onClose}
            className="h-6 w-6 text-white/80 hover:bg-white/10"
          />
        </header>

        <nav className="p-2">
          <ul className="flex flex-col">
            <li>
              <button
                type="button"
                onClick={handleOpenChat}
                className="w-full px-4 py-3 text-left text-white hover:bg-white/10"
              >
                채팅하기
              </button>
            </li>

            <li>
              <Link
                href="/ai"
                className="block px-4 py-3 text-white hover:bg-white/10"
                onClick={onClose}
              >
                분석하기
              </Link>
            </li>

            <li>
              <Link
                href="/my"
                className="block px-4 py-3 text-white hover:bg-white/10"
                onClick={onClose}
              >
                마이페이지
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
