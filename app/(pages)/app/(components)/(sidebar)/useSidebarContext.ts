import type { SidebarContext as SidebarContextType } from "@/app/(lib)/(types)/SidebarContext";
import { createContext, useContext } from "react";

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

function useSidebarContext() {
  const context = useContext(SidebarContext);
  if (!context)
    throw new Error("SidebarContext is not accessible outside his provider.");

  return context;
}

export { SidebarContext, useSidebarContext };
