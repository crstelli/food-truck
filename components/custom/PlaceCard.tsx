import { Place } from "@/app/(lib)/(types)/Place";
import { Button } from "@/components/ui/button";

import { Star } from "@/components/custom/Star";

import { Info, MapPin } from "lucide-react";
import { useMapContext } from "@/app/(pages)/app/(components)/MapContext";
import { PLACE_FOCUS_ZOOM } from "@/app/(lib)/constants";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { H2, P } from "./typography";
import { BookmarkButton } from "./BookmarkButton";
import { ButtonGroup } from "../ui/button-group";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSidebarContext } from "@/app/(pages)/app/(components)/(sidebar)/useSidebarContext";

interface Props {
  place: Place;
}

function PlaceCard({ place }: Props) {
  const { mapRef } = useMapContext();
  const searchParams = useSearchParams();

  const { replace } = useRouter();
  const pathname = usePathname();

  const { setMenu, closeMenu } = useSidebarContext();

  function handleOpen() {
    const params = new URLSearchParams(searchParams);

    params.set("place_id", String(place.id));
    replace(`${pathname}?${params.toString()}`);

    setMenu("info");
  }

  return (
    <Card className="w-full mx-auto gap-2 py-4">
      <CardHeader className="flex justify-between">
        <H2>{place.name}</H2>
        <span className="flex gap-2 items-center font-bold">
          {place.rating_value}
          <Star />
        </span>
      </CardHeader>

      <CardContent>
        <P>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil veniam
          iste amet dolor.
        </P>
      </CardContent>

      <CardFooter className="mt-2 flex gap-2">
        <Button
          onClick={() => {
            mapRef.current.flyTo(place.location, PLACE_FOCUS_ZOOM);
            closeMenu();
          }}
        >
          <MapPin className="w-4 h-4" />
          Locate
        </Button>
        <ButtonGroup>
          <Button onClick={handleOpen} variant="secondary" size="icon">
            <Info />
          </Button>
          <BookmarkButton placeId={place.id} />
        </ButtonGroup>
        <span className="text-muted-foreground ml-auto">
          {place.reviews.length} reviews
        </span>
      </CardFooter>
    </Card>
  );
}

export { PlaceCard };
