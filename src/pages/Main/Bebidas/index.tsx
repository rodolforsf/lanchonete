import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function Bebidas() {
    const data = [
        {
            id: 1,
            sanck: 'bebida',
            name: 'Coca Cola 2l',
            description: 'A tradicional Coca-Cola que o brasileiro ama.',
            price: 12,
            image: 'https://i.imgur.com/Lg3aKhf.jpg',
        },
        {
            id: 2,
            sanck: 'bebida',
            name: 'Guaraná Antarctica',
            description: 'O irresistivel sabor do Guaraná em sua versão latinha.',
            price: 6,
            image: 'https://i.imgur.com/hOBrOIm.jpg',
        },
        {
            id: 3,
            sanck: 'bebida',
            name: 'Suco de Abacaxi',
            description: 'Suco natural de abacaxi com hortelã para melhorar o sabor e a saúde.',
            price: 9,
            image: 'https://i.imgur.com/VV9qTMh.jpg',
        },
    ]

    return (
        <>
            <Head title='Bebidas' />
            <SnackTitle>Bebibas</SnackTitle>
            <Snacks snacks={data}></Snacks>
        </>
    )
}

