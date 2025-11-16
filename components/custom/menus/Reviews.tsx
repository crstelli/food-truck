import { H2 } from "@/components/ui/typography";
import { Star } from "../Star";
import { StarIcon } from "lucide-react";
import type { Place } from "@/lib/(types)/Place";

interface Props {
  place: Place;
}

function Reviews({ place }: Props) {
  return (
    <>
      <H2 className="mt-10 text-center">Last Reviews</H2>
      <div className="flex flex-col gap-2 mt-2">
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

export { Reviews };
