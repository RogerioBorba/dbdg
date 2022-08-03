import {countByName} from "$lib/inde/wms/styles/util";
import { subarray } from "$lib/inde/wms/util";
export async function get({ params }) {
    let arrParam = params['id'].split('&')
    try {
        let arr = subarray(countByName(), parseInt(arrParam[0]), parseInt(arrParam[1]))
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