import Axios, { AxiosResponse } from 'axios'
import React, { useState } from 'react'
import ApiService from '../shared/api/ApiService'


export const API = () => {
    const [data, setData] =  useState<any>()
    const [characterID, setCharacterId] = useState<string>('')
      
    /*
    const fetchData = () =>{
        Axios.get('https://swapi.dev/api/people/1')
        .then( response => { console.log(response)})
        .catch(error => {console.log(error)})

    }
 */
    const fetchData = () =>{
        ApiService.getLukeSkyWalker()
        .then( response => { console.log(response)})
        .catch(error => {console.log(error)})

    }

    const fetchData2 = async () =>{
        try{
            const response = await ApiService.getStarsWarCharecter(characterID)
            setData(response.data)
        } catch(error){
                console.log('error :', error)
        } finally{

        }
        
    }

    return (
        <div>
            <button onClick={() => fetchData2() }>make api call</button>
            <button onClick={() => console.log(data) }>check my state</button>
            <input placeholder='Search by id' onChange={event => setCharacterId(event.target.value)}/>
            <h1>Name : {data?.name}</h1>
            <h1>Gender : {data?.gender}</h1>
            <h1>Hair color: {data?.hair_color}</h1>
            <h1>Height : {data?.height}</h1>
            <h1>Eye color : {data?.eye_color}</h1>

        </div>
    )
}




