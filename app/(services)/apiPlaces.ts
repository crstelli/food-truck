import { supabase } from "./supabase";

export default async function fetchPlaces() {
  const { data, error } = await supabase.from("places").select("*");

  if (error) throw error;
  return data;
}
