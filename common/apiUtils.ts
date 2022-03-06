import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const apikey = process.env.NEXT_PUBLIC_API_KEY;
export const getCharacterList = (nameStartsWith: string) =>
    axios({
        method: 'get',
        url: `${baseUrl}/v1/public/characters`,
        params: {
            nameStartsWith,
            apikey,
        }
    })

