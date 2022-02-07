import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { PokemonListTableComponent } from './pages/pokemon-list/components/pokemon-list-table/pokemon-list-table.component';
import { PokemonService } from "./shared/services/pokemon.service";
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';
import { ReplacePipe } from './pages/pokemon-detail/pipes/replace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonListTableComponent,
    PokemonDetailComponent,
    ReplacePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatTooltipModule,
    MatPaginatorModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
