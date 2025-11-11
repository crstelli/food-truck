import Image from "next/image";

function TextLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="size-11 relative">
        <Image src="/logo.svg" alt="Logo of the app" fill />
      </div>
      <span className="text-orange-500 font-bold text-2xl">FoodTruck</span>
    </div>
  );
}

export { TextLogo };
