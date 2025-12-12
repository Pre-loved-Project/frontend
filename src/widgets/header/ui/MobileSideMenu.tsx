"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useModalStore } from "@/shared/model/modal.store";
import { useAuthStore } from "@/features/auth/model/auth.store";
import { useOpenCreatePostWithAuth } from "@/features/createPost/lib/useOpenCreatePost";
import cn from "@/shared/lib/cn";

export default function MobileSideMenu({
  onClose,
  onOpenChat,
}: {
  onClose: () => void;
  onOpenChat: (info?: {
    postingId: number;
    otherId: number;
    chatId?: number;
  }) => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { isLogined, logout } = useAuthStore();
  const { openModal, closeModal } = useModalStore();
  const { handleOpen } = useOpenCreatePostWithAuth();
  const [isVisible, setIsVisible] = useState(false);

  const hideSellButton = pathname.startsWith("/my");

  useEffect(() => {
    const timer = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLElement>) => {
    if (e.propertyName !== "opacity") return;
    if (!isVisible) onClose();
  };

  const handleOpenChat = () => {
    onOpenChat();
    handleClose();
  };

  const handleLogout = async () => {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    if (res.ok) {
      handleClose();
      router.push("/login");
      router.refresh();
      logout();
      openModal("normal", {
        message: "로그아웃이 완료되었습니다.",
        onClick: () => {
          closeModal();
        },
      });
    } else {
      openModal("normal", {
        message: "로그아웃에 실패했습니다.",
        onClick: () => {
          closeModal();
        },
      });
    }
  };

  return (
    <div>
      <div
        className={cn(
          "fixed inset-0 z-900 bg-black/40 transition-opacity md:hidden",
          isVisible ? "opacity-100" : "opacity-0",
        )}
        onTransitionEnd={handleTransitionEnd}
        onClick={handleClose}
      />

      <aside
        role="dialog"
        aria-modal="true"
        className={cn(
          "fixed top-0 left-0 z-901 h-dvh w-[78%] max-w-[320px] transform bg-[#1C1C22] shadow-2xl transition-transform ease-out md:hidden",
          isVisible ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <header className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <h2 className="text-base font-semibold text-white">메뉴</h2>
          <img
            src="/icons/delete.svg"
            alt="닫기"
            onClick={handleClose}
            className="cursor-pointe h-6 w-6"
          />
        </header>

        <nav className="p-2">
          <ul className="flex flex-col">
            {isLogined ? (
              <>
                <li>
                  <button
                    type="button"
                    onClick={handleOpenChat}
                    className="w-full px-4 py-3 text-left text-white hover:bg-white/10"
                  >
                    채팅하기
                  </button>
                </li>

                {!hideSellButton && (
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        handleOpen();
                        handleClose();
                      }}
                      className="w-full px-4 py-3 text-left text-white hover:bg-white/10"
                    >
                      판매하기
                    </button>
                  </li>
                )}

                <li>
                  <Link
                    href="/my"
                    className="block px-4 py-3 text-white hover:bg-white/10"
                    onClick={handleClose}
                  >
                    마이페이지
                  </Link>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => {
                      openModal("confirm", {
                        message: "정말 로그아웃하시겠습니까?",
                        onConfirm: async () => {
                          await handleLogout();
                        },
                        onCancel: () => {
                          closeModal();
                        },
                      });
                    }}
                    className="w-full px-4 py-3 text-left text-red-400 hover:bg-white/10"
                  >
                    로그아웃
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/login"
                    onClick={handleClose}
                    className="block px-4 py-3 text-white hover:bg-white/10"
                  >
                    로그인
                  </Link>
                </li>

                <li>
                  <Link
                    href="/signup"
                    onClick={handleClose}
                    className="block px-4 py-3 text-white hover:bg-white/10"
                  >
                    회원가입
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
