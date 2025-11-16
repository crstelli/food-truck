import type { SearchParams } from "@/lib/(types)/SearchParams";
import type { Place } from "@/lib/(types)/Place";
import type { Review } from "@/lib/(types)/Review";

import { fetchPlaces, fetchReviews } from "@/services/apiPlaces";

import { Sidebar } from "@/components/custom/sidebar/Sidebar";
import { Map } from "../../components/custom/map";
import { SidebarProvider } from "@/components/custom/ContextProvider";
import { MapProvider } from "../../components/custom/MapContext";

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
      <SidebarProvider places={places}>
        <MapProvider>
          <Sidebar />
          <main className="w-full h-full flex items-center justify-center">
            <Map />
          </main>
        </MapProvider>
      </SidebarProvider>
    </div>
  );
}
