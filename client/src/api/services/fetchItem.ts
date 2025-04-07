import { ItemType } from '@types'

const fetchItem = async (id?: string): Promise<ItemType> => {
  const response = await fetch(`${process.env.API_URL}/items/${id}`)
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`)
  }
  const data = await response.json()
  return data
}

export default fetchItem
