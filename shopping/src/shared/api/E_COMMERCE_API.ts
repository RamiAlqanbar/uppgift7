import Axios from 'axios'
const developmentAPI = 'https://datadbrami.herokuapp.com'

const E_COMMERCE_API = Axios.create({
    baseURL: developmentAPI
})

export default E_COMMERCE_API 