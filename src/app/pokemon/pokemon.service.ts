import { Injectable } from '@angular/core';
import { POKEMON } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

  getPokemonList (): Pokemon[] {
    return POKEMON
  }

  getPokemonById (pokemonId: number): Pokemon|undefined {
    return POKEMON.find(pokemon => pokemon.id === pokemonId);
  }

  getPokemonTypeList (): string[] {
    return [
      'Acier',
      'Combat',
      'Dragon',
      'Electrik',
      'Feu',
      'Plante',
      'Poison',
      'Psy',
      'Spectre',
      'Ténèbres',
      'Vol'
    ];
  }

}