import Link from "next/link";

interface Props {
  children: string;
}

function NavItem({ children }: Props) {
  const ref = `/${children.toLowerCase().trim()}`;

  return (
    <Link href={ref}>
      <li className="text-xl uppercase text-gray-800 font-light">{children}</li>
    </Link>
  );
}

export { NavItem };
