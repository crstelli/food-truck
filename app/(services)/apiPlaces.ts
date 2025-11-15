import { AddTruckType } from "../(lib)/(actions)/addTruck";
import { supabase } from "./supabase";

export async function fetchPlaces() {
  const { data, error } = await supabase.from("places").select("*");

  if (error) throw error;
  return data;
}

export async function fetchReviews() {
  const { data, error } = await supabase.from("reviews").select("*");

  if (error) throw error;
  return data;
}

export async function addPlace(data: AddTruckType) {
  const { error } = await supabase.from("places").insert(data);

  if (error) throw error;
}
