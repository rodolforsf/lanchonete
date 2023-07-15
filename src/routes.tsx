import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import Lanches  from './pages/Main/Lanches'
import Pizzas from './pages/Main/Pizzas'
import Bebidas from './pages/Main/Bebidas'
import Sobremesas from './pages/Main/Sobremesas'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} >
        <Route path='/' element={<Lanches />} />
        <Route path='/pizzas' element={<Pizzas />} />
        <Route path='/bebidas' element={<Bebidas />} />
        <Route path='/sobremesas' element={<Sobremesas />} />
      </Route>
    </Routes>
  )
}
