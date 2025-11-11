import type { LatLngTuple } from "leaflet";
import type { Affordability } from "./Affordability";

export interface Place {
  id: number;
  position: LatLngTuple;

  name: string;
  ratingValue: number;
  ratingCount: number;
  affordability: Affordability;
}
