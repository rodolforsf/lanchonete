import { useState, useEffect } from 'react'

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

import { getBebidas } from '../../../services/api'

export default function Bebidas() {
    const [bebidas, setBebidas] = useState([])

    useEffect(() => {
        (async() => {
            const bebidasRequest = await getBebidas()

            setBebidas(bebidasRequest.data)
        })()
    }, [])

    // const data = [
    //     {
    //         id: 1,
    //         sanck: 'bebida',
    //         name: 'Coca Cola 2l',
    //         description: 'A tradicional Coca-Cola que o brasileiro ama.',
    //         price: 12,
    //         image: 'https://i.imgur.com/Lg3aKhf.jpg',
    //     },
    //     {
    //         id: 2,
    //         sanck: 'bebida',
    //         name: 'Guaraná Antarctica',
    //         description: 'O irresistivel sabor do Guaraná em sua versão latinha.',
    //         price: 6,
    //         image: 'https://i.imgur.com/hOBrOIm.jpg',
    //     },
    //     {
    //         id: 3,
    //         sanck: 'bebida',
    //         name: 'Suco de Abacaxi',
    //         description: 'Suco natural de abacaxi com hortelã para melhorar o sabor e a saúde.',
    //         price: 9,
    //         image: 'https://i.imgur.com/VV9qTMh.jpg',
    //     },
    //     {
    //         id: 4,
    //         snack: 'bebida',
    //         name: 'Suco de Laranja',
    //         description: 'Suco natural de laranja para você que é amante dessa fruta.',
    //         price: 8,
    //         image: 'https://i.imgur.com/2Lf2gHy.jpg',
    //     }
    // ]

    return (
        <>
            <Head title='Bebidas' />
            <SnackTitle>Bebibas</SnackTitle>
            <Snacks snacks={bebidas}></Snacks>
        </>
    )
}

