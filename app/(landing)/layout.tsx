import { Navbar } from "@/components/custom/(navbar)/Navbar";

interface Props {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <div className="h-screen w-screen bg-orange-50 flex flex-col p-10">
      <Navbar />
      {children}
    </div>
  );
}
