import { ReactNode, createContext, useEffect, useState } from 'react'
import { SnackData } from '../../interfaces/SnackData'
import { getBebidas, getLanches, getPizzas, getSobremesas } from '../../services/api'

interface SnackContextProps {
    lanches: SnackData[]
    pizzas: SnackData[]
    bebidas: SnackData[]
    sobremesas: SnackData[]
}

interface SnackProviderPorps {
    children: ReactNode;
}

export const SnackContext = createContext({} as SnackContextProps)

export function SnackProvider({ children }: SnackProviderPorps) {
    const [lanches, setLanches] = useState<SnackData[]>([])
    const [pizzas, setPizzas] = useState<SnackData[]>([])
    const [bebidas, setBebidas] = useState<SnackData[]>([])
    const [sobremesas, setSobremesas] = useState<SnackData[]>([])
  
  useEffect(() => {
    ;(async () => {
      try {
          const lancheRequest = await getLanches()
          const pizzaRequest = await getPizzas()
          const bebidaRequest = await getBebidas()
          const sobremesaRequest = await getSobremesas()
  
          const requests = [lancheRequest, pizzaRequest, bebidaRequest, sobremesaRequest]
  
          const [ 
            {data:  lancheResponse},
            {data:  pizzaResponse},
            {data:  bebidaResponse},
            {data:  sobremesaResponse},
          ] = await Promise.all(requests)
  
          setLanches(lancheResponse)
          setPizzas(pizzaResponse)
          setBebidas(bebidaResponse)
          setSobremesas(sobremesaResponse)
  
        }  catch (error) { 
          console.error(error)
        }
        })()
      }, [])
      
      return (
            <SnackContext.Provider value={{ lanches, pizzas, bebidas, sobremesas }}>
                {children}
            </SnackContext.Provider>
      )
}