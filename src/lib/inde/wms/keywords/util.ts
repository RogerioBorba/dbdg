import {wmsKeywordObj} from "$lib/inde/wms/data/json_keywords";
export function keywordsCountByName(): any[] {
    let countByName:object = {}
    for( let i = 0; i < wmsKeywordObj.keywords.length; i++) {
        let keyword:string = wmsKeywordObj.keywords[i]
        let value = countByName[keyword]
        if (value)
            countByName[keyword] = value + 1
        else
            countByName[keyword] = 1
    }
    const sorted = Object.entries(countByName).sort((a,b) => (a[1] < b[1]) ? 1 : ((b[1] < a[1]) ? -1 : 0))
    return sorted.map( (arr) => {
        let obj = {} 
        obj[arr[0]] = arr[1]
        return obj
    })
}

