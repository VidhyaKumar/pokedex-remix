import { Pokemon as PokemonResource } from "pokenode-ts"

import { cn } from "~/lib/utils"

interface PokemonProps {
  pokemon: PokemonResource
}

export function Pokemon({ pokemon }: PokemonProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center border-4 rounded-lg justify-center aspect-[10/12]",
        pokemon.types[0].type.name === "grass" && "border-green-400",
        pokemon.types[0].type.name === "fire" && "border-amber-400",
        pokemon.types[0].type.name === "water" && "border-blue-400",
        pokemon.types[0].type.name === "electric" && "border-yellow-400",
        pokemon.types[0].type.name === "poison" && "border-purple-400",
        pokemon.types[0].type.name === "bug" && "border-teal-400",
        pokemon.types[0].type.name === "flying" && "border-sky-400",
        pokemon.types[0].type.name === "normal" && "border-gray-400",
        pokemon.types[0].type.name === "ground" && "border-orange-400",
        pokemon.types[0].type.name === "fairy" && "border-pink-400",
        pokemon.types[0].type.name === "fighting" && "border-red-400",
        pokemon.types[0].type.name === "psychic" && "border-pink-400",
        pokemon.types[0].type.name === "rock" && "border-stone-400",
        pokemon.types[0].type.name === "steel" && "border-zinc-400",
        pokemon.types[0].type.name === "ice" && "border-cyan-400",
        pokemon.types[0].type.name === "ghost" && "border-purple-400",
        pokemon.types[0].type.name === "dragon" && "border-purple-400",
        pokemon.types[0].type.name === "dark" && "border-gray-400",
        pokemon.types[0].type.name === "shadow" && "border-gray-400",
        pokemon.types[0].type.name === "unknown" && "border-white"
      )}
    >
      <div className="flex items-center justify-center flex-1 w-full p-4">
        <img
          className="object-contain object-center"
          alt={pokemon.name}
          src={
            pokemon.sprites.other?.["official-artwork"].front_default ||
            "/images/pokeball.svg"
          }
          width={120}
          height={120}
          loading="lazy"
        />
      </div>
      <div
        className={cn(
          "w-full pt-4 pb-3 px-4",
          pokemon.types[0].type.name === "grass" && "bg-green-400",
          pokemon.types[0].type.name === "fire" && "bg-amber-400",
          pokemon.types[0].type.name === "water" && "bg-blue-400",
          pokemon.types[0].type.name === "electric" && "bg-yellow-400",
          pokemon.types[0].type.name === "poison" && "bg-purple-400",
          pokemon.types[0].type.name === "bug" && "bg-teal-400",
          pokemon.types[0].type.name === "flying" && "bg-sky-400",
          pokemon.types[0].type.name === "normal" && "bg-gray-400",
          pokemon.types[0].type.name === "ground" && "bg-orange-400",
          pokemon.types[0].type.name === "fairy" && "bg-pink-400",
          pokemon.types[0].type.name === "fighting" && "bg-red-400",
          pokemon.types[0].type.name === "psychic" && "bg-pink-400",
          pokemon.types[0].type.name === "rock" && "bg-stone-400",
          pokemon.types[0].type.name === "steel" && "bg-zinc-400",
          pokemon.types[0].type.name === "ice" && "bg-cyan-400",
          pokemon.types[0].type.name === "ghost" && "bg-purple-400",
          pokemon.types[0].type.name === "dragon" && "bg-purple-400",
          pokemon.types[0].type.name === "dark" && "bg-gray-400",
          pokemon.types[0].type.name === "shadow" && "bg-gray-400",
          pokemon.types[0].type.name === "unknown" && "bg-white"
        )}
      >
        <h1 className="text-xl text-center capitalize truncate text-slate-900">
          {pokemon.name}
        </h1>
      </div>
    </div>
  )
}
