import { memo } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import styles from './FilterAndSort.module.scss'

type Props = {
  filterQuery: string
  handleQueryChange: (filterQuery: string) => void
  sortBy: string
  handleSortClick: () => void
}

const FilterAndSort = ({ filterQuery, handleQueryChange, handleSortClick, sortBy }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Input
        type='text'
        placeholder={'Filter by ID'}
        value={filterQuery}
        onChange={e => handleQueryChange(e.target.value)}
      />
      <Button onClick={handleSortClick}>Sort ({sortBy === 'ASC' ? 'ASC' : 'DESC'})</Button>
    </div>
  )
}

export default memo(FilterAndSort)
