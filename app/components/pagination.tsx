import { Link } from "@remix-run/react"

import { Button } from "~/components/ui/button"

interface PaginationProps {
  page: number
  hasPrevPage: boolean
  hasNextPage: boolean
}

export function Pagination({
  page,
  hasPrevPage,
  hasNextPage,
}: PaginationProps) {
  const prevPage = page === 1 ? 1 : page - 1
  const nextPage = page + 1

  return (
    <div className="flex flex-row mx-auto gap-x-4">
      <Button variant="secondary" className="min-w-[105px]" asChild>
        <Link
          to={prevPage === 1 ? "/" : `/?page=${prevPage}`}
          prefetch="render"
          aria-disabled={!hasPrevPage}
          className="aria-[disabled='true']:pointer-events-none aria-[disabled='true']:opacity-50"
        >
          Previous
        </Link>
      </Button>
      <Button className="min-w-[105px]" asChild>
        <Link
          to={`/?page=${nextPage}`}
          prefetch="render"
          aria-disabled={!hasNextPage}
          className="aria-[disabled='true']:pointer-events-none aria-[disabled='true']:opacity-50"
        >
          Next
        </Link>
      </Button>
    </div>
  )
}
