export function subarray(anArray: any[], idxIni: number, idxEnd: number) {
    if ((idxIni - 1 < 0) ||  (idxIni -1 > anArray.length ))
        idxIni = 0
    if (idxEnd < 0 || idxEnd > anArray.length) 
        idxEnd = anArray.length
    let arr = anArray.slice(idxIni -1, idxEnd)     
    return arr
}