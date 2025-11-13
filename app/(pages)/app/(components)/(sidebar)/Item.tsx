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

  return (
    <li
      onClick={() => setMenu(opens)}
      className="flex items-center text-gray-800 gap-2 font-bold"
    >
      <Icon className="size-8 stroke-2" />
      {menu && <span className="text-lg">{children}</span>}
    </li>
  );
}

export { Item };
