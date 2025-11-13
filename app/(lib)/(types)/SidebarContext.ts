import { Dispatch, SetStateAction } from "react";

import type { LatLngTuple } from "leaflet";
import type { SidebarMenu } from "./SidebarMenu";
import type { Place } from "./Place";
import type { Bookmark } from "./Bookmark";

export interface SidebarContext {
  menu: SidebarMenu;
  setMenu: Dispatch<SetStateAction<SidebarMenu>>;
  closeMenu: () => void;

  position: LatLngTuple | [];
  setPosition: Dispatch<SetStateAction<LatLngTuple | []>>;

  bookmarks: Bookmark[] | [];
  addBookmark: (bookmark: Bookmark) => void;
  removeBookmark: (id: number) => void;
  isBookmarked: (id: number) => boolean;

  places: Place[];
}
