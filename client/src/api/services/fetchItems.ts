import { ItemType } from '@types'

const fetchItems = async (): Promise<ItemType[]> => {
  const response = await fetch(`${process.env.API_URL}/items`)
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`)
  }
  const data = await response.json()
  return data
}

export default fetchItems
