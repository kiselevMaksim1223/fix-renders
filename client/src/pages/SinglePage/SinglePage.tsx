import { Link, useParams } from 'react-router-dom'

import styles from './SinglePage.module.scss'
import useFetchData from '@api/hooks/useFetchData'
import { ItemType } from '@types'
import fetchItem from '@api/services/fetchItem'

function SinglePage() {
  const { id } = useParams()

  const { data: item, error, loading } = useFetchData<ItemType>(() => fetchItem(id))

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className={styles.detail}>
      <Link to={'/'}>Go Back</Link>
      <h2>Item Details</h2>
      <p>ID: {item?.id}</p>
      <p>Name: {item?.name}</p>
      <p>Description: {item?.description}</p>
    </div>
  )
}

export default SinglePage
