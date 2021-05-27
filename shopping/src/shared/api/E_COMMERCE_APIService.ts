import http from './E_COMMERCE_API'

const getAllUser = () => {
    return http.get('/user')
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAllUser
}