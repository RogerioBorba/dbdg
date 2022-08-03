import { keywordsCountByName } from "$lib/inde/wms/keywords/util";

export async function get({ request }) {
    let sortedObjectArray = keywordsCountByName()
    return {
         status: 200,
         body:  sortedObjectArray
    };     
}