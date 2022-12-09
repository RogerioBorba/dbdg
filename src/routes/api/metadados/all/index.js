import { textXml2Json } from '$lib/xml_json/xml2Json'

let urlServerCSW = 'https://localhost:8080/geonetwork/srv/por/csw'
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({request}) {
  const iri = `http://localhost:8080/geonetwork/srv/por/csw?request=GetRecords&service=CSW&version=2.0.2&ElementSetName=full&resultType=results&outputSchema=http://www.isotc211.org/2005/gmd`
  try {   
    
    let res = await fetch(iri)
    if(res.ok) {
        let textXML = await res.text()
        let jsonXML = await textXml2Json(textXML)
        return {status: 200, body: jsonXML }
    } else {
        console.log(`Error in fetching ${iri}`);
        return {status: 500, body: { servidor: 'error'}}
    }
} catch (error) {
    console.log(`There has been a problem with your fetch operation or in xml: ${iri} `+ error.message)
    return null
}
}

  