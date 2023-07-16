import { useState, useEffect } from 'react'

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

import { getPizzas } from '../../../services/api'

export default function Pizzas() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
      (async() => {
          const pizzasRequest = await getPizzas()

          setPizzas(pizzasRequest.data)
      })()
  }, [])

    // const data = [
    //     {
    //       id: 1,
    //       snack: 'pizza',
    //       name: 'Calabresa',
    //       description:
    //         'Pizza recheada com calabresa, cebola, mussarela, orégano e azeitona, tendo uma borda recheada com catupiry.',
    //       price: 27,
    //       image: 'https://i.imgur.com/5rjJGkV.jpg',
    //     },
    //     {
    //       id: 2,
    //       snack: 'pizza',
    //       name: 'Portuguesa',
    //       description:
    //         'Pizza recheada com presunto, mussarela, ovo, cebola, azeitona, orégano, tomate e molho de tomate, tendo uma borda recheada com catupiry.',
    //       price: 29.5,
    //       image: 'https://i.imgur.com/WCoyGoI.png',
    //     },
    //   ]

    return (    
    <>
        <Head title='Pizzas' />
        <SnackTitle>Pizzas</SnackTitle>
        <Snacks snacks={pizzas}></Snacks>
    </>
    )
}
