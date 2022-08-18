import { Base } from "./Base";
import { Citation } from "./citation/citation";

/* Interface 
getKeywordClass()
getKeywords()
getThesaurusName()
getType()
*/
class Keywords extends Base {
    keywords: string[];
    thesaurusName: (Citation | undefined);
    keywordType: string;
    type: string;

    constructor(jsonXmlObject: Object) {
        super(jsonXmlObject);
        this.initalizeThesaurusName();
        this.initializeType();
        this.initializeKeywords();
    }

    initializeKeywords(): void {
        if(this.data["gmd:keyword"]) {
            let keys = this.data["gmd:keyword"]
            if(Array.isArray(keys))
                this.keywords = keys.map(key => this.nodeValue(key["gco:CharacterString"]))
            else
                this.keywords = [this.nodeValue(keys["gco:CharacterString"])]
        } else
            this.keywords = []
    }
    //Commonly used word(s) or formalised word(s) or phrase(s) used to describe the subject.
    getKeywords(): string[] {
        return this.keywords
    }

    initializeType(): void {
        this.type = this.data["gmd:type"]?this.data["gmd:type"]["gmd:MD_KeywordTypeCode"]["@attributes"].codeListValue: undefined
    }
    //Subject matter used to group similar keywords.
    getType(): (string | undefined) {
        return this.type || undefined

    }

    initalizeThesaurusName(): void {
        let tn = this.data["gmd:thesaurusName"]
        if (!tn)
            this.thesaurusName = undefined
        else
            this.thesaurusName = new Citation(tn["gmd:CI_Citation"])
    }
    //Name of the formally registered thesaurus or a similar authoritative source of keywords.
    getThesaurusName(): (Citation | undefined) {
            return this.thesaurusName
    }


}


/* Interface
$getAbstract()
getAdditionalDocumentations()
getAggregationInfo()
getAssociatedResources()
$getCitation()
getCredits()
$getDescriptiveKeywords()
getExtents()
getGraphicOverviews()
getPointOfContacts()
getProcessingLevel()
getPurpose()
getResourceConstraints()
getResourceFormats()
getResourceMaintenances()
getResourceSpecificUsages()
getSpatialRepresentationTypes()
getSpatialResolutions()
getStatus()
getTemporalResolutions()
getTopicCategories()
*/
export class MDIdentification extends Base {
    constructor(jsonXmlObject: Object) {
        super(jsonXmlObject)       
    }

    //Brief narrative summary of the resource.
    getAbstract() {       
        return this.nodeValueFor("gmd:abstract", "gco:CharacterString")
    }

    // from MDDataIdentification
    getCharacterSets() {}

    //Returns a collection of Keywords that is, category keywords, their type, and reference source.
    getDescriptiveKeywords() {
        let descriptKeys = this.data["gmd:descriptiveKeywords"]
        
        if (!descriptKeys)
            return []
        if (Array.isArray(descriptKeys)) {
            let keyswords = descriptKeys.map(obj => new Keywords(obj["gmd:MD_Keywords"]))
            return keyswords
        }

        let keywordObj = descriptKeys["gmd:MD_Keywords"]
        
        if (!keywordObj)
            return []
        let keywords = Array.isArray(keywordObj)?keywordObj: [keywordObj]
        return keywords.map(key => new Keywords(key))
    }

    //Summary of the intentions with which the resource was developed.
    getPurpose() {
        return this.nodeValueFor("gmd:purpose","gco:CharacterString")
    }

     //Status of the resource.   
    getStatus() {
        let status = this.data["gmd:status"]
        if (!status)
            return undefined
        return status["gmd:MD_ProgressCode"]["@attributes"].codeListValue
    }

    getCitation(): (Citation | undefined) {
        let citRel = this.data["gmd:citation"]
        if (!citRel)
            return undefined
        return new Citation (citRel["gmd:CI_Citation"])
    }

}


/* SubInterface
getCharacterSets()
getEnvironmentDescription()
getLanguages()
getLocalesAndCharsets()
getSupplementalInformation()
*/
export class MDDataIdentification extends MDIdentification {
    constructor(jsonXmlObject: Object) {
        super(jsonXmlObject)       
    }
    
    //Deprecated. Replaced by getLocalesAndCharsets().values().
    getCharacterSets() {
        let data = this.data["gmd:characterSet"]
        if (!data)
            return undefined
        let charSets = Array.isArray(data)? data: [data]
        return charSets.map( (charSetObj) => { return charSetObj["gmd:MD_CharacterSetCode"]["@attributes"].codeListValue})
    }
}


/* SubInterface
getAccessProperties()
getContainsChain()
getContainsOperations()
getCoupledResources()
getCouplingType()
getOperatedDatasets()
getOperatesOn()
getProfiles()
getServiceStandards()
getServiceType()
getServiceTypeVersions()
*/
export class MDServiceIdentification extends MDIdentification {
    constructor(jsonXmlObject: Object) {
        super(jsonXmlObject)       
    }
}