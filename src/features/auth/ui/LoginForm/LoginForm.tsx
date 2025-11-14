"use client";

import React, { useState } from "react";
import { Input } from "@/entities/user/ui/Input/Input";
import Button from "@/shared/ui/Button/Button";
import { useAuthStore } from "../../model/auth.store";
import { apiFetch } from "@/shared/api/fetcher";

type FormSize = "sm" | "md" | "lg";

interface LoginFormProps {
  size?: FormSize;
  onSuccess?: () => void;
  onError?: (msg: string) => void;
}

export const LoginForm = ({
  size = "lg",
  onSuccess,
  onError,
  ...props
}: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //에러 메시지 관리
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const { setAccessToken } = useAuthStore();

  //로그인 요청 제출 핸들러, 추후 API 호출 예정
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("로그인 요청 폼 제출");
    try {
      const res = await apiFetch<{
        accessToken: string;
      }>("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      setAccessToken(res.accessToken);
      onSuccess?.();
    } catch {
      onError?.("로그인에 실패하였습니다.\n이메일과 비밀번호를 확인해주세요.");
    }
  };

  // 이메일 유효성 검사 함수
  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //이메일 regex
    return regex.test(value);
  };

  //이메일 변경 처리 핸들러
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (value != null && value !== "" && !validateEmail(value)) {
      setEmailError("올바른 이메일 형식이 아닙니다.");
    } else {
      setEmailError(null);
    }
  };

  //비밀번호 변경 처리 핸들러
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    if (value != null && value !== "" && value.length < 8) {
      setPasswordError("비밀번호는 최소 8자 이상이어야 합니다.");
    } else {
      setPasswordError(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <Input
        label="이메일"
        placeholder="이메일을 입력해주세요"
        isError={!!emailError}
        errorMessage={emailError ?? ""}
        onChange={handleEmailChange}
      />

      <Input
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        message="최소 8자 이상"
        isHiddenable
        isError={!!passwordError}
        errorMessage={passwordError ?? ""}
        onChange={handlePasswordChange}
      />

      <Button
        variant="primary"
        type="submit"
        disabled={
          !email || emailError !== null || !password || passwordError !== null
        }
      >
        로그인
      </Button>
    </form>
  );
};
