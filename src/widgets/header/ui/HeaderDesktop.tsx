import Link from "next/link";
import SearchForm from "./SearchForm";

interface HeaderDesktopProps {
  isLogined: boolean;
  navItems: {
    href: string;
    label: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    hasDivider: boolean;
  }[];
}

const HeaderDesktop = ({ isLogined, navItems }: HeaderDesktopProps) => {
  return (
    <div className="hidden w-full items-center justify-between md:flex">
      <div className="text-white">
        <Link href="/">찰딱</Link>
      </div>

      <div className="flex items-center">
        <SearchForm className="ms-7 me-7" />

        {isLogined ? (
          <ul className="flex text-sm font-normal text-white">
            {navItems.map(({ href, label, icon: Icon, hasDivider }) => (
              <li
                key={href}
                className={`flex items-center justify-center px-3 first:pr-3 last:pl-3 ${
                  hasDivider
                    ? "relative before:absolute before:left-0 before:h-4 before:w-[1px] before:bg-white after:absolute after:right-0 after:h-4 after:w-[1px] after:bg-white"
                    : ""
                } `}
              >
                <Link href={href} className="flex items-center justify-center">
                  <Icon className="h-[16px] w-[16px] text-white" />
                  <p className="ml-1">{label}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="flex gap-[60px] text-sm font-normal text-white">
            <li className="ml-[30px]">
              <Link href="/login">로그인</Link>
            </li>
            <li>
              <Link href="/signup">회원가입</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default HeaderDesktop;
