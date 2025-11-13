import { SidebarMenu } from "./SidebarMenu";

export interface SidebarContext {
  menu: SidebarMenu;
  setMenu: (menu: SidebarMenu) => void;
}
