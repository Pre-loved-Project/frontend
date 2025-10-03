"use client";

import { useState } from "react";
import Link from "next/link";

import SearchForm from "./SearchForm";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <header className="bg-[#1C1C22] h-[70px] px-[20px] md:h-[80px] md:px-[30px] xl:h-[100px]">
      <div className="flex h-full w-full items-center justify-between lg:mx-auto lg:max-w-[1200px]">
        {!showSearch ? (
          <div className="flex w-full items-center justify-between md:hidden">
            <button aria-label="menu" type="button" className="cursor-pointer">
              <img src="icons/menu.svg" alt="메뉴" />
            </button>
            <div className="flex-1 text-center text-white">
              <Link href="/">찰딱</Link>
            </div>
            <button
              aria-label="search-button"
              type="button"
              className="cursor-pointer"
              onClick={() => setShowSearch(true)}
            >
              <img src="icons/search.svg" alt="검색" />
            </button>
          </div>
        ) : (
          <div className="flex w-full items-center md:hidden">
            <SearchForm className="w-full" />
            <button
              aria-label="검색 닫기"
              type="button"
              className="cursor-pointer p-3"
              onClick={() => setShowSearch(false)}
            >
              <img src="icons/delete.svg" alt="닫기" />
            </button>
          </div>
        )}

        <div className="hidden w-full items-center justify-between md:flex">
          <div className="text-white">
            <Link href="/">찰딱</Link>
          </div>
          <div className="flex items-center gap-[60px]">
            <SearchForm />
            <Link href="/" className="text-sm font-normal text-white">
              로그인
            </Link>
            <Link href="/" className="text-sm font-normal text-white">
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
