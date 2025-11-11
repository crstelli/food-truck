import { MapContainer, TileLayer } from "react-leaflet";
import { CustomMarker } from "./CustomMarker";

import type { Place } from "@/app/(lib)/(types)/Place";
import { MAP_DEFAULT_ZOOM } from "@/app/(lib)/constants";

const places: Place[] = [
  {
    id: 1,
    position: [40.828928, 14.2311424],
    name: "Angels Burger",
    ratingCount: 99,
    ratingValue: 4.2,
    affordability: "$$$",
  },

  {
    id: 2,
    position: [40.728928, 14.1311424],
    name: "Robero Villa",
    ratingCount: 320,
    ratingValue: 4.4,
    affordability: "$$",
  },

  {
    id: 3,
    position: [40.628928, 14.5311424],
    name: "El Pablo",
    ratingCount: 52,
    ratingValue: 4.1,
    affordability: "$",
  },
];

export default function Map() {
  return (
    <MapContainer
      center={[40.828928, 14.2311424]}
      zoom={MAP_DEFAULT_ZOOM}
      scrollWheelZoom={false}
      className="w-full h-full"
    >
      {/* <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" /> */}
      <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
      {places.map((place) => (
        <CustomMarker key={place.id} place={place} />
      ))}
    </MapContainer>
  );
}
