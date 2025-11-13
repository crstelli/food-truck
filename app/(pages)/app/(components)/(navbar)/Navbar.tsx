"use client";

import { useState, createContext } from "react";
import { useSearchParams } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

import { Search } from "./(menus)/Search";
import { Bookmarks } from "./(menus)/Bookmarks";
import { Settings } from "./(menus)/Settings";
import { Info } from "./(menus)/Info";

import type { SidebarMenu } from "@/app/(lib)/(types)/SidebarMenu";
import { Item } from "./Item";
import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Info as InfoIcon,
  Search as SearchIcon,
  Settings as SettingsIcon,
} from "lucide-react";

const NavbarContext = createContext();

function Navbar() {
  const [menu, setMenu] = useState<SidebarMenu>("");
  const params = useSearchParams();

  const openSidebar = (menu: SidebarMenu) => setMenu(menu);
  const closeSidebar = () => setMenu("");

  const selectedPlace = params.get("place") || "";

  return (
    <NavbarContext.Provider value={{ menu, setMenu }}>
      <aside className="grid grid-cols-[auto_auto] relative">
        {menu ? (
          <button
            onClick={closeSidebar}
            className="aspect-1/2 w-7 bg-orange-400 absolute text-orange-50 flex rounded-r-xl cursor-pointer items-center justify-center top-13 right-0 translate-x-full z-1001"
          >
            <ChevronLeft />
          </button>
        ) : (
          <button
            onClick={() => openSidebar("search")}
            className="aspect-1/2 w-7 bg-orange-400 absolute text-orange-50 flex rounded-r-xl cursor-pointer items-center justify-center top-13 right-0 translate-x-full z-1001"
          >
            <ChevronRight />
          </button>
        )}
        <nav className="bg-linear-to-b bg-gray-50 px-4 py-15 flex flex-col items-center">
          <Link href="/">
            <div className="size-13 relative">
              <Image src={"/logo.svg"} alt="Logo of the App" fill />
            </div>
          </Link>
          <ul className="flex flex-col mt-27 gap-6">
            <Item icon={SearchIcon} opens="search">
              Search
            </Item>
            <Item icon={Bookmark} opens="bookmarks">
              Bookmarks
            </Item>
            <Item icon={SettingsIcon} opens="settings">
              Settings
            </Item>
            <Item icon={InfoIcon} opens="info">
              Info
            </Item>
          </ul>
        </nav>
        {menu && (
          <div className="px-4 py-15">
            {menu === "search" && <Search />}
            {menu === "bookmarks" && <Bookmarks />}
            {menu === "settings" && <Settings />}
            {menu === "info" && <Info />}
          </div>
        )}
      </aside>
    </NavbarContext.Provider>
  );
}

export { Navbar, NavbarContext };
