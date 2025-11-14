import { useState } from "react";
import { useSidebarContext } from "../useSidebarContext";

import { Input } from "@/components/ui/input";
import { H1 } from "@/components/custom/typography";

import { PlaceCard } from "@/components/custom/PlaceCard";

function Search() {
  const [typing, setTyping] = useState("");
  const { places } = useSidebarContext();

  return (
    <>
      <H1>Search</H1>
      <Input
        type="text"
        value={typing}
        onChange={(e) => setTyping(e.target.value)}
        className="mt-6 w-[80%] mx-auto"
      />

      <div className="flex flex-col mt-10">
        {typing.length > 2 &&
          places
            .filter((place) =>
              place.name.toLowerCase().includes(typing.toLowerCase())
            )
            .map((place) => <PlaceCard key={place.id} place={place} />)}
      </div>
    </>
  );
}

export { Search };
