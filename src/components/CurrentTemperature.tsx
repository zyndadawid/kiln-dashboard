interface CurrentTemperatureProps {
  temperature: number;
  lastUpdate?: string;
}

export default function CurrentTemperature({
  temperature,
  lastUpdate,
}: CurrentTemperatureProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-lg">
      <p className="text-sm uppercase tracking-widest text-zinc-500">
        Current Temperature
      </p>

      <div className="mt-4 flex items-end gap-2">
        <span className="text-7xl font-bold text-orange-400">
          {temperature.toFixed(1)}
        </span>

        <span className="mb-2 text-3xl text-zinc-400">
          °C
        </span>
      </div>

      {lastUpdate && (
        <p className="mt-6 text-sm text-zinc-500">
          Last update:{" "}
          {new Date(lastUpdate).toLocaleTimeString()}
        </p>
      )}
    </div>
  );
}