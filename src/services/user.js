import { urlFecth } from "../constants";

export const getGithubUser= async (user) => {
    const response= await fetch(`${urlFecth}${user}`,{
        method:'GET'
    })
    const payload = response.json();

    return payload;
}