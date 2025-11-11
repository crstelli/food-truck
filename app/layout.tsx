import "@/app/(styles)/globals.css";
import "leaflet/dist/leaflet.css";

import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

interface Props {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} max-w-screen min-h-screen flex flex-col selection:bg-red-500 selection:text-red-50`}
      >
        {children}
      </body>
    </html>
  );
}
