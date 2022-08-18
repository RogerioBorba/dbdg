import { objectEnumValues } from '@prisma/client/runtime'
import {Base} from '../Base'
import { Citation } from '../citation/citation'
import {MDDataIdentification, MDServiceIdentification} from '../MD_Identification'

export class Identifier extends Base {
    static AUTHORITY_KEY: String;
    static CODE_KEY: string;

    constructor(jsonXmlObject: Object) {
        super(jsonXmlObject)    
    }

    //Organization or party responsible for definition and maintenance of the code.
    getAuthority(): Citation {
        return new Citation()
    }

    //Alphanumeric value identifying an instance in the namespace.
    getCode(): string {
        return ''
    }

}
/*
Interface
getAcquisitionInformation()
getAlternativeMetadataReferences()
getApplicationSchemaInfo()
$getCharacterSet()
getContacts()
getContentInfo()
getDataQualityInfo()
getDataSetUri()
getDateInfo()
$getDateStamp()
getDistributionInfo()
$getFileIdentifier()
getHierarchyLevelNames()
getHierarchyLevels()
getIdentificationInfo()
$getLanguage()
getLocales()
getLocalesAndCharsets()
getMetadataConstraints()
getMetadataExtensionInfo()
getMetadataIdentifier()
getMetadataLinkages()
getMetadataMaintenance()
getMetadataProfiles()
getMetadataScopes()
$getMetadataStandardName()
getMetadataStandards()
$getMetadataStandardVersion()
getParentIdentifier()
getParentMetadata()
getPortrayalCatalogueInfo()
getReferenceSystemInfo()
getResourceLineages()
getSpatialRepresentationInfo()
*/
export class Metadata extends Base {
    constructor(jsonXmlObject: Object) {
            super(jsonXmlObject)
            
    }
    
    //Deprecated.As of GeoAPI 3.1, replaced by getLocalesAndCharsets().values().
    getCharacterSet() {
        return this.data['gmd:characterSet']
    }
    
    //Deprecated.As of GeoAPI 3.1, replaced by getLocalesAndCharsets().values().
    getCharacterSetCode() {
        if(!this.getCharacterSet())
            return undefined
        return this.getCharacterSet()["gmd:MD_CharacterSetCode"]["@attributes"]['codeListValue']    
    }
    
    //Deprecated. As of ISO 19115:2014, replaced by getMetadataIdentifier() in order to include the codespace attribute.
    getFileIdentifier() {
        return this.nodeValueFor("gmd:fileIdentifier", "gco:CharacterString")
    }

    //Deprecated. As of ISO 19115:2014, replaced by getDateInfo().
    getDateStamp() {
        return this.nodeValueFor("gmd:dateStamp","gco:DateTime")
    }

    //Deprecated. As of GeoAPI 3.1, replaced by getLocalesAndCharsets().
    getLanguage() {
        let lg = this.nodeValueFor("gmd:language","gco:CharacterString")
        if (!lg)
            return this.data["gmd:language"]["gmd:LanguageCode"]["@attributes"].codeListValue
        return lg
    }
    
    //Deprecated. As of ISO 19115:2014, replaced by getMetadataStandards() followed by Citation.getTitle().
    getMetadataStandardName() {
        return this.nodeValueFor("gmd:metadataStandardName","gco:CharacterString")
    }
        
    //Deprecated. As of ISO 19115:2014, replaced by getMetadataStandards() followed by Citation.getEdition().
    getMetadataStandardVersion(){
        return this.nodeValueFor("gmd:metadataStandardVersion","gco:CharacterString")
    }

    //Basic information required to uniquely identify a resource or resources. MD_Metadata has 1..*
    getIdentificationInfo() {
        let ii = this.data["gmd:identificationInfo"]
        let arrayII =  Array.isArray(ii)? ii: [ii]
        return arrayII.map( (iinfo) => {
            let obj = iinfo["gmd:MD_DataIdentification"]
            if (obj)
                return new MDDataIdentification(obj)
            obj = iinfo["gmd:MD_ServiceIdentification"]
            if (obj)
                return new MDServiceIdentification(obj)
        })
    }
}