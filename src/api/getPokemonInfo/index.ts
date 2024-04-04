import { PokemonDetails } from '../../interfaces'

export const getPokemonInfo = async (url: string): Promise<PokemonDetails | undefined> => {
    const response = await fetch(url)
    if (!response.ok) {
        console.log('something went wrong')
        return
    }
    return await response.json()
}