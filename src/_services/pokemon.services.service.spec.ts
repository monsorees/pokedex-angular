import { TestBed } from '@angular/core/testing';

import { PokemonServicesService } from '../app/pokemon.services.service';

describe('PokemonServicesService', () => {
  let service: PokemonServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
