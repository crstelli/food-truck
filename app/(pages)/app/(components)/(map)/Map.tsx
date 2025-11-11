import { MapContainer, TileLayer } from "react-leaflet";
import { CustomMarker } from "./CustomMarker";

import type { marker } from "@/app/(lib)/(types)/marker";
import { MAP_DEFAULT_ZOOM } from "@/app/(lib)/constants";

const markers: marker[] = [
  {
    id: 1,
    position: [40.828928, 14.2311424],
    label: "Angels Burger",
  },

  {
    id: 2,
    position: [40.728928, 14.1311424],
    label: "Rosario Burger",
  },

  {
    id: 3,
    position: [40.628928, 14.5311424],
    label: "Roberto Villa",
  },
];

export default function Map() {
  // const map = useMap();

  // function handleMarkerClick(e) {
  //   // console.log(e.lat);
  //   // Fly to map
  //   // Open form
  // }

  return (
    <MapContainer
      center={[40.828928, 14.2311424]}
      zoom={MAP_DEFAULT_ZOOM}
      scrollWheelZoom={false}
      className="w-full h-full"
    >
      {/* <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" /> */}
      <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
      {markers.map((marker) => (
        <CustomMarker key={marker.id} marker={marker} />
      ))}
    </MapContainer>
  );
}
