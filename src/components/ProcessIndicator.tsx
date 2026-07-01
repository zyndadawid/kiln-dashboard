interface ProcessIndicatorProps {
  status: "IDLE" | "FIRING" | "COOLING" | "UNKNOWN";
}

export default function ProcessIndicator({
  status,
}: ProcessIndicatorProps) {
  const config = {
    IDLE: {
      label: "IDLE",
      color: "text-zinc-400",
      dot: "bg-zinc-500",
    },
    FIRING: {
      label: "FIRING",
      color: "text-orange-400",
      dot: "bg-orange-500 animate-pulse",
    },
    COOLING: {
      label: "COOLING",
      color: "text-blue-400",
      dot: "bg-blue-500",
    },
    UNKNOWN: {
      label: "UNKNOWN",
      color: "text-zinc-600",
      dot: "bg-zinc-600",
    },
  }[status];

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="text-xs uppercase tracking-widest text-zinc-500">
        Process
      </p>

      <div className="mt-3 flex items-center gap-3">
        <span className={`h-3 w-3 rounded-full ${config.dot}`} />
        <span className={`text-3xl font-semibold ${config.color}`}>
          {config.label}
        </span>
      </div>
    </div>
  );
}