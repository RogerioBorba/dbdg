import {wmsKeywordObj} from "$lib/ogc/wms/data/json_keywords";

export async function get({ request }) {
    return {
         status: 200,
         body:  wmsKeywordObj.keywords.length
    };     
}