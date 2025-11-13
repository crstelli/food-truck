import { Dispatch, SetStateAction } from "react";

import { LatLngTuple } from "leaflet";
import { SidebarMenu } from "./SidebarMenu";

export interface SidebarContext {
  menu: SidebarMenu;
  setMenu: Dispatch<SetStateAction<SidebarMenu>>;
  closeMenu: () => void;

  position: LatLngTuple | [];
  setPosition: Dispatch<SetStateAction<LatLngTuple | []>>;
}
