import { useCallback, useMemo, useState } from 'react'

import styles from './ListPage.module.scss'
import useFetchData from '@api/hooks/useFetchData'
import useFilter from '@hooks/useFilter'
import useSort from '@hooks/useSort'
import usePagination from '@hooks/usePagination'
import { ItemType } from '@types'
import { SubTitle } from '@components/SubTitle'
import { FilterAndSort } from '@components/FilterAndSort'
import { List } from '@components/List'
import { ListItem } from '@components/ListItem'
import fetchItems from '@api/services/fetchItems'

const PER_PAGE = 10

function ListPage() {
  const { data: allData, error, loading } = useFetchData<ItemType[]>(fetchItems)

  const [filteredItems, filterQuery, handleFilterChange] = useFilter(allData || [])

  const [sortedItems, sortBy, handleSortClick] = useSort(filteredItems)

  const [paginatedItems, page, hasMore, fetchNextPage] = usePagination(sortedItems, PER_PAGE)

  const [activeItemId, setActiveItemId] = useState<number | null>(null)

  const activeItemText = activeItemId ?? 'Empty'

  const handleItemClick = useCallback((id: number) => {
    setActiveItemId(prevId => (prevId === id ? null : id))
  }, [])

  return (
    <div className={styles['list-wrapper']}>
      <div className={styles['list-header']}>
        <h1 className={styles['list-title']}>Items List</h1>
        <SubTitle>{activeItemText}</SubTitle>
        <FilterAndSort
          filterQuery={filterQuery}
          handleQueryChange={handleFilterChange}
          sortBy={sortBy}
          handleSortClick={handleSortClick}
        />
      </div>
      <List
        items={paginatedItems}
        renderItem={item => (
          <ListItem
            key={item.id}
            isActive={activeItemId === item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            onClick={handleItemClick}
          />
        )}
        listHeader={
          <>
            {loading && <span>Loading...</span>}
            {error && <span>Error: {error}</span>}
          </>
        }
        listFooter={<>{hasMore && <button onClick={fetchNextPage}>Page: {page}. Load More</button>}</>}
      />
    </div>
  )
}

export default ListPage
