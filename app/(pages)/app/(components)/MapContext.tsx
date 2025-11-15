"use client";

import { createContext, RefObject, useContext, useRef } from "react";
import type { Map } from "leaflet";

interface ContextType {
  mapRef: RefObject<Map | null>;
}

const MapContext = createContext<ContextType | null>(null);

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
