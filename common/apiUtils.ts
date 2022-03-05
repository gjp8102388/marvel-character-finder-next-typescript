import axios from "axios";

const baseUrl = 'http://gateway.marvel.com/'
const apikey = 'f4056f0d40a4ceb06847f85f18b154c7'
export const getCharacterList = (nameStartsWith: string) =>
    axios({
        method: 'get',
        url: `${baseUrl}/v1/public/characters`,
        params: {
            nameStartsWith,
            apikey,
        }
    })

