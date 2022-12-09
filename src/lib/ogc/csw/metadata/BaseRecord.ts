export class Record {
    nodeValue(node) {
        return node['#text'] || node['#cdata-section']
    }
}