"use client";

import { useEffect, useState } from "react";
import { KilnResponse } from "@/types/kiln";

export function useKiln() {
  const [data, setData] = useState<KilnResponse | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchKiln() {
      try {
        const res = await fetch("/api/kiln", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch kiln data");
        }

        const json: KilnResponse = await res.json();

        if (!cancelled) {
          setData(json);
        }
      } catch (err) {
        console.error(err);
      }
    }

    void fetchKiln();

    const interval = setInterval(() => {
      void fetchKiln();
    }, 30000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return data;
}