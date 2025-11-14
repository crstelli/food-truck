import { Place } from "@/app/(lib)/(types)/Place";
import { Button } from "@/components/ui/button";

import { Star } from "@/components/custom/Star";

import { MapPin } from "lucide-react";
import { useMapContext } from "@/app/(pages)/app/(components)/MapContext";
import { PLACE_FOCUS_ZOOM } from "@/app/(lib)/constants";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { H2, P } from "./typography";

interface Props {
  place: Place;
}

function PlaceCard({ place }: Props) {
  const { mapRef } = useMapContext();

  return (
    <Card className="w-full mx-auto gap-2 py-4">
      <CardHeader className="flex justify-between">
        <H2>{place.name}</H2>
        <span className="flex gap-2 items-center font-bold">
          {place.rating_value}
          <Star />
        </span>
      </CardHeader>

      <CardContent>
        <P>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil veniam
          iste amet dolor.
        </P>
      </CardContent>

      <CardFooter className="mt-2 flex justify-between">
        <Button
          onClick={() => mapRef.current.flyTo(place.location, PLACE_FOCUS_ZOOM)}
        >
          <MapPin className="w-4 h-4" />
          Locate
        </Button>
        <span className="text-muted-foreground">
          {place.reviews.length} reviews
        </span>
      </CardFooter>
    </Card>
    // <div key={place.id} className="flex flex-col gap-1 border-border/40">
    //   <div className="grid grid-cols-[1fr_auto] items-center">
    //   </div>

    //   <footer className="w-full mt-2">
    //     <Button
    //       className="w-full"
    //       onClick={() => mapRef.current.flyTo(place.location, PLACE_FOCUS_ZOOM)}
    //     >
    //       <MapPin className="w-4 h-4" />
    //       Locate
    //     </Button>
    //   </footer>
    // </div>
  );
}

export { PlaceCard };
