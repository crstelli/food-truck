import { useSearchParams } from "next/navigation";
import { useSidebarContext } from "../useSidebarContext";

import { Button } from "@/components/ui/button";
import { getAffordabilityColor } from "@/app/(lib)/getAffordabilityColor";
import { Star } from "lucide-react";

function Info() {
  const searchParams = useSearchParams();
  const place = useSidebarContext().places.find(
    (place) => place.id === +(searchParams.get("place_id") || 0)
  );

  if (!place) return <p>No Place</p>;

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <h1 className="text-3xl col-span-2 text-center">{place.name}</h1>
        <div>
          <h2 className="font-bold">Affordability</h2>
          <span className={getAffordabilityColor(place.affordability)}>
            {place.affordability}
          </span>
        </div>
        <div>
          <h2 className="font-bold">Added</h2>
          <span className="text-gray-600">
            {new Date(place.created_at).toLocaleString()}
          </span>
        </div>
        <div>
          <h2 className="font-bold">Rating</h2>
          <span className="flex items-center gap-1">
            <Star size={20} className="text-yellow-400 fill-yellow-400" />
            {place.rating_value} / 5
          </span>
        </div>
        <a
          target="blank"
          href={`https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${place.location[0]},${place.location[1]}&travelmode=driving
`}
        >
          <Button className="self-center">Get Direction</Button>
        </a>
      </div>

      <h2 className="mt-10 text-center text-xl">Last Reviews</h2>
      <div className="flex flex-col gap-2 overflow-auto">
        {place.reviews.map((rev) => (
          <div
            key={rev.id}
            className="grid grid-cols-2 p-2 border border-border rounded-md"
          >
            <h3 className="font-bold">{rev.user}</h3>
            <span className="flex items-center gap-1">
              {rev.rating}
              <Star size={20} className="text-yellow-400 fill-yellow-400" />
            </span>
            <span className="col-span-2 mt-2 text-gray-600">{rev.content}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export { Info };
