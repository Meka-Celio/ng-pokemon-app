import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html'
})
export class PokemonDetailComponent implements OnInit {
  
  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService) {}

  ngOnInit(): void {
    const pokemonId : string|null = this.route.snapshot.paramMap.get('id');
    if (pokemonId)
    {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }

  goPokedex () {
    this.router.navigate(['/pokemons']);
  }



}
