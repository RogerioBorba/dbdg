export async function post({ request }) {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
    let iri = await request.json()
    
    let res =  await fetch(iri.url , { method: "POST", body: iri.body, headers: {"Content-type": iri.content_type}})    
    let xmlTxt = await res.text()
    //console.log(xmlTxt)
    return {status: 200, body: xmlTxt}

}