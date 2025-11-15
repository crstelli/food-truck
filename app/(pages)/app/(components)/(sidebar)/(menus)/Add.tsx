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

import { addItem, AddTruckType } from "@/app/(lib)/(actions)/addTruck";
import { Controller, FieldValues, useForm } from "react-hook-form";

function Add() {
  const { position } = useSidebarContext();
  const { register, handleSubmit, control, reset } = useForm();
  const { closeMenu } = useSidebarContext();

  function submitForm(data: FieldValues) {
    const newData: AddTruckType = {
      name: data.name,
      affordability: data.affordability,

      location: [+data.latitude, +data.longitude],
    };

    addItem(newData);

    reset();
    closeMenu();
  }

  if (position.length === 0)
    return <H2 className="text-center">Click on the map to add a Truck</H2>;

  return (
    <>
      <H1 className="text-3xl text-center">Add a Truck</H1>

      <form
        onSubmit={handleSubmit((data) => submitForm(data))}
        className="flex flex-col mt-4 gap-3"
      >
        <Input
          {...register("name", { required: true })}
          type="text"
          placeholder="Truck Name"
        />
        <Controller
          name="affordability"
          control={control}
          rules={{ required: true }}
          defaultValue={"$"}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
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
          )}
        />

        <Input
          {...register("latitude")}
          placeholder="Latitude"
          className="mt-4"
          defaultValue={position[0]}
          type="number"
          disabled
        />
        <Input
          {...register("longitude")}
          placeholder="Longitude"
          defaultValue={position[1]}
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
