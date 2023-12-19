import { Suspense } from "react"
import { defer, LoaderFunctionArgs, type MetaFunction } from "@remix-run/node"
import { Await, useLoaderData } from "@remix-run/react"
import { PokemonClient } from "pokenode-ts"

import { CardSkeleton } from "~/components/card-skeleton"
import { Pagination } from "~/components/pagination"
import { Pokemon } from "~/components/pokemon"

export const meta: MetaFunction = () => {
  return [
    { title: "VK Pokedex" },
    { name: "description", content: "Pokedex built with Remix v2" },
  ]
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url)
  const pageParam = url.searchParams.get("page")
  const page = pageParam ? parseInt(pageParam) : 1
  const offset = (page - 1) * 10
  const P = new PokemonClient()
  const pokemonList = await P.listPokemons(offset, 10)
  const pokemons = Promise.all(
    pokemonList.results.map((pokemon) => P.getPokemonByName(pokemon.name))
  )

  return defer({
    page,
    hasPrevPage: !!pokemonList.previous,
    hasNextPage: !!pokemonList.next,
    pokemons,
  })
}

export default function Index() {
  const { page, pokemons, hasPrevPage, hasNextPage } =
    useLoaderData<typeof loader>()

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
              <>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {pokemons.map((pokemon) => (
                    <Pokemon key={pokemon.id} pokemon={pokemon} />
                  ))}
                </div>
                <div className="mt-10 self-center">
                  <Pagination
                    page={page}
                    hasPrevPage={hasPrevPage}
                    hasNextPage={hasNextPage}
                  />
                </div>
              </>
            )
          }
        }}
      </Await>
    </Suspense>
  )
}
