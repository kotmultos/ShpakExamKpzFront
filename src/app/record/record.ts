import {Client} from "../client/client";

export interface Record {
  id: number,
  date: string,
  client: Client
}
