import {WMSCapabilities} from './WMSCapabilities'
import {textXml2Json} from '../../xml_json/xml2Json'

export async function getWMSCapabilitiesObject(objIdTextIRI) {
    try {
        let res = await fetch(objIdTextIRI.iri)
        if(res.ok) {
            let textXML = await res.text()
            return new WMSCapabilities(await textXml2Json(textXML))
            
        } else {
            console.log(`Client Error in fetching ${objIdTextIRI.text}`);
            return null
        }
    } catch (error) {
        console.log('There has been a problem with your fetch operation in client browser: ' + error.message)
        try {
            console.log('Try fetching on server-proxy')
            let res = await fetch(`/api/wms/?url=${objIdTextIRI.iri}`)
            if(res.ok) {
                console.log('fetch ok')
                let textXML = await res.text()
                return new WMSCapabilities(await textXml2Json(textXML))
                
            } else {
                console.log(`Server Error in fetching ${objIdTextIRI.text}`);
                return null
            }
        } catch (error) {
            console.log(`Error in fetching ${objIdTextIRI.text}`);
            return null
        }
    }
}
export async function fetchWMSCapabilitiesObject(objIdTextIRIArray) {
    let objIdTextIRICapabilitiesArray = []
    let objIdTextIRICapabilitiesFailedArray = []

    for (const objIdTextIRI of objIdTextIRIArray) {
        let res = await getWMSCapabilitiesObject(objIdTextIRI)
        if (res)
            objIdTextIRICapabilitiesArray.push({id: objIdTextIRI.id, text: objIdTextIRI.text, iri: objIdTextIRI.iri, capabilities: res})
        else
            objIdTextIRICapabilitiesFailedArray.push({id: objIdTextIRI.id, text: objIdTextIRI.text, iri: objIdTextIRI.iri, capabilities: null})
    }
    return [objIdTextIRICapabilitiesArray, objIdTextIRICapabilitiesFailedArray]
}