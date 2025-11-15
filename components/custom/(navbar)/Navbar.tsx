import Link from "next/link";

import { TextLogo } from "../TextLogo";
import { NavItem } from "./NavItem";
import { ThemeButton } from "../ThemeButton";

function Navbar() {
  return (
    <nav className="flex flex-col gap-2 sm:flex-row justify-between items-center w-[95%] max-w-[1250px] mx-auto">
      <span className="fixed top-3 right-3 sm:hidden">
        <ThemeButton />
      </span>

      <Link href="/">
        <TextLogo />
      </Link>

      <ul className="flex items-center gap-4 mt-2 sm:mt-0">
        <NavItem>About</NavItem>
        <NavItem>App</NavItem>
        <span className="ml-4 hidden sm:block">
          <ThemeButton />
        </span>
      </ul>
    </nav>
  );
}

export { Navbar };
