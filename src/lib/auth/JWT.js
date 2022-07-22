import { browser } from "$app/env";

function getKey( key) {
    if (browser) {
        const item = localStorage.getItem(key)
        if (item)
            return JSON.parse(key)
    }
    return null
}

export function setKey( key, value) {
    if (browser) 
        localStorage.setItem(key, value)
    
}
export async function post(fetch, url, body) {
    let customError = false
    try {
        let headers = {}
        if (!(body instanceof FormData)) {
            headers['Content-Type'] = 'application/json'
            body = JSON.stringify(body)
        }
        const token = getKey('jwt')
        if (token)
            headers['Authorization'] = 'Bearer ' + token
        const res = await fetch(url, {method: 'POST', body, headers})
        if (!res.ok) {
            try {
                const data = await res.json()
                const error = data.message[0].messages[0]
                customError = true
                throw { id: error.id, message: error.message}    
            } catch (error) {
                console.log(error)
                throw error
            }   
        }
        return res

    } catch (error) {
        console.log(error)
                throw error
    }

}