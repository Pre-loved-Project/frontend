"use client";

import React, { useState } from "react";
import { LoginForm } from "@/features/auth/ui/LoginForm/LoginForm";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/features/auth/model/auth.store";

export default function SignUpPage() {
  const router = useRouter();
  const { setIsLogined } = useAuthStore();
  return (
    <div className="flex min-h-[calc(100vh-70px)] flex-col items-center justify-center px-4 md:min-h-[calc(100vh-80px)] xl:min-h-[calc(100vh-100px)]">
      <h1 className="mb-8 text-2xl font-bold text-white">로그인</h1>
      <LoginForm
        size="lg"
        onSuccess={() => {
          setIsLogined(true);
          router.push("/"); //메인 페이지 이동
        }}
      />
    </div>
  );
}
