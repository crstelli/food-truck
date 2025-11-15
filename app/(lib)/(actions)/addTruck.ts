"use server";

import type { Affordability } from "../(types)/Affordability";
import type { LatLngTuple } from "leaflet";
import { addPlace } from "@/app/(services)/apiPlaces";
import { revalidatePath } from "next/cache";

export interface AddTruckType {
  name: string;
  affordability: Affordability;
  location: LatLngTuple;
}

export async function addItem(data: AddTruckType) {
  await addPlace(data);
  revalidatePath("/app");
}
