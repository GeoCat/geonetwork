/* tslint:disable */
/* eslint-disable */
/**
 * GeoNetwork 4.4.7 OpenAPI Documentation
 * This is the description of the GeoNetwork OpenAPI. Use this API to manage your catalog.
 *
 * The version of the OpenAPI document: 4.4.7
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
 * @interface AssociatedRecord
 */
export interface AssociatedRecord {
  /**
   *
   * @type {string}
   * @memberof AssociatedRecord
   */
  id?: string;
  /**
   *
   * @type {object}
   * @memberof AssociatedRecord
   */
  source?: object;
  /**
   *
   * @type {string}
   * @memberof AssociatedRecord
   */
  origin?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof AssociatedRecord
   */
  properties?: { [key: string]: string };
}

/**
 * Check if a given object implements the AssociatedRecord interface.
 */
export function instanceOfAssociatedRecord(
  value: object
): value is AssociatedRecord {
  return true;
}

export function AssociatedRecordFromJSON(json: any): AssociatedRecord {
  return AssociatedRecordFromJSONTyped(json, false);
}

export function AssociatedRecordFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AssociatedRecord {
  if (json == null) {
    return json;
  }
  return {
    id: json['_id'] == null ? undefined : json['_id'],
    source: json['_source'] == null ? undefined : json['_source'],
    origin: json['origin'] == null ? undefined : json['origin'],
    properties: json['properties'] == null ? undefined : json['properties'],
  };
}

export function AssociatedRecordToJSON(value?: AssociatedRecord | null): any {
  if (value == null) {
    return value;
  }
  return {
    _id: value['id'],
    _source: value['source'],
    origin: value['origin'],
    properties: value['properties'],
  };
}
