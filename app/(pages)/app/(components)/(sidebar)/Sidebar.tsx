"use client";

import Link from "next/link";
import Image from "next/image";

import { SidebarContext, useSidebarContext } from "./useSidebarContext";
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
} from "lucide-react";
import { ThemeButton } from "@/components/custom/ThemeButton";

function Sidebar() {
  const { menu, closeMenu } = useSidebarContext();

  return (
    <aside className="grid grid-cols-[auto_1fr] absolute top-0 left-0 h-screen z-401 w-full max-w-160">
      <nav
        className={`relative bg-secondary py-15 transition-[width] duration-300 ease-in-out items-start justify-items-center grid grid-rows-[1fr_3fr] ${
          menu ? "w-15 md:w-50" : "w-15"
        }`}
      >
        <Link
          href="/"
          className={`relative mx-auto size-8 ${menu && "md:size-15"}`}
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
        <li className="mt-auto list-none size-8 flex items-center justify-center">
          <ThemeButton />
        </li>
      </nav>

      <div
        className={`py-15 overflow-y-auto flex flex-col relative transition-[width] duration-300 ease-in-out bg-white dark:bg-gray-900 ${
          menu ? "w-full sm:w-110 px-4" : "w-0 px-0"
        }`}
      >
        <button
          onClick={closeMenu}
          className="aspect-1/2 w-7 bg-muted absolute rounded-l-xl cursor-pointer items-center justify-center top-12 right-0 z-1001"
        >
          <ChevronLeft />
        </button>
        {menu === "search" && <Search />}
        {menu === "bookmarks" && <Bookmarks />}
        {menu === "add" && <Add />}
        {menu === "settings" && <Settings />}
        {menu === "info" && <Info />}
      </div>
    </aside>
  );
}

export { Sidebar, SidebarContext };
