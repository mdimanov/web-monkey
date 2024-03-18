import Logo from "./Logo";
import Link from "next/link";
import NavItem from "./NavItem";
import { NAVIGATION } from "../utils/constants";

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container mx-auto px-4">
        <nav
          className="flex items-center justify-between py-6"
          aria-label="Global"
        >
          <Logo />
          <div className="hidden lg:flex lg:gap-x-12">
            {NAVIGATION.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="btn-outline text-sm font-semibold leading-6 text-white hover:bg-emerald-400 hover:text-white"
            >
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                Say Hello
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
