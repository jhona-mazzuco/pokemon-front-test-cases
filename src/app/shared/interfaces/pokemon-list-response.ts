import { PokemonListItem } from "./pokemon-list-item";

export interface PokemonListResponse {
  count: number;
  results: PokemonListItem[];
}
