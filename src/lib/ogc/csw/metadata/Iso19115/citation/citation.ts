import { Base } from "../Base";
import type { Identifier } from "../metadata/metadata";

//Information about the series, or aggregate dataset, to which a dataset belongs.
export class Series extends Base {
    constructor(jsonXmlObject: Object) {
        super(jsonXmlObject)       
    }

    //Information identifying the issue of the series.
    getIssueIdentification(): string { return ''}

    //Name of the series, or aggregate dataset, of which the dataset is a part.
    getName(): string { return ''}

    //Details on which pages of the publication the article was published.
    getPage(): string { return ''}

}


export class CitationDate extends Base {
    constructor(jsonXmlObject: Object) {
        super(jsonXmlObject)       
    }

    //Reference date for the cited resource.
    getDate(): Date {
        
        return this.nodeValueFor("gmd:date", "gco:DateTime"); 
    }

    //Event used for reference date. DateType(CREATION, PUBLICATION, REVISION)
    getDateType(): string {
        return this.nodeValueFor("gmd:dateType", "gmd:CI_DateTypeCode"); 
    }
    
}


//Telephone numbers for contacting the responsible individual or organization.
export class Telefone extends Base {
    constructor(jsonXmlObject: Object) {
        super(jsonXmlObject)       
    }

    //Telephone numbers of a facsimile machine for the responsible organization or individual.
    getFacsimiles(): string[] {
        return []
    }

    //Telephone numbers by which individuals can speak to the responsible organization or individual.
    getVoices(): string[] {
        return []
    }
}


/*
Information about on-line sources from which the dataset, specification, 
or community profile name and extended metadata elements can be obtained.
*/
export class OnlineResource extends Base {
    constructor(jsonXmlObject: Object) {
        super(jsonXmlObject)       
    }

    //Name of an application profile that can be used with the online resource.
    getApplicationProfile(): string {
        return ''
    }

    //Detailed text description of what the online resource is/does.
    getDescription(): string {
        return ''
    }

    //Code for function performed by the online resource. OnLineFunction(DOWNLOAD, INFORMATION, OFFLINE_ACCESS, ORDER, SEARCH)
    getFunction(): string {
        return ''
    }

    //Location (address) for on-line access using a Uniform Resource Locator address or similar addressing scheme such as "http://www.statkart.no/isotc211"
    getLinkage(): string {
        return ''
    }

    //Name of the online resource.
    getName(): string {
        return ''
    }

    //Connection protocol to be used.
    getProtocol(): string {
        return ''
    }




}

export class Address extends Base {
    constructor(jsonXmlObject: Object) {
        super(jsonXmlObject)       
    }
    
    //State, province of the location.
    getAdministrativeArea(): string {
        let dt = this.data["gmd:administrativeArea"]["gmd:CI_UFCode"]["@attributes"].codeListValue
        if (dt)
            return dt

        return this.data["gmd:administrativeArea"]
    }
    
    //The city of the location.
    getCity(): string {
        return this.nodeValueFor("gmd:city","gco:CharacterString")
    }

    //Country of the physical address.    
    getCountry(): string {
        return this.nodeValueFor("gmd:country", "gco:CharacterString")
    }

    //Address line for the location (as described in ISO 11180, Annex A).
    getDeliveryPoints(): string[] {
        
        return this.nodeValueFor("gmd:deliveryPoint", "gco:CharacterString")
    }
    
    //Address of the electronic mailbox of the responsible organization or individual.
    getElectronicMailAddresses(): string[] {
        return []
    }

    //ZIP or other postal code.    
    getPostalCode(): string {
        return ''
    }
}


/*Information required to enable contact with the responsible person and/or organization.
*/
export class Contact extends Base {
    constructor(jsonXmlObject: Object) {
        super(jsonXmlObject)       
    }
    
    /*Physical and email address at which the organization or individual may be contacted.
    Deprecated. As of ISO 19115:2014, replaced by getAddresses().
    */
    getAddress(): Address {
        let dt = this.data["gmd:address"]["gmd:CI_Address"]
        return new Address(dt)
    }

    //Physical and email addresses at which the organization or individual may be contacted.
    getAddresses() {
        return []
    }

    
    //Supplemental instructions on how or when to contact the individual or organization.
    getContactInstructions(): string {
        return ''
    }

    //Time period (including time zone) when individuals can contact the organization or individual.
    getHoursOfService(): string {
        return ''
    }

    //On-line information that can be used to contact the individual or organization.
    getOnlineResource(): OnlineResource {
        return new OnlineResource()
    }

    //Telephone numbers at which the organization or individual may be contacted.
    getPhone(): Telefone {
        return new Telefone()
    }


}
/*Identification of, and means of communication with, person(s) and organizations associated with the dataset.
As of ISO 19115:2014, the ResponsibleParty type has been replaced by Responsibility to allow more flexible associations of individuals, organisations, and roles.
*/
export class ResponsibleParty extends Base {
    constructor(jsonXmlObject: Object) {
        super(jsonXmlObject)       
    }

    /*Address of the responsible party.
    Deprecated. As of ISO 19115:2014, replaced by Party.getContactInfo().
    */
    getContactInfo(): Contact {
        let dt = this.data["gmd:contactInfo"]["gmd:CI_Contact"]
        return new Contact(dt)
    }

    //Name of the responsible person- surname, given name, title separated by a delimiter.
    getIndividualName(): string {
        return ''
    }

    //Name of the responsible organization.
    getOrganisationName(): string {
        return this.nodeValueFor("gmd:organisationName", "gco:CharacterString")
    }

    //Role or position of the responsible person.
    getPositionName(): string {
        return ''
    }

    //Function performed by the responsible party. Role(AUTHOR, CUSTODIAN, DISTRIBUTOR, ORIGINATOR, OWNER...)
    getRole(): string {
        return this.nodeValue(this.data["gmd:role"]["gmd:CI_RoleCode"])
    }
}

export class Citation extends Base {
    constructor(jsonXmlObject: object) {
        super(jsonXmlObject)    
        
        //console.log("COSTRBUTOR: ", this.data)   
        //this.title = this.data["gmd:title"]["gmx:Anchor"]["#text"]
    }

    //Short name or other language name by which the cited information is known.
    getAlternateTitles() {
    }
    
    /*Name and position information for an individual or organization that is responsible for the resource.
     As of ISO 19115:2014, the ResponsibleParty type has been replaced by Responsibility to allow more flexible associations of individuals, organisations, and roles
    */
    getCitedResponsibleParties() {
        if (!this.data["gmd:citedResponsibleParty"])
            return undefined
        let colResponsibleParty = this.data["gmd:citedResponsibleParty"]["gmd:CI_ResponsibleParty"]
        if (Array.isArray(colResponsibleParty))
            return colResponsibleParty.map(obj => new ResponsibleParty(obj))
        else
            return [new ResponsibleParty(colResponsibleParty)]
        return colResponsibleParty
    }

    //Common title with holdings note.    
    getCollectiveTitle(){}

    //Reference date for the cited resource.
    getDates(): (CitationDate[]| undefined) {
        let dt = this.data["gmd:date"]["gmd:CI_Date"]
        if (dt) {
            if (Array.isArray(dt))
                return dt.map(obj => new CitationDate(obj))
            else
               return [new CitationDate(dt) ] 
        } else
            return undefined
    }

    //Version of the cited resource.    
    getEdition(): string {
        return ''
    }

    //Date of the edition, or null if none.
    getEditionDate(): Date {
        return new Date('')
    }

    //Unique identifier for the resource.
    getIdentifiers(): Identifier[] {
        return []
    }

    //International Standard Book Number, or null if none.
    getISBN(): string {
        return this.nodeValueFor("gmd:ISBN","gco:CharacterString")
    }

    //International Standard Serial Number, or null if none.
    getISSN(): string {
        return this.nodeValueFor("gmd:ISSN","gco:CharacterString")
    }
    
    //Other information required to complete the citation that is not recorded elsewhere.
    getOtherCitationDetails(): string {
        return ''

    }
    
    //Mode in which the resource is represented, or an empty string if none.
    //PresentationForm(DOCUMENT_DIGITAL, DOCUMENT_HARDCOPY, IMAGE_DIGITAL, IMAGE_HARDCOPY,MAP_DIGITAL...)
    getPresentationForms(): string{
        return ''
    }

    //Information about the series, or aggregate dataset, of which the dataset is a part.
    getSeries(): Series[] {
        return []
    }

    //Name by which the cited resource is known.
    getTitle(){ 
        return this.nodeValueFor("gmd:title","gco:CharacterString")
    }
}