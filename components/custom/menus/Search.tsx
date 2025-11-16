import { useState } from "react";
import { useSidebarContext } from "@/app/app/(sidebar)/useSidebarContext";

import { Input } from "@/components/ui/input";
import { H1 } from "@/components/ui/typography";

import { PlaceCard } from "@/components/custom/sidebar/PlaceCard";

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
        placeholder="Search for a Truck"
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
