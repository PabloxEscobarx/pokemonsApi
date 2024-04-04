import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import './App.css'
import { PokemonInfo, PokemonsList, Loader } from './components';
import { getPokemonsList, getPokemonInfo } from './api';
import { IPokemon } from './interfaces';

interface IQueryResult {
  data?: IPokemon[];
  isLoading: boolean;
}

function App() {
  const [options, setOptions] = useState({ limit: 10, offset: 0 })
  const [currentPokemon, setCurrentPokemon] = useState<any>()
  const [pokemonsList, setPokemonsList] = useState<IPokemon[]>([])

  const { data: pokemons, isLoading }: IQueryResult = useQuery(
    [options],
    () => getPokemonsList(options.limit, options.offset)
  )

  const handleClick = async (url: string) => {
    const data = await getPokemonInfo(url)
    setCurrentPokemon(data)
  }

  const getMorePokemons = () => {
    setOptions(prevOptions => ({
      limit: prevOptions.limit + 10,
      offset: pokemonsList.length
    }))
  }

  useEffect(() => {
    if (pokemons) {
      setPokemonsList(prevPokemons => [...prevPokemons, ...pokemons])
    }
  }, [pokemons])



  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <div className='wrapper'>
          <div className='left'>
            <PokemonsList pokemonsList={pokemonsList} onClick={handleClick} />
            <button onClick={getMorePokemons}>Get more</button>
          </div>
          <div className='right'>
            {currentPokemon &&
              <PokemonInfo
                currentPokemonAbilities={currentPokemon?.abilities}
                avatar={currentPokemon?.sprites?.front_default}
                name={currentPokemon?.name}
              />
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
