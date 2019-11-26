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


/**
 * Create/Update PartnerRelation
 */
export interface BaseRelation { 
    /**
     * The date at which the relationship ended. If the relationship is ongoing, endDate is null
     */
    endDate?: string;
    /**
     * Type of relationship
     */
    relationType: string;
    /**
     * The partner policy holder id the target partner is linked to
     */
    sourcePartner: number;
    /**
     * The date at which the relationship started
     */
    startDate?: string;
    /**
     * Timestamp of the last update
     */
    statusId?: string;
    /**
     * The partner policy holder id with whom the source partner is linked
     */
    targetPartner: number;
    /**
     * Type of relationship
     */
    type: BaseRelation.TypeEnum;
    /**
     * ID of the user who created/updated the relationship
     */
    userId: number;
}
export namespace BaseRelation {
    export type TypeEnum = 'family' | 'ownership' | 'proxy';
    export const TypeEnum = {
        Family: 'family' as TypeEnum,
        Ownership: 'ownership' as TypeEnum,
        Proxy: 'proxy' as TypeEnum
    };
}
