import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import LanchesPagina  from './pages/Main/Lanches'
import PizzasPagina from './pages/Main/Pizzas'
import BebidasPagina from './pages/Main/Bebidas'
import SobremesasPagina from './pages/Main/Sobremesas'

import MeuCarrinhoPagina from './pages/MyCart'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} >
        <Route path='/' element={<LanchesPagina />} />
        <Route path='/pizzas' element={<PizzasPagina />} />
        <Route path='/bebidas' element={<BebidasPagina />} />
        <Route path='/sobremesas' element={<SobremesasPagina />} />
      </Route>
      <Route path='cart' element={<MeuCarrinhoPagina />}/>
    </Routes>
  )
}
