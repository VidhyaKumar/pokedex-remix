import { Suspense } from "react"
import { defer, LoaderFunctionArgs } from "@remix-run/node"
import { Await, useLoaderData, useNavigation } from "@remix-run/react"
import { PokemonClient } from "pokenode-ts"

import { CardSkeleton } from "~/components/card-skeleton"
import { Pokemon } from "~/components/pokemon"

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url)
  const query = url.searchParams.get("q") || ""
  const P = new PokemonClient()
  const pokemonList = await P.listPokemons(0, 1300)
  const filteredPokemons = pokemonList.results.filter((pokemon) =>
    pokemon.name.includes(query.toLowerCase())
  )
  const pokemons = Promise.all(
    filteredPokemons.map((pokemon) => P.getPokemonByName(pokemon.name))
  )

  return defer({
    pokemons,
  })
}

export default function Search() {
  const { pokemons } = useLoaderData<typeof loader>()
  const navigation = useNavigation()

  if (navigation.state !== "idle") {
    return <CardSkeleton />
  }

  return (
    <Suspense fallback={<CardSkeleton />}>
      <Await resolve={pokemons}>
        {(pokemons) => {
          if (pokemons.length === 0) {
            return (
              <p className="col-span-12 text-xl text-center text-slate-500">
                No pokemons found
              </p>
            )
          } else {
            return (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {pokemons.map((pokemon) => (
                  <Pokemon pokemon={pokemon} key={pokemon.id} />
                ))}
              </div>
            )
          }
        }}
      </Await>
    </Suspense>
  )
}
