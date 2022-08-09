import { fetchAsWMSCapabilitiesObject } from "$lib/ogc/wms/WMSCapabilitiesObject";
import { catalogos_servicos } from "$lib/inde/CatalogoINDE";

import {wmsKeywordObj} from "$lib/inde/wms/data/json_keywords";


export async function get({ request }) {
     return {
          status: 200,
          body: wmsKeywordObj         
     };     
     process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
     let arrWMSCapabilities = await getWMSCapabilitiesObjects() 
     if (!arrWMSCapabilities) {
          console.log("Error no getWMSCapabilitiesObjects")
          return { status: 500, body:{erro: 'Erro no processamento'}}
     }
     arrWMSCapabilities = arrWMSCapabilities.filter(obj => !!obj)
     let arr = []
     for (let i = 0; i < arrWMSCapabilities.length; i++) {
          let capaObj = arrWMSCapabilities[i]
          if (capaObj)
               arr = arr.concat(capaObj.allKeywords())
          
     }
     return {
          status: 200,
          body: {keywords: arr}         
     };
}    

async function getWMSCapabilitiesObjects() {
     let arr_wms_capabilities = catalogos_servicos.map(obj => obj.wmsGetCapabilities).filter(obj => !!obj)
     let arr = []
     for await (let url of arr_wms_capabilities) {
          let res = await fetchAsWMSCapabilitiesObject(url)
          if (res)
               arr.push(res)
     }
     return arr
}