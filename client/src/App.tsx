import { ListPage } from '@pages/ListPage'
import { SinglePage } from '@pages/SinglePage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<ListPage />} />
      <Route path='/:id' element={<SinglePage />} />
    </Routes>
  )
}

export default App
