import Link from "next/link";

import { TextLogo } from "../TextLogo";
import { NavItem } from "./NavItem";
import { ThemeButton } from "../ThemeButton";

function Navbar() {
  return (
    <nav className="flex justify-between items-center w-[95%] max-w-[1250px] mx-auto">
      <Link href="/">
        <TextLogo />
      </Link>
      <ul className="flex items-center gap-4">
        <NavItem>About</NavItem>
        <NavItem>App</NavItem>
        <span className="ml-4">
          <ThemeButton />
        </span>
      </ul>
    </nav>
  );
}

export { Navbar };
