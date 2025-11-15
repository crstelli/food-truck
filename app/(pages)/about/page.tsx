import type { Metadata } from "next";
import { Navbar } from "@/components/custom/(navbar)/Navbar";
import Image from "next/image";
import { H1, P } from "@/components/custom/typography";

export const metadata: Metadata = {
  title: "About",
};

export default function page() {
  return (
    <div className="flex flex-col p-10">
      <Navbar />
      <main className="w-[90%] max-lg:max-w-[500px] max-w-[1200px] text-center items-center lg:gap-y-15 gap-x-20 mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-y-5 py-10 lg:py-20">
        <H1 className="lg:text-left text-4xl lg:text-5xl col-span-2 font-bold first-letter:text-primary">
          About
        </H1>
        <P className="text-lg lg:text-left max-lg:mt-4">
          Benvenuto su FoodTruck, l&apos;app che ti aiuta a scoprire i migliori
          camioncini di panini nella tua zona.
          <br />
          <br />
          Consulta le recensioni degli altri utenti, trova i posti più vicini
          sulla mappa e raggiungili facilmente con Google Maps.
          <br />
          <br />
          Tutto quello che ti serve per un&apos;esperienza gustosa è a portata
          di click.
        </P>
        <div className="relative aspect-video max-lg:mt-10 justify-self-end w-[90%] max-w-[500px] overflow-hidden rounded-md border shadow-2xl">
          <Image src="/about-image.jpg" alt="Image of a foodtruck" fill />
        </div>
        <div className="relative mt-10 aspect-video w-[90%] max-w-[500px] overflow-hidden rounded-md border shadow-2xl">
          <Image src="/about-image-2.jpg" alt="Image of a foodtruck" fill />
        </div>
        <P className="text-lg max-lg:mt-10 lg:text-right">
          Con FoodTruck non solo trovi i camioncini più vicini, ma puoi anche
          leggere le recensioni di chi li ha già provati, confrontare le
          valutazioni e scegliere il panino perfetto per te.
          <br />
          <br />
          Grazie all&apos;integrazione con Google Maps, raggiungerli è semplice
          e veloce, senza perdere tempo a cercare strade o parcheggi.
          <br />
          <br />
          Sia che tu sia in pausa pranzo, in giro con gli amici o alla ricerca
          di un&apos;esperienza gastronomica diversa.
        </P>
      </main>
    </div>
  );
}
