import { BASE_URL } from "../config";
import { API_KEY } from "../config";

export function search(keyword='') {
    return fetch(`${BASE_URL}/discovery/v2/events.json?keyword=${keyword}${API_KEY}`).then((res)=>{
        return res.json()
    }).then((data)=>{
        return data?._embedded?.events || [];
    }).catch((error)=>{
        console.error(error);
    });
}

