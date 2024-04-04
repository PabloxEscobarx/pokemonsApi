import { api } from "../../constants"
import { PokemonDetails } from '../../interfaces'

export const getPokemonDetails = async (name: string): Promise<PokemonDetails | undefined> => {
    const response = await fetch(`${api}pokemon/${name}`)
    if (!response.ok) {
        console.log('something went wrong')
        return
    }
    return await response.json()
}