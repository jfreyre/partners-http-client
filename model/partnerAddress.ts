/**
 * Partner API
 * ## Version 5.4.0-SNAPSHOT  ## Information * This service provides an API to manage partners and their related subdomains   ## Contact <b>Authors</b>   <p>     <a href=\"mailto:sdd@vaudoise.ch\">SDD</a>     <a href=\"mailto:jue@vaudoise.ch\">JUE</a>     <a href=\"mailto:gme@vaudoise.ch\">GME</a>     <a href=\"mailto:sdt@vaudoise.ch\">SDT</a>     <a href=\"mailto:hua@vaudoise.ch\">HUA</a>     <a href=\"mailto:emp@vaudoise.ch\">EMP</a>     <a href=\"mailto:rla@vaudoise.ch\">RLA</a> </p>   ___ 
 *
 * OpenAPI spec version: v5
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface PartnerAddress { 
    /**
     * 2 character Canton Code
     */
    canton?: string;
    /**
     * City name
     */
    city: string;
    /**
     * Address or recipient optional complement
     */
    complement?: string;
    /**
     * 2 character Country ISO Code
     */
    country: string;
    /**
     * ID of the address
     */
    id: number;
    /**
     * Order in the list of addresses
     */
    order: number;
    /**
     * City postcode
     */
    postCode: string;
    /**
     * Recipient : if this information is present, it should be considered as the partner name in the address
     */
    recipient?: string;
    /**
     * Street
     */
    street: string;
    /**
     * Type of the address (Enum). Warning: An AIA address is not editable and must be used cautiously. This latter is a copy of the address used to create a tax certificate and may be out-of-date
     */
    type: PartnerAddress.TypeEnum;
}
export namespace PartnerAddress {
    export type TypeEnum = 'UNDEFINED' | 'MAIN' | 'PROFESSIONAL' | 'SECONDARY' | 'POSTAL' | 'POST_PAID' | 'SUMMONS' | 'AIA' | 'CORRESPONDENCE';
    export const TypeEnum = {
        UNDEFINED: 'UNDEFINED' as TypeEnum,
        MAIN: 'MAIN' as TypeEnum,
        PROFESSIONAL: 'PROFESSIONAL' as TypeEnum,
        SECONDARY: 'SECONDARY' as TypeEnum,
        POSTAL: 'POSTAL' as TypeEnum,
        POSTPAID: 'POST_PAID' as TypeEnum,
        SUMMONS: 'SUMMONS' as TypeEnum,
        AIA: 'AIA' as TypeEnum,
        CORRESPONDENCE: 'CORRESPONDENCE' as TypeEnum
    };
}
