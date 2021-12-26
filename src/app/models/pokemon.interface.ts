export interface PokemonList {
  //id: number;
  count: number;
  results: [
    {
      name: string;
      url: string;
    }
  ];
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  order: number;
  weight: number;
  download_url: string;
}
