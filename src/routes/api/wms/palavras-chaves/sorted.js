import { fetchAsWMSCapabilitiesObject } from "$lib/ogc/wms/WMSCapabilitiesObject";
import { catalogos_servicos } from "$lib/inde/CatalogoINDE";
import {wmsKeywordObj} from "$lib/ogc/wms/data/json_keywords";
export async function get({ request }) {
     return {
          status: 200,
          body: {ordernadas: wmsKeywordObj.keywords.sort()}         
     };     
}