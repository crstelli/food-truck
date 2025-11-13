"use client";

import { useMapEvents } from "react-leaflet";
import { useSidebarContext } from "../(sidebar)/useSidebarContext";

function ClickHandler() {
  const { setMenu } = useSidebarContext();

  function handleClick(e) {
    setMenu("add");
  }

  useMapEvents({ click: handleClick });

  return null;
}

export { ClickHandler };
