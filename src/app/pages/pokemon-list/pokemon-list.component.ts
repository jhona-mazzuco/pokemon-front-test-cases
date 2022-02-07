import { Component, OnInit } from '@angular/core';
import { PageEvent } from "@angular/material/paginator";
import { PokemonListItem } from "../../shared/interfaces/pokemon-list-item";
import { PokemonListResponse } from "../../shared/interfaces/pokemon-list-response";
import { PokemonService } from "../../shared/services/pokemon.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  loading!: boolean;
  page = 0;
  totalItems!: number;
  data!: PokemonListItem[];

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.fetchPokemons();
  }

  fetchPokemons(page?: number): void {
    this.loading = true;
    this.service.findAll(page).subscribe({
      next: (response) => this.onFetchSuccess(response)
    }).add(() => this.loading = false)
  }

  onFetchSuccess({ results, count }: PokemonListResponse): void {
    this.totalItems = count;
    this.data = results;
  }

  changePage({ pageIndex }: PageEvent) {
    this.service.findAll(pageIndex).subscribe({
      next: (response) => this.data = response.results
    });
  }
}
