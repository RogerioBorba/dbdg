import { getMethods } from "$lib/util/reflection";

export async function get({ request }) {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
    const index = request.url.indexOf('=')+ 1
    let applicationJson = 'application/json'
    let applicationXml = 'application/xml' 
    let contentType = null
    if (index <= 0)
        return { status: 400, body: 'Bad request - must have ...?iri=address'};
    let iri = request.url.substring(index).trim()
    let accept = request.headers.get('Accept')
    console.log(accept)
    if (accept.includes(applicationXml)) 
        contentType = applicationXml
    else if (accept.includes(applicationJson))
        contentType = applicationJson
    let response = await getOnServer(iri, contentType)
    if (response) {
        let res = null
        if (contentType == applicationXml)
            res = await response.text()
        else if (contentType == applicationJson)
            res = await response.json()
        else 
            res = await response.text()
        return { status: 200, headers:{'content-type': contentType || 'text/plain'}, body: res};
    }
    
    return { status: 404 };
}

async function getOnServer(urlServer: string, content_type: string="application/xml" ) {
      try {
        let res = await fetch(urlServer, { method: "GET", headers: {"Content-type": content_type}})
        return res   
      } catch (error) {
            console.log(error)
            return {status: 400, body: 'Bad reequest'}
      }
      
    }
