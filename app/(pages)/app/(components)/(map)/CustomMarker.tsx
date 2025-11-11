import { Marker, Popup, useMap } from "react-leaflet";

import type { LeafletMouseEvent } from "leaflet";
import type { marker as markerType } from "@/app/(lib)/(types)/marker";

import { markerIcon } from "@/app/(lib)/markerIcon";

interface Props {
  marker: markerType;
}

function CustomMarker({ marker }: Props) {
  const map = useMap();

  function handleClick(e: LeafletMouseEvent) {
    map.flyTo(e.latlng);
  }

  return (
    <Marker
      eventHandlers={{ click: handleClick }}
      key={marker.id}
      position={marker.position}
      icon={markerIcon}
    >
      <Popup>{marker.label}</Popup>
    </Marker>
  );
}

export { CustomMarker };
