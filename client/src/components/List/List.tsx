import { ReactNode } from 'react'
import styles from './List.module.scss'

type Props<T> = {
  items: T[]
  renderItem: (item: T) => ReactNode
  listHeader?: ReactNode
  listFooter?: ReactNode
}

const List = <T,>({ items, renderItem, listHeader, listFooter }: Props<T>) => {
  return (
    <div className={styles['list-container']}>
      {listHeader && listHeader}
      <div className={styles.list}>
        {items.map(item => renderItem(item))}
        {listFooter && listFooter}
      </div>
    </div>
  )
}

export default List
