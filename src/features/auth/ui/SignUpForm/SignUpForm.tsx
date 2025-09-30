"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/entities/user/ui/Input/Input";
import { DropDown } from "@/shared/ui/DropDown/DropDown";
import Button from "@/shared/ui/Button/Button";

type FormSize = "sm" | "md" | "lg";

interface SignUpFormProps {
  size?: FormSize;
  onSuccess?: () => void;
  onError?: (msg: string) => void;
}

export const SignUpForm = ({
  size = "lg",
  onSuccess,
  onError,
}: SignUpFormProps) => {
  //input text 상태
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 생년월일 상태
  const [year, setYear] = useState<number | "">("");
  const [month, setMonth] = useState<number | "">("");
  const [day, setDay] = useState<number | "">("");

  // input error 상태
  const [emailError, setEmailError] = useState<string | null>(null);
  const [nicknameError, setNicknameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | null
  >(null);

  //이메일 유효성 검사
  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  //input value change 핸들러
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (value && !validateEmail(value)) {
      setEmailError("올바른 이메일 형식이 아닙니다.");
    } else {
      setEmailError(null);
    }
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickname(value);

    if (value.length > 10) {
      setNicknameError("닉네임은 최대 10자 이하이어야 합니다.");
    } else {
      setNicknameError(null);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    if (value && value.length < 8) {
      setPasswordError("비밀번호는 최소 8자 이상이어야 합니다.");
    } else {
      setPasswordError(null);
    }
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (password && value && password !== value) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmPasswordError(null);
    }
  };

  // password, confirmPassword 동기화 체크
  useEffect(() => {
    if (password && confirmPassword && password !== confirmPassword) {
      setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmPasswordError(null);
    }
  }, [password, confirmPassword]);

  //연, 월, 일 드롭다운 옵션 생성
  const yearOptions = Array.from({ length: 2025 - 1900 + 1 }, (_, i) => {
    const y = 1900 + i;
    return { label: `${y}년`, value: y };
  });

  const monthOptions = () => {
    if (!year) return [];
    return Array.from({ length: 12 }, (_, i) => {
      const m = i + 1;
      return { label: `${m}월`, value: m };
    });
  };

  const dayOptions = () => {
    if (!year || !month) return [];
    const daysInMonth = new Date(year, month, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => {
      const d = i + 1;
      return { label: `${d}일`, value: d };
    });
  };

  // 회원가입 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API 호출 로직 추가
    console.log("회원가입 요청 폼 제출");
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <Input
        size={size}
        label="이메일"
        placeholder="이메일을 입력해 주세요"
        isError={!!emailError}
        errorMessage={emailError ?? ""}
        onChange={handleEmailChange}
      />

      <Input
        size={size}
        label="닉네임"
        placeholder="닉네임을 입력해 주세요"
        message="최대 10자 가능"
        isError={!!nicknameError}
        errorMessage={nicknameError ?? ""}
        onChange={handleNicknameChange}
      />

      <Input
        size={size}
        label="비밀번호"
        placeholder="비밀번호를 입력해 주세요"
        message="최소 8자 이상"
        isHiddenable
        isError={!!passwordError}
        errorMessage={passwordError ?? ""}
        onChange={handlePasswordChange}
      />

      <Input
        size={size}
        label="비밀번호 확인"
        placeholder="비밀번호를 한번 더 입력해 주세요"
        isHiddenable
        isError={!!confirmPasswordError}
        errorMessage={confirmPasswordError ?? ""}
        onChange={handleConfirmPasswordChange}
      />

      {/* 생년월일 DropDown */}
      <div className="flex flex-col gap-2">
        <label className="font-medium text-black-900 text-[16px]">
          생년월일
        </label>
        <div className="flex gap-4">
          <DropDown
            size={size}
            widthSize="short"
            options={yearOptions}
            value={year}
            onChange={(val) => {
              setYear(val as number);
              setMonth("");
              setDay("");
            }}
            placeholder="연도"
          />
          <DropDown
            size={size}
            widthSize="short"
            options={monthOptions()}
            value={month}
            onChange={(val) => {
              setMonth(val as number);
              setDay("");
            }}
            placeholder="월"
          />
          <DropDown
            size={size}
            widthSize="short"
            options={dayOptions()}
            value={day}
            onChange={(val) => setDay(val as number)}
            placeholder="일"
          />
        </div>
      </div>

      <Button
        variant="primary"
        size={size}
        type="submit"
        className="mt-6"
        disabled={
          !email ||
          emailError !== null ||
          !nickname ||
          nicknameError !== null ||
          !password ||
          passwordError !== null ||
          !confirmPassword ||
          confirmPasswordError !== null ||
          !year ||
          !month ||
          !day
        }
      >
        가입하기
      </Button>
    </form>
  );
};
