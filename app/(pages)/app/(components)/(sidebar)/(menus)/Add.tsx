import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useSidebarContext } from "../useSidebarContext";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { H1, H2 } from "@/components/custom/typography";

function Add() {
  const { position } = useSidebarContext();

  if (position.length === 0)
    return <H2 className="text-center">Click on the map to add a Truck</H2>;

  return (
    <>
      <H1 className="text-3xl text-center">Add a Truck</H1>

      <form className="flex flex-col mt-4 gap-3">
        <Input type="text" placeholder="Truck Name" />
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Affordability" />
          </SelectTrigger>
          <SelectContent className="z-401">
            <SelectGroup>
              <SelectLabel>Affordability</SelectLabel>
              <SelectItem value="$">$ - Cheap</SelectItem>
              <SelectItem value="$$">$$ - Medium</SelectItem>
              <SelectItem value="$$$">$$$ - Expensive</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Input
          placeholder="Latitude"
          className="mt-4"
          value={position[0]}
          type="number"
          disabled
        />
        <Input
          placeholder="Longitude"
          value={position[1]}
          type="number"
          disabled
        />

        <Button type="submit" className="mt-4">
          Add
        </Button>
      </form>
    </>
  );
}

export { Add };
