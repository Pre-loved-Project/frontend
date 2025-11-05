"use client";

import Link from "next/link";

interface HeaderMobileProps {
  setShowSearch: (value: boolean) => void;
  onOpenMenu: () => void;
}

const HeaderMobile = ({ setShowSearch, onOpenMenu }: HeaderMobileProps) => {
  return (
    <div className="flex w-full items-center justify-between md:hidden">
      <button
        aria-label="menu"
        type="button"
        className="cursor-pointer"
        onClick={onOpenMenu}
      >
        <img src="/icons/menu.svg" alt="menu" className="h-[24px] w-[24px]" />
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
