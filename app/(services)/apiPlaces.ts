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
