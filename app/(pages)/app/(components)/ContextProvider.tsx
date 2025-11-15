"use client";

import { useEffect, useState } from "react";
import { SidebarContext } from "./(sidebar)/useSidebarContext";

import type { LatLngTuple } from "leaflet";
import type { SidebarMenu } from "@/app/(lib)/(types)/SidebarMenu";
import type { Place } from "@/app/(lib)/(types)/Place";
import type { Bookmark } from "@/app/(lib)/(types)/Bookmark";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
  places: Place[];
}

function ContextProvider({ children, places }: Props) {
  const [menu, setMenu] = useState<SidebarMenu>("");
  const [position, setPosition] = useState<LatLngTuple | []>([]);
  const [bookmarks, setBookmarks] = useState<Bookmark[] | []>(() => {
    if (typeof window !== "undefined") {
      const storage = localStorage.getItem("bookmarks");
      if (storage) return JSON.parse(storage);
    }
    return [];
  });

  const { replace } = useRouter();
  const pathname = usePathname();

  const closeMenu = () => {
    setMenu("");
    replace(pathname);
  };

  function addBookmark(bm: Bookmark) {
    setBookmarks((bookmarks) => [...bookmarks, bm]);
  }

  function removeBookmark(id: number) {
    setBookmarks((bookmarks) => bookmarks.filter((book) => book.id !== id));
  }

  function isBookmarked(id: number) {
    return bookmarks.some((bookmark) => bookmark.id === id);
  }

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  return (
    <SidebarContext.Provider
      value={{
        menu,
        setMenu,
        closeMenu,
        position,
        setPosition,
        bookmarks,
        addBookmark,
        removeBookmark,
        isBookmarked,
        places,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export { ContextProvider };
