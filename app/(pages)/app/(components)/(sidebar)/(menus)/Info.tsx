import { useSearchParams } from "next/navigation";
import { useSidebarContext } from "../useSidebarContext";

import { Button } from "@/app/(components)/Button";

function Info() {
  const searchParams = useSearchParams();
  const place = useSidebarContext().places.find(
    (place) => place.id === +(searchParams.get("place_id") || 0)
  );

  if (!place) return <p>No Place</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold">{place.name}</h1>
      <h2>Affordability: {place.affordability}</h2>
      <span>Added: {new Date(place.created_at).toLocaleString()}</span>
      <h3>Raings: {place.rating_value}</h3>
      <Button>Get Direction</Button>
    </div>
  );
}

export { Info };
