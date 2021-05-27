import PokemonAPIService from "../shared/api/PokemonAPIService"
import {useState, useEffect} from 'react'
import {useDebounce} from '../hooks/useDebounce'

export const AboutUs = () => {
    const [data, setData] = useState<any>()
    const [search , setSearch] = useState<string>('')
    const debounceSearchTerm = useDebounce(search, 1000)

    const fetchData = async(x: string) =>{
        if(debounceSearchTerm){
            const {data} =  await PokemonAPIService.searchCharacter(x)
            setData(data)
        }
        
    }
    useEffect(() =>{
        fetchData(search)
    }, [debounceSearchTerm])
    
    return (
        <div>
            <input placeholder='Search for pokemon' onChange={event => setSearch(event.target.value)}/>
            <h1>Name : {data?.name}</h1>
            <h1>Id : {data?.id}</h1>
            <h1>Height : {data?.height}</h1>
            <h1>Weight : {data?.weight}</h1>
            <h1>type: {data?.types?.[0]?.type.name}</h1>
         
        </div>
    )
}
