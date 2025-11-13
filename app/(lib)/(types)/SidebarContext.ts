import { Dispatch, SetStateAction } from "react";

import type { LatLngTuple } from "leaflet";
import type { SidebarMenu } from "./SidebarMenu";
import type { Place } from "./Place";

export interface SidebarContext {
  menu: SidebarMenu;
  setMenu: Dispatch<SetStateAction<SidebarMenu>>;
  closeMenu: () => void;

  position: LatLngTuple | [];
  setPosition: Dispatch<SetStateAction<LatLngTuple | []>>;

  places: Place[];
}
