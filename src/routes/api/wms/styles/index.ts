import { catalogos_servicos } from "$lib/inde/CatalogoINDE";
import { WMSLayer } from "$lib/ogc/wms/WMSLayer";
import { WMSCapabilities } from "$lib/ogc/wms/WMSCapabilities";
import { textXml2Json } from "$lib/xml_json/xml2Json";
import {styleObj } from "$lib/inde/wms/data/json_styles"  
export async function get({ request}) {
     return {
          status: 200,
          body: styleObj.styles
     };
     process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
     let arrWMSCapabilities = await fetchAsWMSCapabilitiesObject()
     arrWMSCapabilities = arrWMSCapabilities.filter(obj => !!obj)
     let arr: any[] = []
     for (let i = 0; i < arrWMSCapabilities.length; i++) {
          let capaObj = arrWMSCapabilities[i]
          let layerObjects = capaObj.layerObjects()
          if (layerObjects) {
               for (let j = 0; j < layerObjects.length; j++) {
                    let layerObject = layerObjects[j]
                    let arrStyle = styles(layerObject)
                    arr = arr.concat(arrStyle)
               }
          }      
     }
     return {
          status: 200,
          body: {styles: arr}         
     };
}    

async function fetchAsWMSCapabilitiesObject() {
     let arr_wms_capabilities_link = catalogos_servicos.map(obj => obj.wmsGetCapabilities).filter(obj => !!obj)
     let arr = []
     for await (let url of arr_wms_capabilities_link) {
          let res = await fetchLinkAsWMSCapabilitiesObject(url)
          if (res)
               arr.push(res)
     }
     return arr
}

async function fetchLinkAsWMSCapabilitiesObject(iri:string) {
     try {   
          let res = await fetch(iri)
          if(res.ok) {
              let textXML = await res.text()
              let jsonXML = await textXml2Json(textXML)
              return new WMSCapabilities(jsonXML)    
          } else {
              console.log(`Error in fetching ${iri}`);
              return null
          }
      } catch (error) {
          console.log(`There has been a problem with your fetch operation or in xml: ${iri} `+ error.message)
          return null
      }    
}
function styles(layerObject: any): any {
     let wmsLayer = new WMSLayer(layerObject)
     let styles: any = wmsLayer.styles()
     let arr: object[] = []
     arr = arr.concat(styles)
     return arr.filter(style => !!style).map( (style) => {
          return {
               name: style.name, 
               title: style.title,
               abstract: style.abstract,
               legendGraphicURL: style.legendGraphicURL,
               legendGraphicFormat: style.legendGraphicFormat}
     })
}