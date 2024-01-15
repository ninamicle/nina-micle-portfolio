import { useState, useEffect } from "react";

export function useViewport() {
  const [width, setWidth] = useState(
    () => (typeof window !== "undefined" && window.innerWidth) || 0
  );

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return width;
}
