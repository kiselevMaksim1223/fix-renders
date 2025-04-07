import { useState, useMemo } from 'react'

type ReturnTupleType<T> = [T[], number, boolean, () => void]

function usePagination<T>(items: T[], itemsPerPage: number = 20): ReturnTupleType<T> {
  const [page, setPage] = useState<number>(1)

  const paginatedItems = useMemo(() => {
    return items.slice(0, page * itemsPerPage)
  }, [items, page, itemsPerPage])

  const hasMore = paginatedItems.length < items.length

  const fetchNextPage = () => {
    if (hasMore) {
      setPage(prevPage => prevPage + 1)
    }
  }

  return [paginatedItems, page, hasMore, fetchNextPage]
}

export default usePagination
