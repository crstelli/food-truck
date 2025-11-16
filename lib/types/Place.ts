import type { LatLngTuple } from "leaflet";
import type { Affordability } from "./Affordability";
import type { Review } from "./Review";

export interface Place {
  id: number;
  created_at: string;

  name: string;
  location: LatLngTuple;
  affordability: Affordability;

  rating_value: number;
  reviews: Review[];
}
