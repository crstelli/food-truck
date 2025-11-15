import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { H1, H2 } from "@/components/custom/typography";

export const metadata: Metadata = {
  title: "Home",
};

export default function page() {
  return (
    <main className="w-[90%] max-w-[1200px] mx-auto flex items-center justify-between my-auto">
      <div className="flex flex-col gap-3">
        <H1 className="text-6xl text-left font-bold">
          Your favorites trucks
          <br />
          In one place
        </H1>
        <H2 className="text-2xl font-light">
          Over 100.000 food trucks around the world.
        </H2>
        <Link href="/app" className="self-start mt-8">
          <Button>Check the App</Button>
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
