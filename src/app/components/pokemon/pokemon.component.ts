import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemon!: Pokemon;
  panelOpenState = false;

  constructor(
    private pokemonsService: PokemonsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    //console.log('Identifier --> ', identifier);

    this.pokemonsService.getPokemonById(identifier!).subscribe((pokemon) => {
      /*if (!pokemon) {
        return this.router.navigateByUrl('/');
      }*/

      this.pokemon = pokemon;
      this.pokemon.download_url =
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' +
        pokemon.id +
        '.png';
    });
  }
}
