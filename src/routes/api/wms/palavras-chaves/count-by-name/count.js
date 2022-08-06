import { keywordsCountByName } from "$lib/inde/wms/keywords/util";

export async function get({ request }) {
    return {
         status: 200,
         body:  keywordsCountByName().length
    };     
}