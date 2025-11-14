import { useState } from "react";
import { useSidebarContext } from "../useSidebarContext";

import { Input } from "@/components/ui/input";
import { SideCard } from "../(components)/SideCard";

function Search() {
  const [typing, setTyping] = useState("");
  const { places } = useSidebarContext();

  return (
    <>
      <h1 className="text-3xl text-center">Search</h1>
      <Input
        type="text"
        value={typing}
        onChange={(e) => setTyping(e.target.value)}
        className=" ring-orange-300 mb-4 focus:border-orange-500 mt-2 border-border/40"
      />

      {typing.length > 2 &&
        places
          .filter((place) =>
            place.name.toLowerCase().includes(typing.toLowerCase())
          )
          .map((place) => <SideCard key={place.id} place={place} />)}
    </>
  );
}

export { Search };
