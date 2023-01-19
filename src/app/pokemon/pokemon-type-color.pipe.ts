import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {

    let color: string;
  
    switch (type) {
      case 'Psy':
        color = 'pink darken-1';
        break;
      case 'Combat':
        color = 'red darken-4';
        break;
      case 'Acier':
        color = 'blue-grey lighten-4';
        break;
      case 'Electrik':
        color = 'yellow darken-2';
        break;
      case 'Spectre':
        color = 'deep-purple darken-2';
        break;
      case 'Feu':
        color = 'orange darken-1';
        break;
      case 'Vol':
        color = 'deep-purple accent-1';
        break;
      case 'Plante':
        color = 'green darken-2';
        break;
      case 'Poison':
        color = 'purple darken-2';
        break;
      case 'Ténèbres':
        color = 'brown darken-3';
        break;
      case 'Dragon':
        color = 'deep-purple accent-2';
        break;
      default:
        color = 'white';
        break;
    }
  
    return 'chip ' + color + ' white-text';
  
  }

}