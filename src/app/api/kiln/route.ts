import { NextResponse } from "next/server";
import { getKilnData } from "@/lib/kilnRepository";

export async function GET() {

    try {

        const data = await getKilnData();

        return NextResponse.json(data);

    } catch (err) {

        console.error(err);

        return NextResponse.json(
            { error: "Failed to fetch kiln data" },
            { status: 500 }
        );
    }

}