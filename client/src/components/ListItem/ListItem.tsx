import { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from './ListItem.module.scss'
import Button from '../Button/Button'

type Props = {
  id: number
  name: string
  description: string
  onClick: (id: number) => void
  isActive: boolean
}

const ListItem = ({ id, name, description, onClick, isActive }: Props) => {
  return (
    <li className={isActive ? `${styles['list-item']} ${styles['active']}` : styles['list-item']}>
      <Link to={`/${id}`}>
        <div className={styles['list-item-actions']}>
          <div>
            ID: <b>{id}</b>
          </div>
          <Button
            onClick={e => {
              e.preventDefault()
              onClick(id)
            }}
            disabled={isActive}
          >
            {isActive ? 'Active' : 'Set Active'}
          </Button>
        </div>
        <div>{name}</div>
        <div className={styles['list-item__description']}>{description}</div>
      </Link>
    </li>
  )
}

export default memo(ListItem)
