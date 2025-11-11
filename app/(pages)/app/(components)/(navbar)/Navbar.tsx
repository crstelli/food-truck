import Link from "next/link";
import Image from "next/image";

import { Item } from "./Item";

import { Bookmark, Info, Search, Settings } from "lucide-react";

function Navbar() {
  return (
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
  );
}

export { Navbar };
