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
/**
 * 
 * @export
 * @interface OgcApiRecordsComponentsDto
 */
export interface OgcApiRecordsComponentsDto {
    /**
     * 
     * @type {object}
     * @memberof OgcApiRecordsComponentsDto
     */
    schemas?: object;
    /**
     * 
     * @type {object}
     * @memberof OgcApiRecordsComponentsDto
     */
    responses?: object;
    /**
     * 
     * @type {object}
     * @memberof OgcApiRecordsComponentsDto
     */
    parameters?: object;
    /**
     * 
     * @type {object}
     * @memberof OgcApiRecordsComponentsDto
     */
    examples?: object;
    /**
     * 
     * @type {object}
     * @memberof OgcApiRecordsComponentsDto
     */
    requestBodies?: object;
    /**
     * 
     * @type {object}
     * @memberof OgcApiRecordsComponentsDto
     */
    headers?: object;
    /**
     * 
     * @type {object}
     * @memberof OgcApiRecordsComponentsDto
     */
    securitySchemes?: object;
    /**
     * 
     * @type {object}
     * @memberof OgcApiRecordsComponentsDto
     */
    links?: object;
    /**
     * 
     * @type {object}
     * @memberof OgcApiRecordsComponentsDto
     */
    callbacks?: object;
}

/**
 * Check if a given object implements the OgcApiRecordsComponentsDto interface.
 */
export function instanceOfOgcApiRecordsComponentsDto(value: object): value is OgcApiRecordsComponentsDto {
    return true;
}

export function OgcApiRecordsComponentsDtoFromJSON(json: any): OgcApiRecordsComponentsDto {
    return OgcApiRecordsComponentsDtoFromJSONTyped(json, false);
}

export function OgcApiRecordsComponentsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgcApiRecordsComponentsDto {
    if (json == null) {
        return json;
    }
    return {
        
        'schemas': json['schemas'] == null ? undefined : json['schemas'],
        'responses': json['responses'] == null ? undefined : json['responses'],
        'parameters': json['parameters'] == null ? undefined : json['parameters'],
        'examples': json['examples'] == null ? undefined : json['examples'],
        'requestBodies': json['requestBodies'] == null ? undefined : json['requestBodies'],
        'headers': json['headers'] == null ? undefined : json['headers'],
        'securitySchemes': json['securitySchemes'] == null ? undefined : json['securitySchemes'],
        'links': json['links'] == null ? undefined : json['links'],
        'callbacks': json['callbacks'] == null ? undefined : json['callbacks'],
    };
}

export function OgcApiRecordsComponentsDtoToJSON(value?: OgcApiRecordsComponentsDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schemas': value['schemas'],
        'responses': value['responses'],
        'parameters': value['parameters'],
        'examples': value['examples'],
        'requestBodies': value['requestBodies'],
        'headers': value['headers'],
        'securitySchemes': value['securitySchemes'],
        'links': value['links'],
        'callbacks': value['callbacks'],
    };
}

