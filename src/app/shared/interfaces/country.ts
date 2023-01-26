import { Continent } from "./continent";

export interface Country {
  name: string,
  capital: string,
  currency: string,
  emoji: string,
  phone: string,
  continent: Continent
}
