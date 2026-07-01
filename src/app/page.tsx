"use client";

import { useKiln } from "@/hooks/useKiln";
import CurrentTemperature from "@/components/CurrentTemperature";
import ProcessIndicator from "@/components/ProcessIndicator";
import TargetTemperature from "@/components/TargetTemperature";

export default function Home() {

    const kiln = useKiln();

    if (!kiln)
        return <div>Loading...</div>;

    return (
         <main className="min-h-screen bg-zinc-950 p-8 text-white">
    <CurrentTemperature
      temperature={kiln.current}
      lastUpdate={kiln.lastUpdate}
    />
    <ProcessIndicator status={"IDLE"}/>
    <TargetTemperature target={1050} />

  </main>
    );
}