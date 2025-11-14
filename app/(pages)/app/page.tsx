import type { SearchParams } from "@/app/(lib)/(types)/SearchParams";
import type { Place } from "@/app/(lib)/(types)/Place";
import type { Review } from "@/app/(lib)/(types)/Review";

import { fetchPlaces, fetchReviews } from "@/app/(services)/apiPlaces";

import { Sidebar } from "./(components)/(sidebar)/Sidebar";
import { Map } from "./(components)/(map)/index";
import { ContextProvider } from "./(components)/ContextProvider";
import { MapProvider } from "./(components)/MapContext";

interface MetadataProps {
  searchParams: SearchParams;
}

export async function generateMetadata({ searchParams }: MetadataProps) {
  const selectedPlace = (await searchParams)?.place;

  return {
    title: selectedPlace || "App",
  };
}

export default async function page() {
  const fetchedPlaces = await fetchPlaces();
  const reviews: Review[] = await fetchReviews();

  const places: Place[] = fetchedPlaces.map((place) => {
    return {
      ...place,
      reviews: reviews.filter((review) => review.place_id === place.id),
    };
  });

  return (
    <div className="max-w-screen h-screen relative flex">
      <ContextProvider places={places}>
        <MapProvider>
          <Sidebar />
          <main className="w-full h-full flex items-center justify-center">
            <Map />
          </main>
        </MapProvider>
      </ContextProvider>
    </div>
  );
}
