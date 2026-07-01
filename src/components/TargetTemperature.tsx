interface TargetTemperatureProps {
  target: number;
  isActive?: boolean;
  label?: string;
}

export default function TargetTemperature({
  target,
  isActive = false,
  label = "Set Temperature",
}: TargetTemperatureProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="text-xs uppercase tracking-widest text-zinc-500">
        {label}
      </p>

      <div className="mt-3 flex items-end gap-2">
        <span
          className={`text-5xl font-semibold ${
            isActive ? "text-orange-400" : "text-zinc-400"
          }`}
        >
          {target}
        </span>

        <span className="mb-1 text-2xl text-zinc-500">°C</span>
      </div>

      <div className="mt-4 text-xs text-zinc-600">
        {isActive ? "Following firing curve" : "Idle / no firing detected"}
      </div>
    </div>
  );
}