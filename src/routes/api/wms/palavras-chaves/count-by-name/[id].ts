import { keywordsCountByName} from "$lib/inde/wms/keywords/util";
import { subarray } from "$lib/inde/wms/util"

export async function get({ params }) {
    try {
        let arrParam: [] = params['id'].split('&')
        let arr = subarray(keywordsCountByName(), parseInt(arrParam[0]), parseInt(arrParam[1]))
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