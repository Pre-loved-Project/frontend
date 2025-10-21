import cn from "@/shared/lib/cn";

import SearchIcon from "@/shared/images/search.svg";

const SearchForm = ({
  className,
  placeholder = "검색어를 입력하세요",
  autoFocus,
  showIcon = true,
  name = "q",
}: {
  className?: string;
  placeholder?: string;
  autoFocus?: boolean;
  showIcon?: boolean;
  name?: string;
}) => {
  return (
    <form
      method="get"
      className={cn(
        "flex h-12 w-[291px] items-center gap-3 rounded-lg bg-[#252530] px-4 py-3",
        className,
      )}
    >
      {showIcon && (
        <SearchIcon aria-hidden="true" className="h-6 w-6 shrink-0" />
      )}
      <input
        name={name}
        type="search"
        placeholder={placeholder}
        aria-label="search-box"
        autoComplete="off"
        autoFocus={autoFocus}
        className="w-full text-white placeholder-gray-600 outline-none"
      />
    </form>
  );
};

export default SearchForm;
