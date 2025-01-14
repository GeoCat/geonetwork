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
import type { RegionResponse } from './RegionResponse';
import {
  RegionResponseFromJSON,
  RegionResponseFromJSONTyped,
  RegionResponseToJSON,
} from './RegionResponse';
import type { CategoryResponse } from './CategoryResponse';
import {
  CategoryResponseFromJSON,
  CategoryResponseFromJSONTyped,
  CategoryResponseToJSON,
} from './CategoryResponse';

/**
 *
 * @export
 * @interface ListRegionsResponse
 */
export interface ListRegionsResponse {
  /**
   *
   * @type {{ [key: string]: CategoryResponse; }}
   * @memberof ListRegionsResponse
   */
  categories?: { [key: string]: CategoryResponse };
  /**
   *
   * @type {number}
   * @memberof ListRegionsResponse
   */
  count?: number;
  /**
   *
   * @type {Array<RegionResponse>}
   * @memberof ListRegionsResponse
   */
  region?: Array<RegionResponse>;
  /**
   *
   * @type {Array<RegionResponse>}
   * @memberof ListRegionsResponse
   */
  regions?: Array<RegionResponse>;
}

/**
 * Check if a given object implements the ListRegionsResponse interface.
 */
export function instanceOfListRegionsResponse(
  value: object
): value is ListRegionsResponse {
  return true;
}

export function ListRegionsResponseFromJSON(json: any): ListRegionsResponse {
  return ListRegionsResponseFromJSONTyped(json, false);
}

export function ListRegionsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ListRegionsResponse {
  if (json == null) {
    return json;
  }
  return {
    categories:
      json['categories'] == null
        ? undefined
        : mapValues(json['categories'], CategoryResponseFromJSON),
    count: json['count'] == null ? undefined : json['count'],
    region:
      json['region'] == null
        ? undefined
        : (json['region'] as Array<any>).map(RegionResponseFromJSON),
    regions:
      json['regions'] == null
        ? undefined
        : (json['regions'] as Array<any>).map(RegionResponseFromJSON),
  };
}

export function ListRegionsResponseToJSON(
  value?: ListRegionsResponse | null
): any {
  if (value == null) {
    return value;
  }
  return {
    categories:
      value['categories'] == null
        ? undefined
        : mapValues(value['categories'], CategoryResponseToJSON),
    count: value['count'],
    region:
      value['region'] == null
        ? undefined
        : (value['region'] as Array<any>).map(RegionResponseToJSON),
    regions:
      value['regions'] == null
        ? undefined
        : (value['regions'] as Array<any>).map(RegionResponseToJSON),
  };
}
