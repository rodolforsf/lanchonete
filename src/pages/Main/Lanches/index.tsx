import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

import { getLanches } from '../../../services/api'

export default function Lanches() {
    const [lanches, setLanches] = useState([])

    useEffect(() => {
      ;(async () => {
            const lancheRequest = await getLanches()

            setLanches(lancheRequest.data)
          })()
        }, [])

    // const data = [
    //     {
    //         id: 1,
    //         snack: 'lanche',
    //         name: 'Mega',
    //         description: 'O artesanal tamanho família recheado com três carnes suculentas, queijo e bacon.',
    //         price: 25.5,
    //         image: 'https://i.imgur.com/upjIUnG.jpg'
    //       },
    //       {
    //         id: 2,
    //         snack: 'lanche',
    //         name: 'Extra Bacon',
    //         description: 'Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda queijo e carne.',
    //         price: 23.5,
    //         image: 'https://i.imgur.com/B4J04AJ.jpg'
    //       },
    //       {
    //         id: 3,
    //         snack: "lanche",
    //         name: "Tradicional",
    //         description: "O simples também é delicioso, principalmente se envolver nossa carne artesanal e queijo.",
    //         price: 12,
    //         image: "https://i.imgur.com/Jz506jB.jpg"
    //       },
    //       {
    //         id: 4,
    //         snack: 'lanche',
    //         name: 'Big Carne',
    //         description: 'Uma carne artesanal de primeira qualidade com 4cm de altura e uma salada completa com alface, cebola, tomate e outros.',
    //         price: 18.0,
    //         image: 'https://i.imgur.com/bF8EdBb.jpg'
    //       },
    //       {
    //         id: 5,
    //         snack: 'lanche',
    //         name: 'Carne dupla',
    //         description: 'Já pensou em comer aquele sanduíche com carne dupla e saborosa, recheada com queijo, molho e salada? Então você pensou exatamente nesse hambúrguer.',
    //         price: 20,
    //         image: 'https://i.imgur.com/fdEY2kY.jpg'
    //       }
    //     // {
    //     //     id: 2,
    //     //     sanck: 'lanche',
    //     //     name: 'Extra Bacon',
    //     //     description: 'Muito bacon, possui bacon bem assado em todas as camadas e ainda queijo e carne',
    //     //     price: 26.5,
    //     //     image: 'https://i.imgur.com/B4J04AJ.jpg',
    //     // },
    // ]

    return (
        <>
            <Head title='Lanches' />
            <SnackTitle>Lanches</SnackTitle>
            <Snacks snacks={lanches}></Snacks>
        </>
    )
}