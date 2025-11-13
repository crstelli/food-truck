"use client";

import { SidebarMenu } from "@/app/(lib)/(types)/SidebarMenu";
import { useState } from "react";
import { SidebarContext } from "./(sidebar)/useSidebarContext";

interface Props {
  children: React.ReactNode;
}

function ContextProvider({ children }: Props) {
  const [menu, setMenu] = useState<SidebarMenu>("");
  const closeMenu = () => setMenu("");

  return (
    <SidebarContext.Provider value={{ menu, setMenu, closeMenu }}>
      {children}
    </SidebarContext.Provider>
  );
}

export { ContextProvider };
