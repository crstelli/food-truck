import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import { Button } from "@/app/(components)/Button";

export const metadata: Metadata = {
  title: "Home",
};

export default function page() {
  return (
    <main className="w-[90%] max-w-[1200px] mx-auto flex items-center justify-between my-auto">
      <div className="flex flex-col gap-3">
        <h1 className="text-orange-500 font-bold text-6xl">
          Your favorites trucks
          <br />
          In one place
        </h1>
        <h2 className="text-2xl font-light text-gray-500">
          Over 100.000 food trucks around the world.
        </h2>
        <Link href="/app" className="self-start mt-8">
          <Button>Check the App &rarr;</Button>
        </Link>
      </div>
      <div className="w-[400px] aspect-video relative">
        <div className="absolute top-0 left-0 w-full h-full z-2"></div>
        <Image
          src="landing-illustration.svg"
          alt="Food truck illustration"
          fill
        />
      </div>
    </main>
  );
}
