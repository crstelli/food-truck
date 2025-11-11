import { Marker, Popup, useMap, type MarkerProps } from "react-leaflet";

import type { marker as markerType } from "@/app/(lib)/(types)/marker";
import { markerIcon } from "@/app/(lib)/markerIcon";

interface Props extends MarkerProps {
  marker: markerType;
}

function CustomMarker({ marker }: Props) {
  // const map = useMap();

  function handleMarkerClick(e) {
    const { lat, lng } = e.latlng;
    console.log(lat, lng);
  }

  return (
    <Marker
      eventHandlers={{ click: handleMarkerClick }}
      key={marker.id}
      position={marker.position}
      icon={markerIcon}
    >
      <Popup>{marker.label}</Popup>
    </Marker>
  );
}

export { CustomMarker };
