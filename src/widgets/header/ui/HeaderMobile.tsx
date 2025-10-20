import Link from "next/link";

import MenuIcon from "@/shared/images/menu.svg";
import SearchIcon from "@/shared/images/search.svg";

interface HeaderMobileProps {
  setShowSearch: (value: boolean) => void;
}

const HeaderMobile = ({ setShowSearch }: HeaderMobileProps) => {
  return (
    <div className="flex w-full items-center justify-between md:hidden">
      <button aria-label="menu" type="button" className="cursor-pointer">
        <MenuIcon className="h-[24px] w-[24px]" />
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
        <SearchIcon className="h-[24px] w-[24px]" />
      </button>
    </div>
  );
};

export default HeaderMobile;
