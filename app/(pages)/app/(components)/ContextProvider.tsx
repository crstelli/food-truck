"use client";

import { useState } from "react";
import { SidebarContext } from "./(sidebar)/useSidebarContext";

import type { SidebarMenu } from "@/app/(lib)/(types)/SidebarMenu";
import type { LatLngTuple } from "leaflet";

interface Props {
  children: React.ReactNode;
}

function ContextProvider({ children }: Props) {
  const [menu, setMenu] = useState<SidebarMenu>("");
  const [position, setPosition] = useState<LatLngTuple | []>([]);

  const closeMenu = () => setMenu("");

  return (
    <SidebarContext.Provider
      value={{ menu, setMenu, closeMenu, position, setPosition }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export { ContextProvider };
