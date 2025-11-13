"use client";

import { useMapEvents } from "react-leaflet";
import { useSidebarContext } from "../(sidebar)/useSidebarContext";

import type { LatLngTuple, LeafletMouseEvent } from "leaflet";

function ClickHandler() {
  const { setMenu, setPosition } = useSidebarContext();

  function handleClick(e: LeafletMouseEvent) {
    const position: LatLngTuple = [e.latlng.lat, e.latlng.lng];

    setMenu("add");
    setPosition(position);
  }

  useMapEvents({ click: handleClick });

  return null;
}

export { ClickHandler };
