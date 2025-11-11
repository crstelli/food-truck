import "@/app/(styles)/globals.css";
import "leaflet/dist/leaflet.css";

import type { Metadata } from "next";

import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"] });

interface Props {
  readonly children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: "%s - FoodTruck",
    default: "FoodTruck",
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} max-w-screen min-h-screen flex flex-col selection:bg-orange-500 selection:text-orange-50`}
      >
        {children}
      </body>
    </html>
  );
}
