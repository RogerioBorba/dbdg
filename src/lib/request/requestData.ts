export async function fetchData(url: string) {
    try {
        return await fetch(url)
    } catch (error) {
        try {
            console.log("error")
            return await fetch(`/api/request-data/?iri=${url}`)
        } catch (error) {
            console.log("Erro na requisição")
            throw error
        }
    }

}
