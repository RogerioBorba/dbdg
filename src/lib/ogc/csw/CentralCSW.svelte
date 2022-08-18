<script lang="ts">
import { fetchDataByPost } from "$lib/request/requestDataByPost";
import { textXml2Json } from '$lib/xml_json/xml2Json';
import { WMSLayer } from "../wms/WMSLayer";
import WMSCapabilityLayer from '$lib/ogc/wms/WMSCapabilityLayer.svelte'

let wmsLayers = []
let metadataText = ''
let disableButtonRealizarRequest = true
let colorBtnSearch ="text-gray-100"
let bgColorBtnSearch = "bg-gray-50"
let urlServer = 'https://metadados.inde.gov.br/geonetwork/srv/por/csw'
let anyText = `<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:ogc="http://www.opengis.net/ogc" service="CSW" version="2.0.2" resultType="results" startPosition="1" maxRecords="50000" outputFormat="application/xml" outputSchema="http://www.isotc211.org/2005/gmd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd"><csw:Query typeNames="csw:Record"><csw:ElementSetName>full</csw:ElementSetName><csw:Constraint version="1.1.0"><ogc:Filter><ogc:PropertyIsEqualTo><ogc:PropertyName>csw:AnyText</ogc:PropertyName><ogc:Literal>__metadataText01234567890__</ogc:Literal></ogc:PropertyIsEqualTo></ogc:Filter></csw:Constraint></csw:Query></csw:GetRecords>`    

function onlineResourceWMS(onlineResourceObj) {
    let protocol = onlineResourceObj["gmd:protocol"]
    if (!protocol)
        return undefined
    let protocolType = protocol["gco:CharacterString"]["#text"] 
    if (protocolType == 'OGC:WMS') {
        let link = onlineResourceObj["gmd:linkage"]["gmd:URL"]["#text"]
        let name = onlineResourceObj["gmd:name"]["gco:CharacterString"]
        let description = onlineResourceObj["gmd:description"]["gco:CharacterString"]
        return {link: link, Name:name, Title: description}
    } else 
        return undefined

}

function getOnlineResource(metadataObj) {
    let resources = []
    let distribInfo = metadataObj["gmd:distributionInfo"]
    if (!distribInfo)
        return []
    let transfOpt = distribInfo["gmd:MD_Distribution"]["gmd:transferOptions"]
    if (!transfOpt)
        return []
    let digitalTransOpt = transfOpt["gmd:MD_DigitalTransferOptions"]
    if (!digitalTransOpt)
        return []
    let online = digitalTransOpt["gmd:onLine"]
    if (!online)
        return []
    for (let i = 0; i < online.length; i++) {
        let onlineResource = online[0]["gmd:CI_OnlineResource"]
        let objLinkName = onlineResourceWMS(onlineResource)
        if (objLinkName)
        resources.push(objLinkName)
    }
    return resources
}
function getWMSLayers(xmlJsonObject) {
    //let totalRecords = parserInt(xmlJsonObject["csw:GetRecordsResponse"]["csw:SearchResults"]["@attributes"].numberOfRecordsMatched)
    let wmsResources = []
    let records = xmlJsonObject["csw:GetRecordsResponse"]["csw:SearchResults"]["gmd:MD_Metadata"]
    if (!records)
        return []
    for(let i = 0; i < records.length; i++) {
        wmsResources = wmsResources.concat(getOnlineResource(records[i]))
    }  
    let i = 0
    return wmsResources.map(layer => new WMSLayer(layer, i++, null))
 }
    async function btnSearchClicked() {
        anyText = anyText.replace('__metadataText01234567890__', metadataText)
        let res = await fetchDataByPost(urlServer, anyText, "application/xml")
        let xmlJsonObject = textXml2Json(await res.text())
        console.log(xmlJsonObject)
        let numberOfRecordsMatched = parseInt(xmlJsonObject["csw:GetRecordsResponse"]["csw:SearchResults"]["@attributes"].numberOfRecordsMatched)
        if (numberOfRecordsMatched == 0)
            return alert("Não há metadados para o termo usado na pesquisa")
        wmsLayers = getWMSLayers(xmlJsonObject)
        if (wmsLayers.length == 0)
            alert("Não foi encontrada camada wms nos metadados")
    }
    $: {
        
        if (metadataText.length>2) {
            colorBtnSearch ="black"
            bgColorBtnSearch = "bg-gray-300"
            disableButtonRealizarRequest = false
        } else {
            colorBtnSearch ="gray"
            bgColorBtnSearch = "bg-gray-50"
            disableButtonRealizarRequest = true
        }
    }
</script>
<div class="flex relative text-gray-700">
    <input class="w-full mr-1 pl-3 pr-8 text-sm shadow-sm border-gray-300 rounded-lg focus:outline-none"  type="text" placeholder="Informe o termo de busca" bind:value={metadataText} title="Informe o termo de busca" >
    <button class="focus:outline-none hover:{bgColorBtnSearch} font-bold py-1 px-1 rounded inline-flex items-center" on:click|preventDefault={btnSearchClicked} title="Realizar requisição" disabled={disableButtonRealizarRequest}>
        <svg width="20" height="20" viewBox="0 0 24 24">
            <path fill="{colorBtnSearch}" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>
    </button>   
</div>
{#each wmsLayers as wmsLayer}
        <WMSCapabilityLayer wmsLayer={wmsLayer} capabilitiesUrl= {wmsLayer.wmsLayerCapability.link}></WMSCapabilityLayer>
{/each}