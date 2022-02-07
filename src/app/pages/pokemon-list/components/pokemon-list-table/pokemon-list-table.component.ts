import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { PokemonListItem } from "../../../../shared/interfaces/pokemon-list-item";
import { POKEMON_LIST_TABLE_COLUMNS } from "./constants/pokemon-list-table-columns";

@Component({
  selector: 'app-pokemon-list-table',
  templateUrl: './pokemon-list-table.component.html',
  styleUrls: ['./pokemon-list-table.component.scss']
})
export class PokemonListTableComponent {
  @Input() data!: PokemonListItem[];
  displayedColumns = POKEMON_LIST_TABLE_COLUMNS;

  constructor(private router: Router) {
  }

  goToDetails(url: string): void {
    const splitUrl = url.split('/');
    const id = splitUrl[splitUrl.length - 2];
    this.router.navigateByUrl(`/pokemon/${id}`)
  }
}
