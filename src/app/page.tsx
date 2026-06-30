"use client";

import { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { getLatestTemp, getHistory } from "@/lib/thingspeak";

const TARGET_TEMP = 1000;

export default function Home() {
  const [current, setCurrent] = useState<number | null>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [lastUpdate, setLastUpdate] = useState<string>("");

  async function load() {
    try {
      const latest = await getLatestTemp();
      const hist = await getHistory(200);

      setCurrent(latest.temp);
      setLastUpdate(latest.time);
      setHistory(hist);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    load();
    const interval = setInterval(load, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">🔥 Kiln Dashboard</h1>

      {/* CURRENT TEMP */}
      <div className="text-center mb-10">
        <div className="text-sm text-zinc-400">Current Temperature</div>
        <div className="text-6xl font-bold text-orange-400">
          {current !== null ? `${current.toFixed(1)}°C` : "--"}
        </div>

        <div className="text-sm text-zinc-500 mt-2">
          Target: {TARGET_TEMP}°C
        </div>

        <div className="text-xs text-zinc-600 mt-1">
          Last update: {lastUpdate}
        </div>
      </div>

      {/* CHART */}
      <Plot
        data={[
          {
            x: history.map((h) => h.time),
            y: history.map((h) => h.temp),
            type: "scatter",
            mode: "lines",
            line: { color: "#f97316" },
          },
          {
            x: history.map((h) => h.time),
            y: history.map(() => TARGET_TEMP),
            type: "scatter",
            mode: "lines",
            line: { dash: "dash", color: "red" },
          },
        ]}
        layout={{
          paper_bgcolor: "transparent",
          plot_bgcolor: "transparent",
          font: { color: "#fff" },
          margin: { t: 20, r: 20, b: 40, l: 50 },
        }}
        style={{ width: "100%", height: "500px" }}
      />
    </div>
  );
}