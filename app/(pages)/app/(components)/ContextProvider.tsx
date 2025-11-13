"use client";

import { useState } from "react";
import { SidebarContext } from "./(sidebar)/useSidebarContext";

import type { SidebarMenu } from "@/app/(lib)/(types)/SidebarMenu";
import type { LatLngTuple } from "leaflet";
import type { Place } from "@/app/(lib)/(types)/Place";

interface Props {
  children: React.ReactNode;
  places: Place[];
}

function ContextProvider({ children, places }: Props) {
  const [menu, setMenu] = useState<SidebarMenu>("");
  const [position, setPosition] = useState<LatLngTuple | []>([]);

  const closeMenu = () => setMenu("");

  return (
    <SidebarContext.Provider
      value={{ menu, setMenu, closeMenu, position, setPosition, places }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export { ContextProvider };
