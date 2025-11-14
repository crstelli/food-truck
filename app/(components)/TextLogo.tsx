import Image from "next/image";

function TextLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="size-10 relative">
        <Image src="/logo.svg" alt="Logo of the app" fill />
      </div>
      <span className="text-gray-800 font-bold text-4xl">FoodTruck</span>
    </div>
  );
}

export { TextLogo };
