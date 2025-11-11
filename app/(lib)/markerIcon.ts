import L from "leaflet";

export const markerIcon = new L.Icon({
  iconUrl: "/marker.svg",
  iconSize: [45, 45],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});
