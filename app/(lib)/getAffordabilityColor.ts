import type { Affordability } from "./(types)/Affordability";

export function getAffordabilityColor(value: Affordability) {
  if (value === "$") return "text-green-500";
  if (value === "$$") return "text-orange-500";
  if (value === "$$$") return "text-destructive";
}
