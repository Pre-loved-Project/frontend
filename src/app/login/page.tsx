"use client";

import React, { useEffect, useState } from "react";
import { LoginForm } from "@/features/auth/ui/LoginForm/LoginForm";
import { Modal } from "@/shared/ui/Modal/Modal";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "@/features/auth/model/auth.store";

export default function LoginPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { setIsLogined } = useAuthStore();

  useEffect(() => {
    queryClient.clear();
  }, []);

  return (
    <div className="flex min-h-[calc(100vh-70px)] flex-col items-center justify-center px-4 md:min-h-[calc(100vh-80px)] xl:min-h-[calc(100vh-100px)]">
      <h1 className="mb-8 text-2xl font-bold text-white">로그인</h1>
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
