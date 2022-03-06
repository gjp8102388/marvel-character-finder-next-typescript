import axios from "axios";
const md5 = require("md5");
const baseUrl = process.env.BASE_URL;
const apikey = process.env.PUBLIC_KEY;
const privatekey = process.env.PRIVATE_KEY;
const ts = Date.now();
const hash = md5(ts+privatekey+apikey);
export const getCharacterList = (nameStartsWith: string) =>
    axios({
        method: 'get',
        url: `${baseUrl}/v1/public/characters`,
        params: {
            nameStartsWith,
            ts,
            apikey,
            hash
        }
    })

