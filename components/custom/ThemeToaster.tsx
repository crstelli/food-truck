"use client";

import { useTheme } from "next-themes";
import { Toaster } from "react-hot-toast";

function ThemeToaster() {
  const { resolvedTheme } = useTheme();

  return (
    <Toaster
      toastOptions={{
        style: {
          background: `${
            resolvedTheme === "dark" && "oklch(27.8% 0.033 256.848)"
          }`,
          color: `${resolvedTheme === "dark" && "oklch(0.985 0.002 247.839)"}`,
          textAlign: "center",
        },
      }}
    />
  );
}

export { ThemeToaster };
