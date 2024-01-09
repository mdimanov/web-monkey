"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationItem } from "../utils/constants"; // Import the type

type NavItemProps = {
  item: NavigationItem;
};

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.href}
      className={`text-sm font-semibold leading-6 p-2  hover:text-emerald-400 ${
        pathname === item.href ? "active text-emerald-400" : "text-white"
      }`}
      shallow
    >
      {item.name}
    </Link>
  );
};

export default NavItem;
