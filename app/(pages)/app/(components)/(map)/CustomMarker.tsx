import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { Marker, Popup, useMap } from "react-leaflet";
import type { LeafletMouseEvent } from "leaflet";
import type { Place as placeType } from "@/app/(lib)/(types)/Place";

import { PLACE_FOCUS_ZOOM } from "@/app/(lib)/constants";
import { markerIcon } from "@/app/(lib)/markerIcon";
import { Button } from "@/app/(components)/Button";

import { Info, Map, Star } from "lucide-react";
import { getAffordabilityColor } from "@/app/(lib)/getAffordabilityColor";

interface Props {
  place: placeType;
}

function CustomMarker({ place }: Props) {
  const map = useMap();
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const { replace } = useRouter();

  function handleOpen(e: LeafletMouseEvent) {
    const params = new URLSearchParams(searchParams);

    params.set("place", String(place.name));
    params.set("id", String(place.id));
    replace(`${pathname}?${params.toString()}`);

    map.flyTo(e.latlng, PLACE_FOCUS_ZOOM);
  }

  function handleClose() {
    const params = new URLSearchParams(searchParams);

    params.delete("place");
    replace(`${pathname}`);
  }

  return (
    <Marker
      eventHandlers={{ click: handleOpen }}
      position={place.location}
      icon={markerIcon}
    >
      <Popup
        eventHandlers={{ remove: handleClose }}
        interactive
        className="place-popup"
      >
        <div className="w-full flex flex-col gap-1">
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
          <div className="flex items-center mt-4 gap-2">
            <Button className="flex items-center gap-2 text-nowrap">
              <Map />
              Get Directions
            </Button>
            <Button className="flex items-center gap-2" variant="secondary">
              <Info />
              Info
            </Button>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export { CustomMarker };
