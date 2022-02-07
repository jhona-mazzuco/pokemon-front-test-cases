import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { GENERIC_ERROR_MESSAGE } from "../../shared/constants/generic-error-message";
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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: PokemonService, private snackbar: MatSnackBar) {
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
      next: response => this.data = response,
      error: () => this.onFindByIdError()
    }).add(() => this.loading = false)
  }

  goBack() {
    this.router.navigateByUrl('/');
  }

  onFindByIdError() {
    this.snackbar.open(GENERIC_ERROR_MESSAGE, undefined, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
