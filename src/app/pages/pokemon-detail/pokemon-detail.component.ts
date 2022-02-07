import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PokemonDetail } from "../../shared/interfaces/pokemon-detail";
import { PokemonService } from "../../shared/services/pokemon.service";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  loading!: boolean;
  data!: PokemonDetail;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: PokemonService) {
  }

  get image(): string {
    let hasArtwork = !!this.data.sprites.other['official-artwork'];
    if (hasArtwork) {
      return this.data.sprites.other['official-artwork'].front_default;
    }

    return this.data.sprites.front_default;
  }

  ngOnInit(): void {
    this.fetchPokemonDetail();
  }

  fetchPokemonDetail(): void {
    this.loading = true;
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.service.findById(id).subscribe({
      next: response => this.data = response
    }).add(() => this.loading = false)
  }

  goBack() {
    this.router.navigateByUrl('/');
  }
}
