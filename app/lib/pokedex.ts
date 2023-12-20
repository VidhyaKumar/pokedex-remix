import cachified from "@epic-web/cachified"
import { PokemonClient } from "pokenode-ts"

import { lruCache } from "~/lib/cache"

export async function getPokemons(page: number) {
  return cachified({
    key: `pokemons-${page}`,
    cache: lruCache,
    async getFreshValue() {
      const offset = (page - 1) * 10
      const P = new PokemonClient()
      const pokemonList = await P.listPokemons(offset, 10)
      const pokemons = Promise.all(
        pokemonList.results.map((pokemon) => P.getPokemonByName(pokemon.name))
      )

      return {
        count: pokemonList.count,
        hasPrevPage: !!pokemonList.previous,
        hasNextPage: !!pokemonList.next,
        pokemons,
      }
    },
    ttl: 1000 * 60 * 30,
    staleWhileRevalidate: 1000 * 60 * 60 * 24,
  })
}
