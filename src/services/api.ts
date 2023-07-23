import axios from 'axios'
import { SnackData } from '../interfaces/SnackData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getLanches = () => api.get<SnackData[]>('/lanches')
export const getPizzas = () => api.get<SnackData[]>('/pizzas')
export const getBebidas = () => api.get<SnackData[]>('/bebidas')
export const getSobremesas = () => api.get<SnackData[]>('/sobremesas')

export default api
