"use client";

import dynamic from "next/dynamic";
import { Spinner } from "@/app/(components)/Spinner";

export const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => <Spinner size={"size-14"} className="m-auto" />,
});
