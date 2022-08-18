export class Base {
    constructor(jsonXmlObject: object) {
        this.data = jsonXmlObject //data is an object has came from a piece of metadata's xml 
    }
    
    nodeValue(node) {
        if (!node)
            return undefined
        return node['#text'] || node['#cdata-section']
    }
    
    nodeValueFor(attributeOne: string, attributeTwo: string) {
        let obj = this.data[attributeOne]
        if (!obj)
            return undefined
        
        return this.nodeValue(obj[attributeTwo])
    }
}