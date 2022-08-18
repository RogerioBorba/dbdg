export async function get({ request }) {
    //after ? url must be of shape: return await fetch(`/api/request-by-post/?iri=${url}&body=${body}&content_type=${content_type}`)
    console.log("ENTREU")
    const index = request.url.indexOf('?')+ 5
    let iri = request.url.substring(index).trim()
    console.log(iri)
    return {status: 200, body: iri}

}