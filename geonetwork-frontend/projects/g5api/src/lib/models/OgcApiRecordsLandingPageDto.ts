/* tslint:disable */
/* eslint-disable */
/**
 * GeoNetwork API
 * This API exposes endpoints to GeoNetwork API.
 *
 * The version of the OpenAPI document: 5.0.0
 * Contact: geonetwork-users@lists.sourceforge.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { OgcApiRecordsLinkTemplateDto } from './OgcApiRecordsLinkTemplateDto';
import {
    OgcApiRecordsLinkTemplateDtoFromJSON,
    OgcApiRecordsLinkTemplateDtoFromJSONTyped,
    OgcApiRecordsLinkTemplateDtoToJSON,
} from './OgcApiRecordsLinkTemplateDto';
import type { OgcApiRecordsLinkDto } from './OgcApiRecordsLinkDto';
import {
    OgcApiRecordsLinkDtoFromJSON,
    OgcApiRecordsLinkDtoFromJSONTyped,
    OgcApiRecordsLinkDtoToJSON,
} from './OgcApiRecordsLinkDto';

/**
 * 
 * @export
 * @interface OgcApiRecordsLandingPageDto
 */
export interface OgcApiRecordsLandingPageDto {
    /**
     * 
     * @type {string}
     * @memberof OgcApiRecordsLandingPageDto
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof OgcApiRecordsLandingPageDto
     */
    description?: string;
    /**
     * 
     * @type {Array<OgcApiRecordsLinkDto>}
     * @memberof OgcApiRecordsLandingPageDto
     */
    links: Array<OgcApiRecordsLinkDto>;
    /**
     * 
     * @type {Array<OgcApiRecordsLinkTemplateDto>}
     * @memberof OgcApiRecordsLandingPageDto
     */
    linkTemplates?: Array<OgcApiRecordsLinkTemplateDto>;
}

/**
 * Check if a given object implements the OgcApiRecordsLandingPageDto interface.
 */
export function instanceOfOgcApiRecordsLandingPageDto(value: object): value is OgcApiRecordsLandingPageDto {
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function OgcApiRecordsLandingPageDtoFromJSON(json: any): OgcApiRecordsLandingPageDto {
    return OgcApiRecordsLandingPageDtoFromJSONTyped(json, false);
}

export function OgcApiRecordsLandingPageDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgcApiRecordsLandingPageDto {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'] == null ? undefined : json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'links': ((json['links'] as Array<any>).map(OgcApiRecordsLinkDtoFromJSON)),
        'linkTemplates': json['linkTemplates'] == null ? undefined : ((json['linkTemplates'] as Array<any>).map(OgcApiRecordsLinkTemplateDtoFromJSON)),
    };
}

export function OgcApiRecordsLandingPageDtoToJSON(value?: OgcApiRecordsLandingPageDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'title': value['title'],
        'description': value['description'],
        'links': ((value['links'] as Array<any>).map(OgcApiRecordsLinkDtoToJSON)),
        'linkTemplates': value['linkTemplates'] == null ? undefined : ((value['linkTemplates'] as Array<any>).map(OgcApiRecordsLinkTemplateDtoToJSON)),
    };
}

