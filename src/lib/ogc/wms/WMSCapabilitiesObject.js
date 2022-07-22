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
let count = 0
export async function fetchAsWMSCapabilitiesObject(iri) {

    try {
        
        let res = await fetch(iri)
        if(res.ok) {
            let textXML = await res.text()
            return new WMSCapabilities(await textXml2Json(textXML))
            
        } else {
            console.log(`Client Error in fetching ${iri}`);
            return null
        }
    } catch (error) {
        console.log('There has been a problem with your fetch operation in client browser: ' + error.message)
        try {
            count++
            if (count > 1)
                return null
            
            return await fetchAsWMSCapabilitiesObject(iri)

        } catch (error) {
            console.log(`Error in fetching ${iri}`);
            return null
        }
    }
}