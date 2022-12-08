import Details from '@/pages/Details'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details' element={<Details />} />
    </Routes>
  )
}
