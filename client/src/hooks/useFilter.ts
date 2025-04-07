import { useCallback, useMemo, useState } from 'react'

type ReturnTupleType<T> = [T[], string, (query: string) => void]

function useFilter<T extends { id: number }>(items: T[]): ReturnTupleType<T> {
  const [filterQuery, setFilterQuery] = useState<string>('')

  const filteredItems = useMemo(() => {
    if (!filterQuery) {
      return items
    }
    return items.filter(item =>
      item.id.toString().includes(
        filterQuery
          .toLowerCase()
          .trimStart()
          .trimEnd()
          .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      )
    )
  }, [items, filterQuery])

  const handleFilterChange = useCallback((query: string) => {
    setFilterQuery(query)
  }, [])

  return [filteredItems, filterQuery, handleFilterChange]
}

export default useFilter
