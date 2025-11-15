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
    <main className="w-[95%] max-w-[1200px] mx-auto flex flex-col md:flex-row items-center sm:justify-between my-auto">
      <div className="flex flex-col gap-3">
        <H1 className="text-2xl mt-15 md:mt-0 text-nowrap sm:text-4xl text-center md:text-left lg:text-6xl font-bold">
          Your favorites trucks
          <br />
          In one place
        </H1>
        <H2 className="text-2xl font-light text-center md:text-left text-muted-foreground">
          Over 100.000 food trucks around the world.
        </H2>
        <Link href="/app" className="mx-auto md:mx-0 mt-8 md:mt-2">
          <Button className="font-bold text-lg">Check the App</Button>
        </Link>
      </div>
      <div className="w-full max-w-[400px] mt-10 md:mt-0 aspect-video relative">
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
