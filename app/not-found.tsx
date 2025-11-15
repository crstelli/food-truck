import Image from "next/image";
import Link from "next/link";

import { H1 } from "@/components/custom/typography";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="w-screen h-screen flex flex-col gap-10 items-center justify-center">
      <H1 className="font-bold text-6xl">
        <span className="text-primary">ERROR!</span>
        <br />
        This page does not exists.
      </H1>
      <div className="relative w-[500px] aspect-video">
        <Image
          src="./landing-illustration.svg"
          alt="Landing Illustration of a food truck"
          fill
        />
      </div>
      <Link href="/">
        <Button size="lg" className="text-lg">
          Go Back to Home
        </Button>
      </Link>
    </main>
  );
}
