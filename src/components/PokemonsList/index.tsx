import { IPokemon } from "../../interfaces"
import './index.css'

interface IProps {
    pokemonsList?: IPokemon[]
    onClick: (url: string) => void
}

export const PokemonsList = ({ pokemonsList, onClick }: IProps) => {
    return (
        <ol>
            {pokemonsList?.map(({ name, url }: IPokemon, i: number) => (
                <li onClick={() => onClick(url)} key={i}>{name}</li>
            ))}
        </ol>
    )
}