import { Popup } from "react-leaflet";

import type { Place } from "@/app/(lib)/(types)/Place";
import type { Bookmark } from "@/app/(lib)/(types)/Bookmark";
import { Star } from "@/components/custom/Star";

import { Button } from "@/components/ui/button";
import { getAffordabilityColor } from "@/app/(lib)/getAffordabilityColor";
import { useSidebarContext } from "../(sidebar)/useSidebarContext";

import { Bookmark as BookmarkIcon, BookmarkX, Info, Map } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ButtonGroup } from "@/components/ui/button-group";
import { Separator } from "@/components/ui/separator";

interface Props {
  onClose: () => void;
  place: Place;
}

function CustomPopup({ onClose, place }: Props) {
  const {
    addBookmark,
    removeBookmark,
    isBookmarked: isBookmarkedFn,
  } = useSidebarContext();
  const isBookmarked = isBookmarkedFn(place.id);

  function handleBook() {
    const bookmark: Bookmark = { id: place.id };
    addBookmark(bookmark);
  }

  function handleBookRemove() {
    removeBookmark(place.id);
  }

  console.log(place);

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
            {isBookmarked ? (
              <Button onClick={handleBookRemove} variant="destructive">
                <BookmarkX />
              </Button>
            ) : (
              <Button onClick={handleBook} variant="secondary">
                <BookmarkIcon />
              </Button>
            )}
          </ButtonGroup>
        </CardFooter>
      </Card>
      {/* <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-nowrap">{place.name}</h2>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 dark:text-gray-200 text-gray-700 text-lg">
            <Star className="text-yellow-500 fill-yellow-500" />
            {place.rating_value} ({place.reviews.length})
          </span>
          <span
            className={`font-bold text-xl ${getAffordabilityColor(
              place.affordability
            )}`}
          >
            {place.affordability}
          </span>
        </div>
        <div className="flex mt-4 gap-2 justify-between">
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
          <Button variant="secondary">
            <Info />
            Info
          </Button>
          {isBookmarked ? (
            <Button variant="destructive" onClick={handleBookRemove}>
              <BookmarkX />
              Remove
            </Button>
          ) : (
            <Button variant="secondary" onClick={handleBook}>
              <BookmarkIcon />
            </Button>
          )}
        </div>
      </div> */}
    </Popup>
  );
}

export { CustomPopup };
