import { Component, Input } from '@angular/core';
import { PokemonServicesService } from '../../../_services/pokemon.services.service';
import { Pokemon } from '../../../_model/pokemon';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrl: './input-button.component.scss',
})
export class InputButtonComponent {
  @Input()
  pokemonName: string = '';
  searchedPokemon: Pokemon | undefined;

  constructor(public pokemonService: PokemonServicesService) {}
  searchPokemon() {
    if (this.pokemonName.trim()) {
      this.pokemonService.getPokemonData(this.pokemonName).subscribe({
        next: (data) => {
          this.searchedPokemon = data;
        },
      });
    }
  }
}
