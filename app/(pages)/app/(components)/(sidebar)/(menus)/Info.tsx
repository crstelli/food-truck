import { useSearchParams } from "next/navigation";
import { useSidebarContext } from "../useSidebarContext";

import { Button } from "@/components/ui/button";
import { getAffordabilityColor } from "@/app/(lib)/getAffordabilityColor";
import { Map, StarIcon } from "lucide-react";
import { H1, H2 } from "@/components/custom/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "@/components/custom/Star";
import { BookmarkButton } from "@/components/custom/BookmarkButton";
import { Truck3D } from "@/components/custom/truck/Truck3D";

function Info() {
  const searchParams = useSearchParams();
  const place = useSidebarContext().places.find(
    (place) => place.id === +(searchParams.get("place_id") || 0)
  );

  if (!place)
    return <H2 className="text-center">Click on a Truck to show info</H2>;

  return (
    <>
      <H1>Info</H1>
      <div className="w-full">
        <Truck3D />
      </div>
      <Card className="flex flex-col mt-4">
        <CardHeader>
          <H2 className="text-center">{place.name}</H2>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 items-center">
          <div>
            <h2 className="font-bold">Affordability</h2>
            <span className={getAffordabilityColor(place.affordability)}>
              {place.affordability}
            </span>
          </div>
          <div>
            <h2 className="font-bold">Added</h2>
            <span className="text-muted-foreground">
              {new Date(place.created_at).toLocaleDateString()}
            </span>
          </div>
          <div>
            <h2 className="font-bold">Rating</h2>
            <span className="flex items-center gap-2 text-lg">
              <Star />
              {place.rating_value}
            </span>
          </div>
          <div>
            <h2 className="font-bold">Actions</h2>

            <div className="flex gap-1">
              <a
                target="blank"
                href={`https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${place.location[0]},${place.location[1]}&travelmode=driving
              `}
              >
                <Button className="self-center">
                  <Map />
                  Directions
                </Button>
              </a>
              <BookmarkButton placeId={place.id} />
            </div>
          </div>
        </CardContent>
      </Card>

      <H2 className="mt-10 text-center">Last Reviews</H2>
      <div className="flex flex-col gap-2 mt-1">
        {place.reviews.slice(0, 3).map((rev) => (
          <div
            key={rev.id}
            className="grid grid-cols-2 p-4 border border-border rounded-md"
          >
            <h3 className="font-bold">{rev.user}</h3>
            <span className="flex items-center gap-1 justify-self-end">
              {[...Array(rev.rating)].map((_, i) => (
                <Star key={i} />
              ))}
              {[...Array(5 - rev.rating)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </span>
            <span className="col-span-2 mt-4 text-muted-foreground">
              {rev.content}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export { Info };
