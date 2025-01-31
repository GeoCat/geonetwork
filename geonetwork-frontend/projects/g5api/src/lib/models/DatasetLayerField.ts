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
 * @interface DatasetLayerField
 */
export interface DatasetLayerField {
    /**
     * 
     * @type {string}
     * @memberof DatasetLayerField
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof DatasetLayerField
     */
    type?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DatasetLayerField
     */
    nullable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DatasetLayerField
     */
    defaultValue?: string;
}

/**
 * Check if a given object implements the DatasetLayerField interface.
 */
export function instanceOfDatasetLayerField(value: object): value is DatasetLayerField {
    return true;
}

export function DatasetLayerFieldFromJSON(json: any): DatasetLayerField {
    return DatasetLayerFieldFromJSONTyped(json, false);
}

export function DatasetLayerFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetLayerField {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'type': json['type'] == null ? undefined : json['type'],
        'nullable': json['nullable'] == null ? undefined : json['nullable'],
        'defaultValue': json['defaultValue'] == null ? undefined : json['defaultValue'],
    };
}

export function DatasetLayerFieldToJSON(value?: DatasetLayerField | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'type': value['type'],
        'nullable': value['nullable'],
        'defaultValue': value['defaultValue'],
    };
}

