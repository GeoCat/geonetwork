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
 * @interface RegionResponse
 */
export interface RegionResponse {
  /**
   *
   * @type {string}
   * @memberof RegionResponse
   */
  categoryId?: string;
  /**
   *
   * @type {number}
   * @memberof RegionResponse
   */
  east?: number;
  /**
   *
   * @type {boolean}
   * @memberof RegionResponse
   */
  hasGeom?: boolean;
  /**
   *
   * @type {string}
   * @memberof RegionResponse
   */
  id?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof RegionResponse
   */
  label?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof RegionResponse
   */
  north?: number;
  /**
   *
   * @type {number}
   * @memberof RegionResponse
   */
  south?: number;
  /**
   *
   * @type {number}
   * @memberof RegionResponse
   */
  west?: number;
}

/**
 * Check if a given object implements the RegionResponse interface.
 */
export function instanceOfRegionResponse(
  value: object
): value is RegionResponse {
  return true;
}

export function RegionResponseFromJSON(json: any): RegionResponse {
  return RegionResponseFromJSONTyped(json, false);
}

export function RegionResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): RegionResponse {
  if (json == null) {
    return json;
  }
  return {
    categoryId: json['categoryId'] == null ? undefined : json['categoryId'],
    east: json['east'] == null ? undefined : json['east'],
    hasGeom: json['hasGeom'] == null ? undefined : json['hasGeom'],
    id: json['id'] == null ? undefined : json['id'],
    label: json['label'] == null ? undefined : json['label'],
    north: json['north'] == null ? undefined : json['north'],
    south: json['south'] == null ? undefined : json['south'],
    west: json['west'] == null ? undefined : json['west'],
  };
}

export function RegionResponseToJSON(value?: RegionResponse | null): any {
  if (value == null) {
    return value;
  }
  return {
    categoryId: value['categoryId'],
    east: value['east'],
    hasGeom: value['hasGeom'],
    id: value['id'],
    label: value['label'],
    north: value['north'],
    south: value['south'],
    west: value['west'],
  };
}
