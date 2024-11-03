import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeMap } from 'rxjs';
import { Pokemon } from '../_model/pokemon';
@Injectable({
  providedIn: 'root',
})
export class PokemonServicesService {
  public pokemons: Pokemon[] = [];

  private allPokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=000&limit=10000';
  constructor(private httpClient: HttpClient) {
    this.loadAllPokemons(this.allPokemonsUrl);
  }
  loadAllPokemons(api: any) {
    this.httpClient
      .get<any>(api)
      .pipe(
        map((value) => value.results),
        map((pokemon) => {
          return from(pokemon).pipe(mergeMap((v: any) => this.httpClient.get(v.url)));
        }),
        mergeMap((value) => value),
      )
      .subscribe((result: any) => {
        this.intPokemon(result);
      });
  }

  intPokemon(result: any) {
    const pokemon: Pokemon = {
      image: result.sprites.front_default,
      number: result.id,
      name: result.name,
      types: result.types.map((t: any) => t.type.name),
    };
    this.pokemons[result.id] = pokemon;
  }

  getPokemonData(name: string) {
    //console.log(name);
    const url = this.httpClient.get<any>(`${this.allPokemonsUrl}${name}`);
    this.loadAllPokemons(url);
    console.log(url);
    return url;
  }
}
