import { Spinner } from "../components/custom/Spinner";

export default function loading() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Spinner size="size-14" />
    </div>
  );
}
