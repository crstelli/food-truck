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
    <aside className="grid grid-cols-[auto_auto] relative h-screen">
      {menu && (
        <button
          onClick={closeMenu}
          className="aspect-1/2 w-7 bg-gray-800 absolute text-white flex rounded-r-xl cursor-pointer items-center justify-center top-13 right-0 translate-x-full z-1001"
        >
          <ChevronLeft />
        </button>
      )}
      <nav
        className={`bg-gray-50 dark:bg-gray-800 px-4 py-15 flex flex-col ${
          menu && "min-w-50"
        }`}
      >
        <Link href="/" className="self-center">
          <div className="size-10 relative">
            <Image src={"/logo.svg"} alt="Logo of the App" fill />
          </div>
        </Link>
        <ul className="flex flex-col mt-27 gap-8">
          <Item icon={SearchIcon} opens="search">
            Search
          </Item>
          <Item icon={Bookmark} opens="bookmarks">
            Bookmarks
          </Item>
          <Item icon={CirclePlus} opens="add">
            Add a place
          </Item>
          <Item icon={SettingsIcon} opens="settings">
            Settings
          </Item>
          <Item icon={InfoIcon} opens="info">
            Info
          </Item>
        </ul>
        <li className="mt-20">
          {theme === "dark" ? (
            <Button onClick={() => setTheme("light")}>
              <Moon />
            </Button>
          ) : (
            <Button onClick={() => setTheme("dark")}>
              <Sun />
            </Button>
          )}
        </li>
      </nav>
      {menu && (
        <div className="px-4 py-15 overflow-auto min-w-100">
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
