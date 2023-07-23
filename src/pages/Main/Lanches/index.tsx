import { useSnack } from '../../../hooks/useSnack'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

export default function Lanches() {
    const { lanches } = useSnack()

    return (
        <>
            <Head title='Lanches' />
            <SnackTitle>Lanches</SnackTitle>
            <Snacks snacks={lanches}></Snacks>
        </>
    )
}