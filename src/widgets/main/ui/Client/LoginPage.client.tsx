"use client";

import { useEffect } from "react";
import { LoginForm } from "@/features/auth/ui/LoginForm/LoginForm";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthStore } from "@/features/auth/model/auth.store";
import { useChatStore } from "@/features/chat/model/chat.store";
import { useModalStore } from "@/shared/model/modal.store";
import Link from "next/link";

export default function LoginPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const expired = searchParams.get("expired");

  const { openModal, closeModal } = useModalStore();
  const { setIsLogined, logout } = useAuthStore();
  const { unmount } = useChatStore();

  useEffect(() => {
    if (expired === "true") {
      unmount();
      logout();

      openModal("normal", {
        message: "세션이 만료되었습니다.\n다시 로그인해주세요.",
        buttonText: "확인",
        onClick: () => closeModal(),
      });
    }
  }, [expired]);

  return (
    <div className="flex min-h-[calc(100vh-70px)] flex-col items-center justify-center px-4 md:min-h-[calc(100vh-80px)] xl:min-h-[calc(100vh-100px)]">
      <h1 className="mb-8 text-2xl font-bold text-white">로그인</h1>

      <LoginForm
        onSuccess={() => {
          setIsLogined(true);
          router.push("/");
        }}
        onError={(msg) => {
          openModal("normal", {
            message: msg,
            buttonText: "확인",
            onClick: () => closeModal(),
          });
        }}
      />

      <Link href="/signup" className="mt-6 text-sm text-white/60">
        아직 회원이 아니신가요? <span className="underline">회원가입</span>
      </Link>
    </div>
  );
}
