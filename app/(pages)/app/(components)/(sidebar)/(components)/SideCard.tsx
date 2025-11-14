import { useMap } from "react-leaflet";

import { Place } from "@/app/(lib)/(types)/Place";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";
import { useMapContext } from "../../MapContext";
import { PLACE_FOCUS_ZOOM } from "@/app/(lib)/constants";

interface Props {
  place: Place;
}

function SideCard({ place }: Props) {
  const { mapRef } = useMapContext();

  return (
    <Card key={place.id} className="flex flex-col gap-1 border-border/40">
      <CardHeader className="grid grid-cols-[1fr_auto] items-center">
        <CardTitle className="text-lg font-bold">{place.name}</CardTitle>
        <span className="font-medium flex gap-2 text-lg text-gray-600">
          {place.rating_value}{" "}
          <Star className="text-yellow-400 fill-yellow-400" />
        </span>
      </CardHeader>

      <CardContent className="w-90 text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil veniam
        iste amet dolor.
      </CardContent>

      <CardFooter className="w-full mt-2">
        <Button
          className="w-full"
          onClick={() => mapRef.current.flyTo(place.location, PLACE_FOCUS_ZOOM)}
        >
          <MapPin className="w-4 h-4" />
          Locate
        </Button>
      </CardFooter>
    </Card>
  );
}

export { SideCard };
