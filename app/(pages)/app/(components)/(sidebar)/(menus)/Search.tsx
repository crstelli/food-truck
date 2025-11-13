import { useState } from "react";
import { useSidebarContext } from "../useSidebarContext";

function Search() {
  const [typing, setTyping] = useState("");
  const { places } = useSidebarContext();

  return (
    <div>
      <h1 className="text-3xl font-bold">Search for a place</h1>
      <input
        type="text"
        value={typing}
        onChange={(e) => setTyping(e.target.value)}
        className="border border-orange-500"
      />

      {typing.length > 2 &&
        places
          .filter((place) =>
            place.name.toLowerCase().includes(typing.toLowerCase())
          )
          .map((place) => (
            <div
              key={place.id}
              className="mt-10 grid grid-cols-2 border border-orange-500 text-center"
            >
              <h2>{place.name}</h2>
              <h3>Ratings: {place.rating_value}</h3>
              <button className="col-span-2">Locate</button>
            </div>
          ))}
    </div>
  );
}

export { Search };
