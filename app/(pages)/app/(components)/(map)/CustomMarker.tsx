import { Marker, Popup, useMap } from "react-leaflet";
import type { LeafletMouseEvent } from "leaflet";
import type { marker as markerType } from "@/app/(lib)/(types)/marker";

import { PLACE_FOCUS_ZOOM } from "@/app/(lib)/constants";
import { markerIcon } from "@/app/(lib)/markerIcon";
import { Button } from "@/app/(components)/Button";

import { Info, Map, Star } from "lucide-react";

interface Props {
  marker: markerType;
}

function CustomMarker({ marker }: Props) {
  const map = useMap();

  function handleClick(e: LeafletMouseEvent) {
    map.flyTo(e.latlng, PLACE_FOCUS_ZOOM);
  }

  return (
    <Marker
      eventHandlers={{ click: handleClick }}
      key={marker.id}
      position={marker.position}
      icon={markerIcon}
    >
      <Popup className="place-popup">
        <div className="w-full flex flex-col gap-1">
          <h2 className="text-3xl font-bold text-nowrap">Antonio Truck</h2>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-gray-700 text-lg">
              <Star className="text-yellow-500 fill-yellow-500" />
              4.7 (162)
            </span>
            <span className="font-bold text-xl text-green-400">$</span>
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
