import SearchForm from "./SearchForm";

import DeleteIcon from "@/shared/images/delete.svg";

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
        <DeleteIcon className="h-[16px] w-[16px] text-gray-600" />
      </button>
    </div>
  );
};

export default HeaderMobileSearch;
