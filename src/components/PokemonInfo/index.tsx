import { Card } from './components'
import './index.css'
import Draggable from 'react-draggable'


interface IProps {
    currentPokemonAbilities: any[]
    avatar: string
    name: string
}

export const PokemonInfo = ({ currentPokemonAbilities, avatar, name }: IProps) => {
    return (
        <Draggable handle='.pokemonInfoHeader'>
            <div className='pokemonInfoWrapper'>
                <div className='pokemonInfoHeader'>drag me</div>
                <img src={avatar} alt='avatar' />
                <p>Name:{name}</p>
                <div className='pokemonInfoList'>
                    {currentPokemonAbilities.map(({ ability }: any, i) => (
                        <Card name={ability.name} key={i} />
                    ))}
                </div>
            </div>
        </Draggable>
    )
}