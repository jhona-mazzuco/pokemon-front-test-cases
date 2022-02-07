import { PokemonDetailSprites } from "./pokemon-detail-sprites";
import { PokemonDetailStats } from "./pokemon-detail-stats";

export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: PokemonDetailSprites;
  stats: PokemonDetailStats[];
}
