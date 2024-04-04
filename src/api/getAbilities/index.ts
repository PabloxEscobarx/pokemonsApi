import { api } from '../../constants'
import { Ability } from '../../interfaces'

export const getAbilities = async (name: string): Promise<Ability | undefined> => {
    const response = await fetch(`${api}ability/${name}`)
    if (!response.ok) {
        console.log('something went wrong')
        return
    }
    return await response.json()
}