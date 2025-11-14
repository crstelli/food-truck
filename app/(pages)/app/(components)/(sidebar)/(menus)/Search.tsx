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
import { MapPin, Star } from "lucide-react";

function Search() {
  const [typing, setTyping] = useState("");
  const { places } = useSidebarContext();

  return (
    <>
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Search for a place
      </h1>
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
          .map((place) => (
            <Card
              key={place.id}
              className="flex flex-col gap-1 border-border/40"
            >
              <CardHeader className="grid grid-cols-[1fr_auto] items-center">
                <CardTitle className="text-lg font-bold">
                  {place.name}
                </CardTitle>
                <span className="font-medium flex gap-2 text-lg text-gray-600">
                  {place.rating_value}{" "}
                  <Star className="text-yellow-400 fill-yellow-400" />
                </span>
              </CardHeader>

              <CardContent className="w-90 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                veniam iste amet dolor.
              </CardContent>

              <CardFooter className="w-full mt-2">
                <Button className="w-full">
                  <MapPin className="w-4 h-4" />
                  Locate
                </Button>
              </CardFooter>
            </Card>
          ))}
    </>
  );
}

export { Search };
