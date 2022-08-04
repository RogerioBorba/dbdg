import { fetchAsWMSCapabilitiesObject } from "$lib/ogc/wms/WMSCapabilitiesObject";
import { catalogos_servicos } from "$lib/inde/CatalogoINDE";
<<<<<<< HEAD
import {wmsKeywordObj} from "$lib/inde/wms/data/json_keywords";
export async function get({ request }) {
     return {
          status: 200,
          body:  wmsKeywordObj.keywords.sort()
=======
import {wmsKeywordObj} from "$lib/ogc/wms/data/json_keywords";
export async function get({ request }) {
     return {
          status: 200,
          body: {ordernadas: wmsKeywordObj.keywords.sort()}         
>>>>>>> 2c3dfee91367745607d20563049749a9ef6cf1e2
     };     
}