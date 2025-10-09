"use client";

import React, { useState } from "react";
import { LoginForm } from "@/features/auth/ui/LoginForm/LoginForm";
import { Modal } from "@/shared/ui/Modal/Modal";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/features/auth/model/auth.store";

export default function SignUpPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { setIsLogined } = useAuthStore();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-2xl font-bold text-black-900 mb-8">로그인</h1>
      <LoginForm
        size="lg"
        onSuccess={() => {
          setIsLogined(true);
          router.push("/"); //메인 페이지 이동
        }}
        onError={(msg) => {
          setErrorMessage(msg);
        }}
      />

      {!!errorMessage && (
        <Modal
          message={errorMessage}
          buttonText="확인"
          onClick={() => setErrorMessage(null)}
          className=""
        />
      )}
    </div>
  );
}
