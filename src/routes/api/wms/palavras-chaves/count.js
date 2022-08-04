<<<<<<< HEAD
import {wmsKeywordObj} from "$lib/inde/wms/data/json_keywords";
=======
import {wmsKeywordObj} from "$lib/ogc/wms/data/json_keywords";
>>>>>>> 2c3dfee91367745607d20563049749a9ef6cf1e2

export async function get({ request }) {
    return {
         status: 200,
         body:  wmsKeywordObj.keywords.length
    };     
}