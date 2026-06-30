import { ThingSpeakResponse } from "@/types/thingspeak";
import { KilnResponse } from "@/types/kiln";

const CHANNEL = process.env.THINGSPEAK_CHANNEL_ID!;
const KEY = process.env.THINGSPEAK_READ_KEY!;

export async function getKilnData(): Promise<KilnResponse> {

    const res = await fetch(
        `https://api.thingspeak.com/channels/${CHANNEL}/fields/1.json?api_key=${KEY}&results=200`,
        {
            cache: "no-store"
        }
    );

    if (!res.ok)
        throw new Error("ThingSpeak request failed");

    const data: ThingSpeakResponse = await res.json();

    const history = data.feeds
        .filter(f => f.field1 !== null)
        .map(f => ({
            temp: Number(f.field1),
            time: f.created_at
        }));

    return {
        current: history.at(-1)?.temp ?? 0,
        lastUpdate: history.at(-1)?.time ?? "",
        history
    };
}