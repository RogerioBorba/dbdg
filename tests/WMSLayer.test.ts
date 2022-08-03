import {WMSCapabilities} from '../src/lib/OGC/WMS/WMSCapabilities'
import { expect, it } from "vitest"
import {bndesXML, ebXML, ideRSXML, cnpm_embrapaXML, inpeXML} from '../src/lib/OGC/WMS/xml_capabilities'
import { textXml2Json } from '../src/lib/xml_json/xml2Json';
import { WMSLayer } from '../src/lib/OGC/WMS/WMSLayer';
let xmlJsonObject = textXml2Json(bndesXML)
let wms_capabilities =  new WMSCapabilities(xmlJsonObject)
it('Check WMS Capability Group BNDES', () => {
    let layerObjects = wms_capabilities.layerObjects()
    expect(layerObjects).toBeDefined()
    let wmsLayer = new WMSLayer(layerObjects[0])
    expect(wmsLayer.styles()[0].name()).toBe("BNDES:AP_2009")
    expect(wmsLayer.styles()[0].title()).toBe("BNDES:AP_2009")
    expect(wmsLayer.styles()[0].legendGraphic().link()).toBe("https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=AP_2009")
    
})