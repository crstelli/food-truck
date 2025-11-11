"use client";
import dynamic from "next/dynamic";

export const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => <p>LOADING SPINNER</p>,
});
