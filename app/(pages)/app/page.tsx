import type { SearchParams } from "@/app/(lib)/(types)/SearchParams";
import fetchPlaces from "@/app/(services)/apiPlaces";

import { Sidebar } from "./(components)/(sidebar)/Sidebar";
import { Map } from "./(components)/(map)/index";
import { ContextProvider } from "./(components)/ContextProvider";

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
  const places = await fetchPlaces();

  return (
    <div className="max-w-screen h-screen grid grid-cols-[auto_1fr]">
      <ContextProvider>
        <Sidebar />
        <main className="w-full h-full flex items-center justify-center">
          <Map places={places} />
        </main>
      </ContextProvider>
    </div>
  );
}
