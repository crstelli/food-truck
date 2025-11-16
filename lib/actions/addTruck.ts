"use server";

import type { Affordability } from "../types/Affordability";
import type { LatLngTuple } from "leaflet";
import { addPlace } from "@/services/apiPlaces";
import { revalidatePath } from "next/cache";

import { DEV_MODE } from "../constants";

export interface AddTruckType {
  name: string;
  affordability: Affordability;
  location: LatLngTuple;
}

export async function addItem(data: AddTruckType) {
  if (DEV_MODE)
    return {
      ok: false,
      message: "Dev mode enabled, you cannot add new Trucks.",
    };
  else {
    await addPlace(data);
    revalidatePath("/app");

    return { ok: true, message: "ok" };
  }
}
