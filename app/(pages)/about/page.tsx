import { Navbar } from "@/app/(components)/(navbar)/Navbar";

export default function page() {
  return (
    <div className="h-screen w-screen bg-red-100/75 flex flex-col p-10">
      <Navbar />
      <main className="w-[90%] max-w-[1200px] mx-auto flex items-center justify-between my-auto"></main>
    </div>
  );
}
