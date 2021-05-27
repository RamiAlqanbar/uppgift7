import http from './PokemonAPI'

const getCharacterDitto = () => {
    return http.get('/pokemon/ditto')
}

const searchCharacter = (pokemonName: string) =>{
    return http.get(`pokemon/${pokemonName}`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    getCharacterDitto,
    searchCharacter
}