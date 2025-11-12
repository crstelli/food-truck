import type { SearchParams } from "@/app/(lib)/(types)/SearchParams";

import { Map } from "./(components)/(map)/index";
import { Navbar } from "./(components)/(navbar)/Navbar";

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
  return (
    <div className="max-w-screen h-screen grid grid-cols-[auto_1fr]">
      <Navbar />
      <main className="w-full h-full flex items-center justify-center">
        <Map />
      </main>
    </div>
  );
}
