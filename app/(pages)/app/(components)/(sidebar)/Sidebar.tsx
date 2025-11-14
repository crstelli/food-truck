"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { SidebarContext, useSidebarContext } from "./useSidebarContext";
import { useTheme } from "next-themes";
import { Item } from "./Item";

import { Search } from "./(menus)/Search";
import { Bookmarks } from "./(menus)/Bookmarks";
import { Add } from "./(menus)/Add";
import { Settings } from "./(menus)/Settings";
import { Info } from "./(menus)/Info";

import {
  Bookmark,
  CirclePlus,
  ChevronLeft,
  Info as InfoIcon,
  Search as SearchIcon,
  Settings as SettingsIcon,
  Moon,
  Sun,
} from "lucide-react";

function Sidebar() {
  const { menu, closeMenu } = useSidebarContext();
  const { setTheme, theme } = useTheme();

  return (
    <aside className="grid grid-cols-[auto_auto] absolute top-0 left-0 h-screen z-401 w-160">
      {menu && (
        <button
          onClick={closeMenu}
          className="aspect-1/2 w-7 bg-gray-800 absolute text-white flex rounded-r-xl cursor-pointer items-center justify-center top-13 right-0 translate-x-full z-1001"
        >
          <ChevronLeft />
        </button>
      )}
      <nav
        className={`bg-gray-50 relative dark:bg-gray-800 px-4 py-15 items-start grid grid-rows-[1fr_3fr] ${
          menu && "min-w-50"
        }`}
      >
        <Link
          href="/"
          className={`relative mx-auto ${menu ? "size-15" : "size-8"}`}
        >
          <Image src={"/logo.svg"} alt="Logo of the App" fill />
        </Link>
        <ul className="flex flex-col gap-8">
          <Item icon={SearchIcon} opens="search">
            Search
          </Item>
          <Item icon={Bookmark} opens="bookmarks">
            Bookmarks
          </Item>
          <Item icon={CirclePlus} opens="add">
            Add a Truck
          </Item>
          <Item icon={SettingsIcon} opens="settings">
            Settings
          </Item>
          <Item icon={InfoIcon} opens="info">
            Info
          </Item>
        </ul>
        <li className="mt-auto list-none size-8 overflow-hidden flex items-center justify-center">
          {theme === "dark" ? (
            <Button size={"sm"} onClick={() => setTheme("light")}>
              <Moon />
            </Button>
          ) : (
            <Button size={"sm"} onClick={() => setTheme("dark")}>
              <Sun />
            </Button>
          )}
        </li>
      </nav>
      {menu && (
        <div className="px-4 py-15 overflow-auto flex flex-col min-w-110 bg-white dark:bg-gray-900">
          {menu === "search" && <Search />}
          {menu === "bookmarks" && <Bookmarks />}
          {menu === "add" && <Add />}
          {menu === "settings" && <Settings />}
          {menu === "info" && <Info />}
        </div>
      )}
    </aside>
  );
}

export { Sidebar, SidebarContext };
