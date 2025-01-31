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
 * @interface DataFormat
 */
export interface DataFormat {
    /**
     * 
     * @type {string}
     * @memberof DataFormat
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof DataFormat
     */
    dataType?: string;
    /**
     * 
     * @type {string}
     * @memberof DataFormat
     */
    rwFlag?: string;
    /**
     * 
     * @type {string}
     * @memberof DataFormat
     */
    description?: string;
}

/**
 * Check if a given object implements the DataFormat interface.
 */
export function instanceOfDataFormat(value: object): value is DataFormat {
    return true;
}

export function DataFormatFromJSON(json: any): DataFormat {
    return DataFormatFromJSONTyped(json, false);
}

export function DataFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataFormat {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'dataType': json['dataType'] == null ? undefined : json['dataType'],
        'rwFlag': json['rwFlag'] == null ? undefined : json['rwFlag'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function DataFormatToJSON(value?: DataFormat | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'dataType': value['dataType'],
        'rwFlag': value['rwFlag'],
        'description': value['description'],
    };
}

