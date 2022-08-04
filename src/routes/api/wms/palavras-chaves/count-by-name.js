import {wmsKeywordObj} from "$lib/ogc/wms/data/json_keywords";


export async function get({ request }) {
    let countByName = {}
    for( let i = 0; i < wmsKeywordObj.keywords.length; i++) {
        let value = countByName[wmsKeywordObj.keywords[i]]
        if (value)
            countByName[wmsKeywordObj.keywords[i]] = value + 1
        else
            countByName[wmsKeywordObj.keywords[i]] = 1
    }
    const sorted = Object.entries(countByName).sort((a,b) => (a[1] < b[1]) ? 1 : ((b[1] < a[1]) ? -1 : 0))
    let sortedObjectArray = sorted.map( (arr) => {
        obj = {} 
        obj[arr[0]] = arr[1]
        return obj
    })
    return {
         status: 200,
         body:  sortedObjectArray
    };     
}