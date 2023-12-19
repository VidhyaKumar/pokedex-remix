import { Link } from "@remix-run/react"

export function Logo() {
  return (
    <Link to="/">
      <img
        className="object-contain object-center"
        alt="Pokemon"
        src="/images/pokemon.svg"
        width={180}
        height={66}
        decoding="async"
      />
    </Link>
  )
}
