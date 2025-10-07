import Link from "next/link";

interface HeaderMobileProps {
  setShowSearch: (value: boolean) => void;
}

const HeaderMobile = ({ setShowSearch }: HeaderMobileProps) => {
  return (
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
  );
};

export default HeaderMobile;
