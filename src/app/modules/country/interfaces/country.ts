import { Continent } from "../../continent/interfaces/continent";

export interface Country {
  name: string,
  capital: string,
  currency: string,
  emoji: string,
  phone: string,
  continent: Continent
}
