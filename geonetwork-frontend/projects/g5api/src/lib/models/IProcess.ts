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
import type { ProcessParameter } from './ProcessParameter';
import {
    ProcessParameterFromJSON,
    ProcessParameterFromJSONTyped,
    ProcessParameterToJSON,
} from './ProcessParameter';

/**
 * 
 * @export
 * @interface IProcess
 */
export interface IProcess {
    /**
     * 
     * @type {string}
     * @memberof IProcess
     */
    name?: string;
    /**
     * 
     * @type {Array<ProcessParameter>}
     * @memberof IProcess
     */
    parameters?: Array<ProcessParameter>;
}

/**
 * Check if a given object implements the IProcess interface.
 */
export function instanceOfIProcess(value: object): value is IProcess {
    return true;
}

export function IProcessFromJSON(json: any): IProcess {
    return IProcessFromJSONTyped(json, false);
}

export function IProcessFromJSONTyped(json: any, ignoreDiscriminator: boolean): IProcess {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'parameters': json['parameters'] == null ? undefined : ((json['parameters'] as Array<any>).map(ProcessParameterFromJSON)),
    };
}

export function IProcessToJSON(value?: IProcess | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'parameters': value['parameters'] == null ? undefined : ((value['parameters'] as Array<any>).map(ProcessParameterToJSON)),
    };
}

