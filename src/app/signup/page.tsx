"use client";

import React, { useState } from "react";
import { SignUpForm } from "@/features/auth/ui/SignUpForm/SignUpForm";
import { Modal } from "@/shared/ui/Modal/Modal";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleSuccess = () => {
    setShowModal(true); // 회원가입 성공 시 모달 띄우기
  };

  const handleCloseModal = () => {
    setShowModal(false);
    router.push("/login"); // 모달 닫고 로그인 페이지로 이동
  };

  return (
    <div className="mt-20 flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-2xl font-bold text-black-900 mb-8">회원가입</h1>
      <SignUpForm onSuccess={handleSuccess} />

      {showModal && (
        <Modal
          message="회원가입이 완료되었습니다."
          buttonText="로그인 하러 가기"
          onClick={handleCloseModal}
          className=""
        />
      )}
    </div>
  );
}
