import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function Lanches() {
    const data = [
        {
            id: 1,
            sanck: 'lanche',
            name: 'Giga',
            description: 'O lanche artesanal tamanho família recheado com três carnes suculentas, queijo e bacon',
            price: 35.5,
            image: 'https://i.imgur.com/upjIUnG.jpg',
        },
        {
            id: 2,
            sanck: 'lanche',
            name: 'Extra Bacon',
            description: 'Muito bacon, possui bacon bem assado em todas as camadas e ainda queijo e carne',
            price: 26.5,
            image: 'https://i.imgur.com/B4J04AJ.jpg',
        },
    ]

    return (
        <>
            <Head title='Lanches' description='Nossos melhores lanches' />
            <SnackTitle>Lanches</SnackTitle>
            <Snacks snacks={data}></Snacks>
        </>
    )
}