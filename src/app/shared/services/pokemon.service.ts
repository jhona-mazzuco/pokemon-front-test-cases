import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { ITEMS_PER_PAGE } from "../constants/items-per-page";
import { PokemonListResponse } from "../interfaces/pokemon-list-response";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {
  }

  findAll(page: number = 0): Observable<PokemonListResponse> {
    const itemsPerPage = ITEMS_PER_PAGE;

    let params = new HttpParams();
    params = params.append('offset', page * itemsPerPage);
    params = params.append('limit', itemsPerPage);

    return this.http.get<PokemonListResponse>(`${ environment.API_URL }/pokemon`, { params });
  }

  findById(id: string): Observable<any> {
    return this.http.get(`${environment.API_URL}/pokemon/${id}`);
  }
}
