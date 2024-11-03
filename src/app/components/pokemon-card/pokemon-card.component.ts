import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../_model/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
})
export class PokemonCardComponent {
  @Input()
  public pokemon!: Pokemon;

  public LeadingZero(str: string | number, size: number = 3): string {
    let s = String(str);
    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }
}
