import {countByName} from '$lib/inde/wms/styles/util'

export async function get({ request }) {
    return {
         status: 200,
         body:  countByName()
    };     
}