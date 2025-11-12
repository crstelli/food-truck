"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

import { Item } from "./Item";
import { Bookmark, Info, Search, Settings } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const params = useSearchParams();

  const selectedPlace = params.get("place") || "";

  return (
    <div className="grid grid-cols-[auto_auto]">
      <nav className="bg-linear-to-b from-orange-500 to-orange-400 px-4 py-15 flex flex-col items-center">
        <Link href="/">
          <div className="size-13 relative">
            <Image src={"/logo-white.svg"} alt="Logo of the App" fill />
          </div>
        </Link>
        <ul className="flex flex-col mt-27 gap-6">
          <Item icon={Search} />
          <Item icon={Bookmark} />
          <Item icon={Settings} />
          <Item icon={Info} />
        </ul>
      </nav>
      <div className={`px-4 bg-orange-50 py-15 ${!selectedPlace && "hidden"}`}>
        <h2 className="text-gray-800 font-bold text-3xl">{selectedPlace}</h2>
      </div>
    </div>
  );
}

export { Navbar };
