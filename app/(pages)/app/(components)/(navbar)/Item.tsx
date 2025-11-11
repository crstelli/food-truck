import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
}

function Item({ icon: Icon }: Props) {
  return (
    <li>
      <Icon className="size-8 text-orange-50 stroke-2" />
    </li>
  );
}

export { Item };
