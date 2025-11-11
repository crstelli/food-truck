import Image from "next/image";
import Link from "next/link";

import { Map } from "./(components)/index";

export default function page() {
  return (
    <div className="max-w-screen h-screen grid grid-cols-[auto_1fr]">
      <nav className="bg-red-500 px-4 py-12">
        <Link href="/">
          <div className="size-11 relative">
            <Image src={"/logo-white.svg"} alt="Logo of the App" fill></Image>
          </div>
        </Link>
      </nav>
      <main className="w-full h-full">
        <Map />
      </main>
    </div>
  );
}
