import { Popup } from "react-leaflet";

import type { Place } from "@/app/(lib)/(types)/Place";
import type { Bookmark } from "@/app/(lib)/(types)/Bookmark";

import { Button } from "@/app/(components)/Button";
import { getAffordabilityColor } from "@/app/(lib)/getAffordabilityColor";
import { useSidebarContext } from "../(sidebar)/useSidebarContext";

import { Bookmark as BookmarkIcon, Check, Info, Map, Star } from "lucide-react";

interface Props {
  onClose: () => void;
  place: Place;
}

function CustomPopup({ onClose, place }: Props) {
  const { addBookmark, isBookmarked: isBookmarkedFn } = useSidebarContext();
  const isBookmarked = isBookmarkedFn(place.id);

  function handleBook() {
    const bookmark: Bookmark = { id: place.id };
    addBookmark(bookmark);
  }

  return (
    <Popup
      eventHandlers={{ remove: onClose }}
      interactive
      className="place-popup"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-bold text-nowrap">{place.name}</h2>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-gray-700 text-lg">
            <Star className="text-yellow-500 fill-yellow-500" />
            {place.rating_value} (EDIT ME)
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
          <Button className="flex items-center gap-2 text-nowrap">
            <Map />
            Directions
          </Button>
          <Button className="flex items-center gap-2" variant="secondary">
            <Info />
            Info
          </Button>
          {isBookmarked ? (
            <p className="text-nowrap flex items-center gap-1">
              <Check strokeWidth={1} />
              In bookmarks
            </p>
          ) : (
            <Button onClick={handleBook} variant="secondary">
              <BookmarkIcon />
            </Button>
          )}
        </div>
      </div>
    </Popup>
  );
}

export { CustomPopup };
