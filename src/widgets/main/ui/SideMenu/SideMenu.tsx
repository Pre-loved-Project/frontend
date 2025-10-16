import cn from "@/shared/lib/cn";

interface SideMenuProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

const SideMenu = ({
  categories,
  selectedCategory,
  onSelect,
}: SideMenuProps) => {
  return (
    <div
      aria-labelledby="category-heading"
      role="listbox"
      className="flex flex-col gap-[4px] text-white md:fixed md:top-[80px] md:min-h-screen xl:top-[100px]"
    >
      <h2
        id="category-heading"
        className="h-[45px] w-[160px] items-center px-[20px] py-[15px] text-[14px] leading-none font-normal xl:text-[16px]"
      >
        카테고리
      </h2>
      <ul className="scrollbar-none flex flex-row gap-[4px] overflow-x-auto md:flex-col">
        {categories?.map((category) => (
          <li key={category}>
            <button
              type="button"
              role="option"
              aria-selected={selectedCategory === category}
              className={cn(
                "flex h-[45px] w-[160px] items-center rounded-[8px] px-[20px] py-[15px]",
                "text-[14px] leading-none font-medium transition-colors",
                "hover:cursor-pointer focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none",
                "xl:h-[50px] xl:w-[200px] xl:text-[16px]",
                selectedCategory === category
                  ? "border border-[#353542] bg-[#353542] text-white"
                  : "text-[#6E6E82] hover:border hover:border-[#353542] hover:bg-[#252530] hover:text-white",
              )}
              onClick={() => onSelect(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SideMenu;
