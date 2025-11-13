import { Button } from "@/app/(components)/Button";

function Add() {
  return (
    <section>
      <form className="flex flex-col">
        <h1 className="text-2xl font-bold text-center">Add a place</h1>

        <label>Place name</label>
        <input className="border border-orange-500" type="text" />

        <label>Position: Lat</label>
        <input className="border border-orange-500" type="number" />

        <label>Position: Lon</label>
        <input className="border border-orange-500" type="number" />

        <label>Affordability</label>
        <input className="border border-orange-500" type="text" />

        <Button type="submit" className="mt-2">
          Add
        </Button>
      </form>
    </section>
  );
}

export { Add };
