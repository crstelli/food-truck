"use client";

import { Button } from "./(components)/Button";

interface Props {
  error: Error;
  reset: () => void;
}

export default function error({ error, reset }: Props) {
  return (
    <div className="m-auto flex flex-col items-center gap-10">
      <h1 className="text-6xl text-orange-500 font-bold">
        Something went wrong!
      </h1>
      <h2 className="bg-orange-100 text-xl px-4 py-2 rounded-md text-gray-800">
        {error.message}
      </h2>
      <Button onClick={reset}>Reload</Button>
    </div>
  );
}
