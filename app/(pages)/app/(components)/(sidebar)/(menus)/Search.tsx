import { useState } from "react";
import { useSidebarContext } from "../useSidebarContext";

import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

function Search() {
  const [typing, setTyping] = useState("");
  const { places } = useSidebarContext();

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Search for a place
      </h1>
      <Input
        type="text"
        value={typing}
        onChange={(e) => setTyping(e.target.value)}
        className=" ring-orange-300 mb-4 focus:border-orange-500 mt-2 border-gray-400"
      />

      {typing.length > 2 &&
        places
          .filter((place) =>
            place.name.toLowerCase().includes(typing.toLowerCase())
          )
          .map((place) => (
            // <div
            //   key={place.id}
            //   className="mt-10 grid grid-cols-2 border border-orange-500 text-center"
            // >
            //   <h2>{place.name}</h2>
            //   <h3>Ratings: {place.rating_value}</h3>
            //   <button className="col-span-2">Locate</button>
            // </div>

            <Card
              key={place.id}
              className="border border-gray-400 flex flex-col gap-1"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {place.name}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">
                    {place.rating_value} ⭐
                  </span>
                </div>
              </CardContent>

              <CardFooter>
                <Button className="border border-gray-400 flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Mostra sulla mappa
                </Button>
              </CardFooter>
            </Card>
          ))}
    </div>
  );
}

export { Search };
