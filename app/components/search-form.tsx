import { Form, useSearchParams } from "@remix-run/react"

import { Input } from "~/components/ui/input"

export function SearchForm() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q") || ""

  return (
    <Form method="get" action="/search">
      <Input
        key={query}
        type="text"
        name="q"
        defaultValue={query}
        placeholder="Search for pokemons..."
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
      />
    </Form>
  )
}
