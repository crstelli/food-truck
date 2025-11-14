"use client";

import { createContext, useContext, useRef } from "react";
import type { Map } from "leaflet";

const MapContext = createContext(null);

interface Props {
  children: React.ReactNode;
}

function MapProvider({ children }: Props) {
  const mapRef = useRef<Map | null>(null);
  return (
    <MapContext.Provider value={{ mapRef }}>{children}</MapContext.Provider>
  );
}

function useMapContext() {
  const context = useContext(MapContext);

  if (!context) throw new Error("Map Provider use outside his context.");
  return context;
}

export { MapProvider, useMapContext };
