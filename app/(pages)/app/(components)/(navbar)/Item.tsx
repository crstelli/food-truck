import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  collapse: boolean;
  children: string;
}

function Item({ icon: Icon, collapse, children }: Props) {
  return (
    <li className="flex items-center text-gray-800 gap-2 font-bold">
      <Icon className="size-8 stroke-2" />
      {!collapse && <span className="text-lg">{children}</span>}
    </li>
  );
}

export { Item };
