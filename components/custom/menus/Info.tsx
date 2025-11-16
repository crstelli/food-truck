import { useSearchParams } from "next/navigation";
import { useSidebarContext } from "../sidebar/SidebarProvider";

import { Button } from "@/components/ui/button";
import { getAffordabilityColor } from "@/lib/getAffordabilityColor";
import { Map } from "lucide-react";
import { H1, H2, H3 } from "@/components/ui/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "@/components/custom/Star";
import { BookmarkButton } from "@/components/custom/BookmarkButton";
import { Truck3D } from "@/components/custom/Truck3D";
import { Reviews } from "./Reviews";

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
            <h2 className="font-bold mb-1">Actions</h2>

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

      {place.reviews.length > 0 ? (
        <Reviews place={place} />
      ) : (
        <H3 className="text-center mt-6">No recent reviews for this Truck</H3>
      )}
    </>
  );
}

export { Info };
