import {styleObj} from '$lib/inde/wms/data/json_styles'
export function countByName() {
    let countName = {}
    for( let i = 0; i < styleObj.styles.length; i++) {
        let value = countName[styleObj.styles[i].name]
        if (value)
            countName[styleObj.styles[i].name] = value + 1
        else
            countName[styleObj.styles[i].name] = 1
    }
    const sorted = Object.entries(countName).sort((a,b) => (a[1] < b[1]) ? 1 : ((b[1] < a[1]) ? -1 : 0))
    return sorted.map( (arr) => {
        obj = {} 
        obj[arr[0]] = arr[1]
        return obj
    })
}
