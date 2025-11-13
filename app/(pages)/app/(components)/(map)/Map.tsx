import { MapContainer, TileLayer } from "react-leaflet";
import { CustomMarker } from "./CustomMarker";
import { ClickHandler } from "./ClickHandler";

import type { Place } from "@/app/(lib)/(types)/Place";
import { MAP_DEFAULT_ZOOM, MAP_DEFAULT_POSITION } from "@/app/(lib)/constants";

interface Props {
  places: Place[];
}

export default function Map({ places = [] }: Props) {
  return (
    <MapContainer
      center={MAP_DEFAULT_POSITION}
      zoom={MAP_DEFAULT_ZOOM}
      className="w-full h-full"
      doubleClickZoom
    >
      {/* <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" /> */}
      <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
      {places.map((place) => (
        <CustomMarker key={place.id} place={place} />
      ))}
      <ClickHandler />
    </MapContainer>
  );
}
