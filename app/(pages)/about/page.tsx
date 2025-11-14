import type { Metadata } from "next";
import { Navbar } from "@/app/(components)/(navbar)/Navbar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};

export default function page() {
  return (
    <div className="h-screen w-screen bg-orange-100/75 flex flex-col p-10">
      <Navbar />
      <main className="w-[90%] max-w-[1200px] items-center gap-x-20 mx-auto grid grid-cols-2 py-20">
        <h1 className="text-5xl col-span-2">About</h1>
        <p className="text-lg text-gray-700">
          Benvenuto su FoodTruck, l&apos;app che ti aiuta a scoprire i migliori
          camioncini di panini nella tua zona. Consulta le recensioni degli
          altri utenti, trova i posti più vicini sulla mappa e raggiungili
          facilmente con Google Maps. Tutto quello che ti serve per
          un&apos;esperienza gustosa è a portata di click.
        </p>
        <div className="relative aspect-video w-[500px] overflow-hidden rounded-md border shadow-2xl">
          <Image src="/about-image.jpg" alt="Image of a foodtruck" fill />
        </div>
        <div className="relative mt-10 aspect-video w-[500px] overflow-hidden rounded-md border shadow-2xl">
          <Image src="/about-image-2.jpg" alt="Image of a foodtruck" fill />
        </div>
        <p className="text-lg text-gray-700">
          Con FoodTruck non solo trovi i camioncini più vicini, ma puoi anche
          leggere le recensioni di chi li ha già provati, confrontare le
          valutazioni e scegliere il panino perfetto per te. Grazie
          all&apos;integrazione con Google Maps, raggiungerli è semplice e
          veloce, senza perdere tempo a cercare strade o parcheggi. Sia che tu
          sia in pausa pranzo, in giro con gli amici o alla ricerca di
          un&apos;esperienza gastronomica diversa.
        </p>
      </main>
    </div>
  );
}
