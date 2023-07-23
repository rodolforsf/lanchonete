import { useContext } from 'react'
import { SnackContext } from '../styles/contexts/SnackContext'

export function useSnack() {
    return useContext(SnackContext)
}