export interface ThingSpeakFeed {
  created_at: string;
  entry_id: number;
  field1: string;
}

export interface ThingSpeakResponse {
  feeds: ThingSpeakFeed[];
}