import './index.css'
import { useQuery } from 'react-query'
import { getAbilities } from '../../../../api'
import { useEffect } from "react"
import { Loader } from '../../../Loader'

interface IProps {
    name: string
}

export const Card = ({ name }: IProps) => {
    const { data, isLoading } = useQuery(['abilities', name], () => getAbilities(name))
    return (
        <div className="card">
            {isLoading ? <Loader /> : (
                <>
                    <p>{name}</p>
                    <div>
                        {data && data?.effect_entries?.map((item: any, i: number) => {
                            return (
                                <div key={i}>
                                    <p>language : {item.language.name}</p>
                                    <p>{item.effect}</p>
                                </div>
                            )
                        })}
                    </div>
                </>
            )}
        </div>
    )
}