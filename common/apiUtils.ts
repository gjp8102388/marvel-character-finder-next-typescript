import axios from "axios";
const md5 = require("md5");
const baseUrl = 'http://gateway.marvel.com';
const apikey = 'f4056f0d40a4ceb06847f85f18b154c7';
const privatekey = '8e289ce5f58ea672690f332eb3a369838c145a27';
const ts = Date.now();
const hash = md5(ts+privatekey+apikey);
console.log(hash);
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

