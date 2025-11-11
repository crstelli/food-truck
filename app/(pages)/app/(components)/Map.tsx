import { MapContainer, TileLayer } from "react-leaflet";

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
    </MapContainer>
  );
}
