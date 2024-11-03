import { Component } from '@angular/core';
import { PokemonServicesService } from '../../../_services/pokemon.services.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent {
  constructor(public pokemonService: PokemonServicesService) {}
}
