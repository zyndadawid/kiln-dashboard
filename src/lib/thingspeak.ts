import { ThingSpeakResponse } from "@/types/thingspeak";

const CHANNEL_ID = process.env.NEXT_PUBLIC_THINGSPEAK_CHANNEL_ID!;
const READ_KEY = process.env.NEXT_PUBLIC_THINGSPEAK_READ_KEY!;

export async function getLatestTemp() {
  const res = await fetch(
    `https://api.thingspeak.com/channels/${CHANNEL_ID}/fields/1/last.json?api_key=${READ_KEY}`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch latest temp");

  const data = await res.json();

  return {
    temp: parseFloat(data.field1),
    time: data.created_at,
  };
}

export async function getHistory(results = 100) {
  const res = await fetch(
    `https://api.thingspeak.com/channels/${CHANNEL_ID}/fields/1.json?api_key=${READ_KEY}&results=${results}`,
    { cache: "no-store" }
  );

  const data: ThingSpeakResponse  = await res.json();

  return data.feeds.map((f) => ({
    temp: parseFloat(f.field1),
    time: f.created_at,
  }));
}