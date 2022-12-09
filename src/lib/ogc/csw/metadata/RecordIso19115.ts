import { Record } from './BaseRecord'
import {Metadata} from './Iso19115/metadata/metadata'

export class RecordISO19115 extends Record{
    constructor(jsonXmlObject: any) {
        super()
        this.jsonXmlObject = jsonXmlObject
        this.mdMetadata = undefined
    }
    getJsonXmlObject() {
        return this.jsonXmlObject
    }
    
    cswGetRecordByIdResponse() {
        return this.getJsonXmlObject()['csw:GetRecordByIdResponse']
    }

    gmd_MD_Metadata() {
        if(!this.cswGetRecordByIdResponse()) // Na DSG o xml não possui 'csw:GetRecordByIdResponse'
            return this.getJsonXmlObject()['gmd:MD_Metadata']
        return this.cswGetRecordByIdResponse()['gmd:MD_Metadata']    
    }
    
    getMDMetadata() {
        if (!this.mdMetadata) 
            this.mdMetadata = new Metadata(this.gmd_MD_Metadata())
        return this.mdMetadata   
    }

    setMDMetadata(jsonXmlObj) {
        this.mdMetadata = new Metadata(jsonXmlObj)
    }

    
}
