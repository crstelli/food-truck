import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useSidebarContext } from "../useSidebarContext";

function Add() {
  const { position } = useSidebarContext();

  return (
    <section>
      <h1 className="text-3xl text-center">Add a place</h1>

      <form className="flex flex-col mt-4 gap-1">
        <label className="text-lg">Place name</label>
        <Input type="text" />

        <label className="text-lg mt-3">Position: Latitude</label>
        <Input value={position[0]} type="number" disabled />

        <label className="text-lg mt-3">Position: Longitude</label>
        <Input value={position[1]} type="number" disabled />

        <label className="text-lg mt-3">Affordability</label>
        <Input type="text" />

        <Button type="submit" className="mt-2">
          Add
        </Button>
      </form>
    </section>
  );
}

export { Add };
