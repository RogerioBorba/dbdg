import {WMSCapabilities} from '../src/lib/OGC/WMS/WMSCapabilities'
import { expect, it } from "vitest"
import {bndesXML, ebXML, ideRSXML, cnpm_embrapaXML} from '../src/lib/OGC/WMS/xml_capabilities'
import { textXml2Json } from '../src/lib/xml_json/xml2Json';
let xmlJsonObject = textXml2Json(bndesXML)
let wms_capabilities =  new WMSCapabilities(xmlJsonObject)
it('Check WMS Service Group BNDES', () => {
    
    expect(wms_capabilities.serviceName()).toBe('WMS')
    expect(wms_capabilities.serviceTitle()).toBe('GeoServer Web Map Service')
    expect(wms_capabilities.serviceAbstract()).toBe('A compliant implementation of WMS 1.1.1 plus most of the SLD 1.0 extension (dynamic styling). Can also generate PDF, SVG, KML, GeoRSS')
    expect(wms_capabilities.serviceKeywords()).toContain('WFS')
    expect(wms_capabilities.serviceKeywords()).toContain('WMS')
    expect(wms_capabilities.serviceContactInformationOrganization()).toBe('INDE - Infraestrutura Nacional de Dados Espaciais')
    expect(wms_capabilities.serviceContactInformationeMail()).toBe('dbdg@inde.gov.br')
})

it('Check WMS Capability Group BNDES', () => {
    console.log(wms_capabilities['Capability'])
    expect(wms_capabilities.capabilityException()).toBeDefined()
    expect(wms_capabilities.capabilityExceptionFormat()).toContain('XML')
    expect(wms_capabilities.capabilityExceptionFormat()).toContain('JSON')
    expect(wms_capabilities.capabilityRequestGetCapabilitiesDCPTypeHTTPGet()).toBeDefined()
    expect(wms_capabilities.capabilityRequestGetCapabilitiesDCPTypeHTTPPost()).toBeDefined()
    expect(wms_capabilities.capabilityRequestGetFeatureInfoDCPTypeHTTPGet()).toBeDefined()
    expect(wms_capabilities.capabilityRequestGetFeatureInfoFormat()).toContain('text/xml')
    expect(wms_capabilities.capabilityRequestGetFeatureInfoFormat()).toContain('text/html')
    expect(wms_capabilities.capabilityRequestGetFeatureInfoFormat()).toContain('application/json')  
    expect(wms_capabilities.capabilityRequestGetMap()).toBeTruthy()
    expect(wms_capabilities.capabilityRequestGetMapFormat()).toContain('image/png')
    expect(wms_capabilities.capabilityRequestGetMapFormat()).toContain('application/vnd.google-earth.kml+xml')
    expect(wms_capabilities.capabilityRequestGetMapFormat()).toContain('text/html; subtype=openlayers')
    expect(wms_capabilities.capabilityRequestGetMapDCPType()).toBeDefined()
    expect(wms_capabilities.capabilityRequestGetMapDCPTypeHTTPGet()).toBeDefined()
    expect(wms_capabilities.capabilityRequestGetMapDCPTypeHTTPPost()).toBeUndefined()
    expect(wms_capabilities.capabilityRequestParentLayer()).toBeDefined()
    expect(wms_capabilities.parentLayerName()).toBeNull()
    expect(wms_capabilities.parentLayerTitle()).toBe('GeoServer Web Map Service')
    expect(wms_capabilities.parentLayerAbstract()).toBe('A compliant implementation of WMS 1.1.1 plus most of the SLD 1.0 extension (dynamic styling). Can also generate PDF, SVG, KML, GeoRSS')
    expect(wms_capabilities.parentLayerCRSs()).toContain('EPSG:3857')
    expect(wms_capabilities.parentLayerCRSs()).toContain('EPSG:4326')
    expect(wms_capabilities.parentLayerCRSs()).toContain('EPSG:4674')
    expect(wms_capabilities.parentLayerEXGeographicBoundingBoxWestBoundLongitude()).toBe('-122.19')
    expect(wms_capabilities.parentLayerEXGeographicBoundingBoxEastBoundLongitude()).toBe('-25.28')
    expect(wms_capabilities.parentLayerEXGeographicBoundingBoxSouthBoundLatitude()).toBe('-59.87')
    expect(wms_capabilities.parentLayerEXGeographicBoundingBoxNorthBoundLatitude()).toBe('32.72')
    expect(wms_capabilities.parentLayerBoundingBox()).toBeDefined()
    expect(wms_capabilities.layerObjects()).toBeDefined()
    expect(wms_capabilities.layerObjects()).toBeDefined()  
    expect(wms_capabilities.allKeywords()).includes('AP_2009')
    
})
//console.log(wms_capabilities.layerObjects())
let eb_xmlJsonObject = textXml2Json(ebXML)
let eb_wms_capabilities =  new WMSCapabilities(eb_xmlJsonObject)

it('Check WMS Service Group DSG', () => {
    
    expect(eb_wms_capabilities.serviceName()).toBe('WMS')
    expect(eb_wms_capabilities.serviceTitle()).toBe('BDGEx')
    expect(eb_wms_capabilities.serviceAbstract()).toBeNull()
    expect(eb_wms_capabilities.serviceKeywords()).toBeNull()
    expect(eb_wms_capabilities.serviceContactInformationOrganization()).toBeNull()
    expect(eb_wms_capabilities.serviceContactInformationeMail()).toBeNull()
    
})
//console.log(eb_wms_capabilities.capabilityRequestGetMapDCPTypeHTTPPost())
it('Check WMS Capability Group DSG', () => {
    expect(eb_wms_capabilities.capabilityExceptionFormat()).toContain('XML')
    expect(eb_wms_capabilities.capabilityExceptionFormat()).toContain('INIMAGE')
    expect(eb_wms_capabilities.capabilityRequestGetCapabilitiesDCPTypeHTTPGet()).toBeDefined()
    expect(eb_wms_capabilities.capabilityRequestGetCapabilitiesDCPTypeHTTPPost()).toBeDefined()
    expect(eb_wms_capabilities.capabilityRequestGetFeatureInfoDCPTypeHTTPGet()).toBeDefined()
    expect(eb_wms_capabilities.capabilityRequestGetFeatureInfoFormat()).toContain('text/html')
    expect(eb_wms_capabilities.capabilityRequestGetFeatureInfoFormat()).toContain('text/plain')
    expect(eb_wms_capabilities.capabilityRequestGetMap()).toBeTruthy()
    expect(eb_wms_capabilities.capabilityRequestGetMapFormat()).toContain('image/png')
    expect(eb_wms_capabilities.capabilityRequestGetMapFormat()).toContain('application/vnd.google-earth.kml+xml')
    expect(eb_wms_capabilities.capabilityRequestGetMapDCPType()).toBeDefined()
    expect(eb_wms_capabilities.capabilityRequestGetMapDCPTypeHTTPGet()).toBeDefined()
    expect(eb_wms_capabilities.capabilityRequestGetMapDCPTypeHTTPPost()).toBeDefined()
    expect(eb_wms_capabilities.capabilityRequestParentLayer()).toBeDefined()
    expect(eb_wms_capabilities.parentLayerName()).toBe('BDGEx')
    expect(eb_wms_capabilities.parentLayerTitle()).toBe('BDGEx')
    expect(eb_wms_capabilities.parentLayerAbstract()).toBe('BDGEx')
    expect(eb_wms_capabilities.parentLayerCRSs()).toContain('EPSG:3857')
    expect(eb_wms_capabilities.parentLayerCRSs()).toContain('EPSG:4326')
    expect(eb_wms_capabilities.parentLayerCRSs()).toContain('EPSG:3395')
    expect(eb_wms_capabilities.parentLayerEXGeographicBoundingBoxWestBoundLongitude()).toBe('-125')
    expect(eb_wms_capabilities.parentLayerEXGeographicBoundingBoxEastBoundLongitude()).toBe('0')
    expect(eb_wms_capabilities.parentLayerEXGeographicBoundingBoxSouthBoundLatitude()).toBe('-82.5')
    expect(eb_wms_capabilities.parentLayerEXGeographicBoundingBoxNorthBoundLatitude()).toBe('42.5')
    expect(eb_wms_capabilities.parentLayerBoundingBox()).toBeUndefined()
    expect(eb_wms_capabilities.layerObjects()).toBeDefined()    
    expect(eb_wms_capabilities.allKeywords()).toBeDefined()
})

const iders_xmlJsonObject = textXml2Json(ideRSXML)
const iders_wms_capabilities =  new WMSCapabilities(iders_xmlJsonObject)
//console.log("iders_wms_capabilities.serviceName()")
//console.log(iders_wms_capabilities.service()['Name'])
it('Check WMS Service Group IDE RS', () => {
    
    //expect(iders_wms_capabilities.serviceName()).toBe('WMS')
    //expect(iders_wms_capabilities.serviceTitle()).toBe('INDE_IEDE_RS')
    expect(iders_wms_capabilities.serviceAbstract()).toBe('WMS')
    //expect(iders_wms_capabilities.serviceKeywords()).toBeNull()
    //expect(iders_wms_capabilities.serviceContactInformationOrganization()).toBeNull()
    //expect(iders_wms_capabilities.serviceContactInformationeMail()).toBe('')
    
})

let cnpm_embrapa_xmlJsonObject = textXml2Json(cnpm_embrapaXML)
let cnpm_embrapa_wms_capabilities =  new WMSCapabilities(cnpm_embrapa_xmlJsonObject)
it('Check WMS Service Group', () => {
    
    expect(cnpm_embrapa_wms_capabilities.serviceName()).toBe('WMS')
    expect(cnpm_embrapa_wms_capabilities.serviceTitle()).toBe('My GeoServer WMS')
    expect(cnpm_embrapa_wms_capabilities.serviceAbstract()).toBe('\n')
    expect(cnpm_embrapa_wms_capabilities.serviceKeywords()).toContain('WFS')
    expect(cnpm_embrapa_wms_capabilities.serviceKeywords()).toContain('WMS')
    expect(cnpm_embrapa_wms_capabilities.serviceContactInformationOrganization()).toBeUndefined()
    expect(cnpm_embrapa_wms_capabilities.serviceContactInformationeMail()).toBeUndefined()
})

it('Check WMS Capability Group', () => {
    expect(cnpm_embrapa_wms_capabilities.capabilityException()).toBeDefined()
    expect(cnpm_embrapa_wms_capabilities.capabilityExceptionFormat()).toContain('XML')
    expect(cnpm_embrapa_wms_capabilities.capabilityRequestGetCapabilitiesDCPTypeHTTPGet()).toBeDefined()
    expect(cnpm_embrapa_wms_capabilities.capabilityRequestGetCapabilitiesDCPTypeHTTPPost()).toBeDefined()
    expect(cnpm_embrapa_wms_capabilities.capabilityRequestGetFeatureInfoDCPTypeHTTPGet()).toBeDefined()
    expect(cnpm_embrapa_wms_capabilities.capabilityRequestGetFeatureInfoFormat()).toContain('text/xml')
    expect(cnpm_embrapa_wms_capabilities.capabilityRequestGetFeatureInfoFormat()).toContain('text/html')
    expect(cnpm_embrapa_wms_capabilities.capabilityRequestGetFeatureInfoFormat()).toContain('application/json')  
    expect(cnpm_embrapa_wms_capabilities.capabilityRequestGetMap()).toBeTruthy()
    expect(cnpm_embrapa_wms_capabilities.capabilityRequestGetMapFormat()).toContain('image/png')
    expect(cnpm_embrapa_wms_capabilities.capabilityRequestGetMapFormat()).toContain('application/vnd.google-earth.kml+xml')
    expect(cnpm_embrapa_wms_capabilities.capabilityRequestGetMapFormat()).toContain('text/html; subtype=openlayers')
    expect(cnpm_embrapa_wms_capabilities.capabilityRequestGetMapDCPType()).toBeDefined()
    expect(cnpm_embrapa_wms_capabilities.capabilityRequestGetMapDCPTypeHTTPGet()).toBeDefined()
    expect(cnpm_embrapa_wms_capabilities.capabilityRequestGetMapDCPTypeHTTPPost()).toBeUndefined()
    expect(cnpm_embrapa_wms_capabilities.capabilityRequestParentLayer()).toBeDefined()
    expect(cnpm_embrapa_wms_capabilities.parentLayerName()).toBeNull()
    expect(cnpm_embrapa_wms_capabilities.parentLayerTitle()).toBe('My GeoServer WMS')
    expect(cnpm_embrapa_wms_capabilities.parentLayerAbstract()).toBe('This is a description of your Web Map Server.')
    expect(cnpm_embrapa_wms_capabilities.parentLayerCRSs()).toContain('EPSG:3857')
    expect(cnpm_embrapa_wms_capabilities.parentLayerCRSs()).toContain('EPSG:4326')
    expect(cnpm_embrapa_wms_capabilities.parentLayerEXGeographicBoundingBoxWestBoundLongitude()).toBe('-73.6166666666667')
    expect(cnpm_embrapa_wms_capabilities.parentLayerEXGeographicBoundingBoxEastBoundLongitude()).toBe('-34.7933347300137')
    expect(cnpm_embrapa_wms_capabilities.parentLayerEXGeographicBoundingBoxSouthBoundLatitude()).toBe('-31.6536626963763')
    expect(cnpm_embrapa_wms_capabilities.parentLayerEXGeographicBoundingBoxNorthBoundLatitude()).toBe('4.2')
    expect(cnpm_embrapa_wms_capabilities.parentLayerBoundingBox()).toBeDefined()
    expect(cnpm_embrapa_wms_capabilities.layerObjects()).toBeDefined()
    expect(cnpm_embrapa_wms_capabilities.layerObjects()[0]).toBeDefined()    
    expect(cnpm_embrapa_wms_capabilities.allKeywords()).includes('idaf_ac_totbov_0001a0010_cabsporprop_2475ptos')
    expect(cnpm_embrapa_wms_capabilities.allKeywords()).includes('features')
    console.log(cnpm_embrapa_wms_capabilities.allKeywords())
})