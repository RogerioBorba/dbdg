export async function get({ request }) {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
    //let iri = await request.json()
    const index = request.url.indexOf('=')+ 1
    let url = request.url.substring(index).trim()
    console.log(url)
    let res =  await fetch(url , { method: "GET"})    
    if (!res.ok)
        throw res
    let xmlTxt = await res.text()
    
    return {status: 200, body: xmlTxt}

}