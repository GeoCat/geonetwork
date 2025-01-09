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
import type { OgcApiRecordsThemeConceptsInnerDto } from './OgcApiRecordsThemeConceptsInnerDto';
import {
    OgcApiRecordsThemeConceptsInnerDtoFromJSON,
    OgcApiRecordsThemeConceptsInnerDtoFromJSONTyped,
    OgcApiRecordsThemeConceptsInnerDtoToJSON,
} from './OgcApiRecordsThemeConceptsInnerDto';

/**
 * A knowledge organization system used to classify the resource.
 * @export
 * @interface OgcApiRecordsThemeDto
 */
export interface OgcApiRecordsThemeDto {
    /**
     * One or more entity/concept identifiers from this knowledge system. it is recommended that a resolvable URI be used for each entity/concept identifier.
     * @type {Array<OgcApiRecordsThemeConceptsInnerDto>}
     * @memberof OgcApiRecordsThemeDto
     */
    concepts: Array<OgcApiRecordsThemeConceptsInnerDto>;
    /**
     * An identifier for the knowledge organization system used to classify the resource.  It is recommended that the identifier be a resolvable URI.  The list of schemes used in a searchable catalog can be determined by inspecting the server's OpenAPI document or, if the server implements CQL2, by exposing a queryable (e.g. named `scheme`) and enumerating the list of schemes in the queryable's schema definition.
     * @type {string}
     * @memberof OgcApiRecordsThemeDto
     */
    scheme: string;
}

/**
 * Check if a given object implements the OgcApiRecordsThemeDto interface.
 */
export function instanceOfOgcApiRecordsThemeDto(value: object): value is OgcApiRecordsThemeDto {
    if (!('concepts' in value) || value['concepts'] === undefined) return false;
    if (!('scheme' in value) || value['scheme'] === undefined) return false;
    return true;
}

export function OgcApiRecordsThemeDtoFromJSON(json: any): OgcApiRecordsThemeDto {
    return OgcApiRecordsThemeDtoFromJSONTyped(json, false);
}

export function OgcApiRecordsThemeDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgcApiRecordsThemeDto {
    if (json == null) {
        return json;
    }
    return {
        
        'concepts': ((json['concepts'] as Array<any>).map(OgcApiRecordsThemeConceptsInnerDtoFromJSON)),
        'scheme': json['scheme'],
    };
}

export function OgcApiRecordsThemeDtoToJSON(value?: OgcApiRecordsThemeDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'concepts': ((value['concepts'] as Array<any>).map(OgcApiRecordsThemeConceptsInnerDtoToJSON)),
        'scheme': value['scheme'],
    };
}
