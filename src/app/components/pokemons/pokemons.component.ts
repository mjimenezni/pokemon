import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PokemonList } from 'src/app/models/pokemon.interface';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0.6,
        })
      ),
      transition('void<=>*', animate(1800)),
    ]),
  ],
})
export class PokemonsComponent implements OnInit {
  pokemonList: PokemonList = { count: 0, results: [{ name: '', url: '' }] };
  displayedColumns: string[] = ['name', 'url'];
  isLoading: boolean = true;

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.pokemonsService.getAllPokemons().subscribe(
      (pokemonList) => {
        this.isLoading = false;
        this.pokemonList = pokemonList;
      },
      (error) => (this.isLoading = true)
    );
  }
}
