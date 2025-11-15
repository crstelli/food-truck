"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: string;
}

function NavItem({ children }: Props) {
  const ref = `/${children.toLowerCase().trim()}`;

  const pathname = usePathname();
  const active = ref === pathname;

  return (
    <Link href={ref}>
      <li
        className={`text-xl uppercase text-gray-800 font-light ${
          active && "border-b border-orange-500 text-orange-500"
        }`}
      >
        {children}
      </li>
    </Link>
  );
}

export { NavItem };
