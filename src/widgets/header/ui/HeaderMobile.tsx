"use client";

import Link from "next/link";

interface HeaderMobileProps {
  setShowSearch: (value: boolean) => void;
  onOpenMenu: () => void;
}

const HeaderMobile = ({ setShowSearch, onOpenMenu }: HeaderMobileProps) => {
  return (
    <div className="relative flex w-full items-center justify-between md:hidden">
      <button
        aria-label="menu"
        type="button"
        className="z-10 cursor-pointer"
        onClick={onOpenMenu}
      >
        <img src="/icons/menu.svg" alt="menu" className="h-[24px] w-[24px]" />
      </button>

      <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-white">
        <img src="/icons/logo.png" className="h-10 w-10" />
      </Link>

      <button
        aria-label="search-button"
        type="button"
        className="z-10 cursor-pointer"
        onClick={() => setShowSearch(true)}
      >
        <img
          src="/icons/search.svg"
          alt="search"
          className="h-[24px] w-[24px]"
        />
      </button>
    </div>
  );
};

export default HeaderMobile;
