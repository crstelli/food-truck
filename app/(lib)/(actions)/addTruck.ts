"use server";

import type { Affordability } from "../(types)/Affordability";
import type { LatLngTuple } from "leaflet";
import { addPlace } from "@/app/(services)/apiPlaces";

export interface AddTruckType {
  name: string;
  affordability: Affordability;
  location: LatLngTuple;
}

export async function addItem(data: AddTruckType) {
  addPlace(data);
}
