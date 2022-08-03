import {wmsKeywordObj} from "$lib/inde/wms/data/json_keywords";
import { subarray } from "$lib/inde/wms/util";

export async function get({ params }) {
    try {
        let arrParam: [] = params['id'].split('&')
        let i:number = parseInt(arrParam[0])
        let e:number = parseInt(arrParam[1])
        let arr = subarray(wmsKeywordObj.keywords, i, e)
        return {
            status: 200,
            body:  arr
        };         
    } catch (error) {
        return {
            status: 500,
            body:  {erro: `Não foi possível responder a requisição. ${error.message}`}
        };         
    }    
}