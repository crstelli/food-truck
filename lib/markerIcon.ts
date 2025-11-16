import L from "leaflet";

export const markerIconLight = new L.Icon({
  iconUrl: "/marker.svg",
  iconSize: [45, 45],
  iconAnchor: [22, 40],
  popupAnchor: [0, -40],
});

export const markerIconDark = new L.Icon({
  iconUrl: "/marker-dark.svg",
  iconSize: [45, 45],
  iconAnchor: [22, 40],
  popupAnchor: [0, -40],
});
