import { api } from '../../constants'
import { PokemonList } from '../../interfaces'

export const getPokemonsList = async (limit: number, offset: number): Promise<PokemonList | []> => {
    const response = await fetch(`${api}pokemon?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
        console.log('Something went wrong');
        return []
    }
    const { results } = await response.json();
    return results
};