"use client";

import { useKiln } from "@/hooks/useKiln";

export default function Home() {

    const kiln = useKiln();

    if (!kiln)
        return <div>Loading...</div>;

    return (
        <>
            {kiln.current}
        </>
    );
}