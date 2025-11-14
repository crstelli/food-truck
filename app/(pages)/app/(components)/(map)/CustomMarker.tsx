import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Marker, useMap } from "react-leaflet";

import type { LeafletMouseEvent } from "leaflet";
import type { Place as placeType } from "@/app/(lib)/(types)/Place";

import { PLACE_FOCUS_ZOOM } from "@/app/(lib)/constants";
import { markerIconLight, markerIconDark } from "@/app/(lib)/markerIcon";

import { CustomPopup } from "./CustomPopup";
import { useSidebarContext } from "../(sidebar)/useSidebarContext";
import { useTheme } from "next-themes";

interface Props {
  place: placeType;
}

function CustomMarker({ place }: Props) {
  const { theme } = useTheme();
  const icon = theme === "dark" ? markerIconDark : markerIconLight;

  const map = useMap();
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const { setMenu } = useSidebarContext();
  const { replace } = useRouter();

  function handleOpen(e: LeafletMouseEvent) {
    const params = new URLSearchParams(searchParams);

    params.set("place_id", String(place.id));
    replace(`${pathname}?${params.toString()}`);

    map.flyTo(e.latlng, PLACE_FOCUS_ZOOM);
    setMenu("info");
  }

  function handleClose() {
    const params = new URLSearchParams(searchParams);

    params.delete("place");
    replace(`${pathname}`);
  }

  return (
    <Marker
      eventHandlers={{ click: handleOpen }}
      position={place.location}
      icon={icon}
    >
      <CustomPopup onClose={handleClose} place={place} />
    </Marker>
  );
}

export { CustomMarker };
