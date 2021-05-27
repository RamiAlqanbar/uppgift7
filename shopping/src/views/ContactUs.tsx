import E_COMMERCE_APIService from '../shared/api/E_COMMERCE_APIService'
import { useState } from 'react'
export const ConatctUs = () => {
const [serverResponse, setServerResponse ] = useState<any>([])

const fetchData = async () =>{
    const { data } =  await E_COMMERCE_APIService.getAllUser()
    setServerResponse(data)
    console.log(data)
}

const displayData = () =>{
    return(
        serverResponse.map((x: any) => <h1>{x.username}</h1>)
    )
}

    return (
        <div>
            <button onClick={() => fetchData()}>Make call</button>
            {displayData()}
        </div>
    )
}
