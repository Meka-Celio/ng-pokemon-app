import { Component } from '@angular/core';

@Component({
  selector: 'app-page-no-found',
  template: `
  <div class="container center">
    <img src="https://www.pokemontrash.com/pokedex/images/sugimori/487.png" alt="img-404">
    <h2 class="red-text">Cette page n'existe pas !</h2>
    <a routerLink="/pokemons" class="pink darken-2 white-text waves-effect waves-light btn-small">Retour</a>
  </div>
  `,
  styles: [
  ]
})
export class PageNoFoundComponent {}
