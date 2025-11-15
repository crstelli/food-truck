import { Popup } from "react-leaflet";

import type { Place } from "@/app/(lib)/(types)/Place";
import { Star } from "@/components/custom/Star";

import { Button } from "@/components/ui/button";
import { getAffordabilityColor } from "@/app/(lib)/getAffordabilityColor";

import { Info, Map } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ButtonGroup } from "@/components/ui/button-group";
import { Separator } from "@/components/ui/separator";
import { BookmarkButton } from "@/components/custom/BookmarkButton";

interface Props {
  onClose: () => void;
  place: Place;
}

function CustomPopup({ onClose, place }: Props) {
  return (
    <Popup
      eventHandlers={{ remove: onClose }}
      interactive
      className="place-popup"
    >
      <Card className="gap-2 border-none">
        <CardHeader className="text-nowrap flex justify-between">
          <h2 className="font-bold text-xl">{place.name}</h2>
        </CardHeader>

        <CardContent className="flex justify-between">
          <span className="flex items-center gap-1 text-lg">
            <Star />
            <span className="font-bold">{place.rating_value}</span> (
            {place.reviews.length})
          </span>
          <h3
            className={`text-lg font-bold ${getAffordabilityColor(
              place.affordability
            )}`}
          >
            {place.affordability}
          </h3>
        </CardContent>

        <Separator className="my-2 w-[80%]! mx-auto" />

        <CardFooter className="flex gap-2">
          <a
            target="blank"
            href={`https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${place.location[0]},${place.location[1]}&travelmode=driving
`}
          >
            <Button>
              <Map />
              Directions
            </Button>
          </a>
          <ButtonGroup>
            <Button variant="secondary">
              <Info />
            </Button>
            <BookmarkButton placeId={place.id} />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Popup>
  );
}

export { CustomPopup };
