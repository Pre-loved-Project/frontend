import SearchForm from "./SearchForm";

interface HeaderMobileSearchProps {
  setShowSearch: (value: boolean) => void;
}

const HeaderMobileSearch = ({ setShowSearch }: HeaderMobileSearchProps) => {
  return (
    <div className="flex w-full items-center md:hidden">
      <SearchForm className="w-full" />
      <button
        aria-label="검색 닫기"
        type="button"
        className="cursor-pointer p-3"
        onClick={() => setShowSearch(false)}
      >
        <img
          src="/icons/delete.svg"
          alt="검색 닫기"
          className="h-[16px] w-[16px]"
        />
      </button>
    </div>
  );
};

export default HeaderMobileSearch;
