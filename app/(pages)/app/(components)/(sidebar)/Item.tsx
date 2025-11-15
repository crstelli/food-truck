"use client";

import { useSidebarContext } from "./useSidebarContext";
import { SidebarMenu } from "@/app/(lib)/(types)/SidebarMenu";

import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  opens: SidebarMenu;

  children: string;
}
function Item({ icon: Icon, children, opens }: Props) {
  const { menu, setMenu } = useSidebarContext();
  const active = menu === opens;

  return (
    <li
      onClick={() => setMenu(opens)}
      className={`flex items-center text-gray-500 hover:text-secondary-foreground duration-150 cursor-pointer gap-2 ${
        active && "text-secondary-foreground font-bold"
      }`}
    >
      <Icon
        strokeWidth="1.5"
        className={`size-7 ${active && "text-primary"}`}
      />
      {menu && <span className="hidden md:block">{children}</span>}
    </li>
  );
}

export { Item };
