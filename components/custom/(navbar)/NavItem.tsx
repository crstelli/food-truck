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
        className={`text-xl uppercase font-light ${
          active && "border-b border-primary text-primary"
        }`}
      >
        {children}
      </li>
    </Link>
  );
}

export { NavItem };
