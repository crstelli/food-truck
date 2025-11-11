import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { markerIcon } from "@/app/(lib)/markerIcon";

import type { marker } from "@/app/(lib)/(types)/marker";

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
  return (
    <MapContainer
      center={[40.828928, 14.2311424]}
      zoom={12}
      scrollWheelZoom={false}
      className="w-full h-full"
    >
      {/* <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" /> */}
      <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
      {/* <Marker position={[40.828928, 14.2311424]} icon={markerIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position} icon={markerIcon}>
          <Popup>{marker.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
