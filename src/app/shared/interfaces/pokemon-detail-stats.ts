import { PokemonDetailStatsName } from "./pokemon-detail-stats-name";

export interface PokemonDetailStats {
  base_stat: number;
  effort: number;
  stat: PokemonDetailStatsName;
}
