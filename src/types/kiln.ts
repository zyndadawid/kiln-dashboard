export interface KilnReading {
    time: string;
    temp: number;
}

export interface KilnResponse {
    current: number;
    history: KilnReading[];
    lastUpdate: string;
}