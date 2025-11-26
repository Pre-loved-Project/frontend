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
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const { setAccessToken } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await apiFetch<{ accessToken: string }>("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        noAuth: true,
        useBaseUrl: false,
      });

      setAccessToken(data.accessToken);
      onSuccess?.();
    } catch (error) {
      onError?.("로그인에 실패하였습니다.\n이메일과 비밀번호를 확인해주세요.");
    }
  };

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value != null && value !== "" && !validateEmail(value)) {
      setEmailError("올바른 이메일 형식이 아닙니다.");
    } else {
      setEmailError(null);
    }
  };

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
