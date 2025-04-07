import { SortType } from '@types'
import { useCallback, useMemo, useState } from 'react'

type ReturnTupleType<T> = [T[], SortType, () => void]

function useSort<T extends { id: number }>(items: T[]): ReturnTupleType<T> {
  const [sortBy, setSortBy] = useState<SortType>('ASC')

  const sortedItems = useMemo(() => {
    if (sortBy === 'DESC') {
      return [...items].sort((a, b) => b.id - a.id)
    }
    if (sortBy === 'ASC') {
      return [...items].sort((a, b) => a.id - b.id)
    }
    return items
  }, [items, sortBy])

  const handleSortClick = useCallback(() => {
    setSortBy(prevSortBy => (prevSortBy === 'ASC' ? 'DESC' : 'ASC'))
  }, [])

  return [sortedItems, sortBy, handleSortClick]
}

export default useSort
