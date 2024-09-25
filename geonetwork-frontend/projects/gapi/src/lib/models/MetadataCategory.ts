/* tslint:disable */
/* eslint-disable */
/**
 * GeoNetwork 4.4.6 OpenAPI Documentation
 * This is the description of the GeoNetwork OpenAPI. Use this API to manage your catalog.
 *
 * The version of the OpenAPI document: 4.4.6
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
 * @interface MetadataCategory
 */
export interface MetadataCategory {
  /**
   *
   * @type {number}
   * @memberof MetadataCategory
   */
  id?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof MetadataCategory
   */
  label?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof MetadataCategory
   */
  name?: string;
}

/**
 * Check if a given object implements the MetadataCategory interface.
 */
export function instanceOfMetadataCategory(
  value: object
): value is MetadataCategory {
  return true;
}

export function MetadataCategoryFromJSON(json: any): MetadataCategory {
  return MetadataCategoryFromJSONTyped(json, false);
}

export function MetadataCategoryFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): MetadataCategory {
  if (json == null) {
    return json;
  }
  return {
    id: json['id'] == null ? undefined : json['id'],
    label: json['label'] == null ? undefined : json['label'],
    name: json['name'] == null ? undefined : json['name'],
  };
}

export function MetadataCategoryToJSON(value?: MetadataCategory | null): any {
  if (value == null) {
    return value;
  }
  return {
    id: value['id'],
    label: value['label'],
    name: value['name'],
  };
}