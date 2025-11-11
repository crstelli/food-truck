import type { LatLngTuple } from "leaflet";

export interface marker {
  id: number;
  position: LatLngTuple;
  label: string;
}
