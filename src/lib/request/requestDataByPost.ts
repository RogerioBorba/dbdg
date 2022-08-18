export async function  fetchDataByPost(url: string, body: string, content_type: string = 'application/xml') {
    try {
        return await fetch( url, { method: "POST", body: body, headers: {"Content-type": content_type}})    
    } catch (error) {
        try {
            let data = {url: url, body: body, content_type: content_type}
            return await fetch( '/api/request-by-post/', { method: "POST", body: JSON.stringify(data), headers: {"Content-type": content_type}})    
            
        } catch (error) {
            console.log("Erro na requisição")
            throw error
        }
    }
    
}