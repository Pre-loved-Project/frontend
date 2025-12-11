"use client";

import { SignUpForm } from "@/features/auth/ui/SignUpForm/SignUpForm";
import Link from "next/link";
import { useModalStore } from "@/shared/model/modal.store";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const { openModal, closeModal } = useModalStore();
  const router = useRouter();

  return (
    <div className="mt-10 mb-20 flex flex-col items-center justify-center px-4">
      <h1 className="mb-8 text-2xl font-bold text-white">회원가입</h1>

      <SignUpForm
        onSuccess={() => {
          openModal("normal", {
            message: "회원가입이 완료되었습니다.",
            buttonText: "로그인 하러 가기",
            onClick: () => {
              closeModal();
              router.push("/login");
            },
          });
        }}
        onError={(msg) => {
          openModal("normal", {
            message: msg,
            buttonText: "확인",
            onClick: closeModal,
          });
        }}
      />

      <Link href="/login" className="mt-6 text-sm text-white/60">
        이미 계정이 있으신가요? <span className="underline">로그인</span>
      </Link>
    </div>
  );
}
