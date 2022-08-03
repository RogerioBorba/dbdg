import {styleObj} from "$lib/inde/wms/data/json_styles";

export async function get({ request }) {
    return {
         status: 200,
         body:  styleObj.styles.length
    };     
}