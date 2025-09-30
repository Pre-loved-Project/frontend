import cn from "@/shared/lib/cn";

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
        "flex items-center gap-3 w-[291px] h-12 px-4 py-3 rounded-lg bg-[#252530]",
        className,
      )}
    >
      {showIcon && (
        <img
          src="/icons/search.svg"
          alt="검색 아이콘"
          aria-hidden="true"
          className="w-6 h-6 shrink-0"
        />
      )}
      <input
        name={name}
        type="search"
        placeholder={placeholder}
        aria-label="search-box"
        autoComplete="off"
        autoFocus={autoFocus}
        className="text-white placeholder-gray-600 outline-none"
      />
    </form>
  );
};

export default SearchForm;
