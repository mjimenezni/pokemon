import { Component, OnInit } from '@angular/core';
import { PokemonList } from 'src/app/models/pokemon.interface';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {
  pokemonList: PokemonList = { count: 0, results: [{ name: '', url: '' }] };
  displayedColumns: string[] = ['name', 'url'];
  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.pokemonsService
      .getAllPokemons()
      .subscribe((pokemonList) => (this.pokemonList = pokemonList));
  }
}
