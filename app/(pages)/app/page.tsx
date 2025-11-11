import { Map } from "./(components)/(map)/index";
import { Navbar } from "./(components)/(navbar)/Navbar";

export default function page() {
  return (
    <div className="max-w-screen h-screen grid grid-cols-[auto_1fr]">
      <Navbar />
      <main className="w-full h-full">
        <Map />
      </main>
    </div>
  );
}
