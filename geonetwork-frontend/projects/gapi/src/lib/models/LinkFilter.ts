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
 * @interface LinkFilter
 */
export interface LinkFilter {
  /**
   *
   * @type {string}
   * @memberof LinkFilter
   */
  lastState?: string;
  /**
   *
   * @type {string}
   * @memberof LinkFilter
   */
  records?: string;
  /**
   *
   * @type {string}
   * @memberof LinkFilter
   */
  url?: string;
}

/**
 * Check if a given object implements the LinkFilter interface.
 */
export function instanceOfLinkFilter(value: object): value is LinkFilter {
  return true;
}

export function LinkFilterFromJSON(json: any): LinkFilter {
  return LinkFilterFromJSONTyped(json, false);
}

export function LinkFilterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): LinkFilter {
  if (json == null) {
    return json;
  }
  return {
    lastState: json['lastState'] == null ? undefined : json['lastState'],
    records: json['records'] == null ? undefined : json['records'],
    url: json['url'] == null ? undefined : json['url'],
  };
}

export function LinkFilterToJSON(value?: LinkFilter | null): any {
  if (value == null) {
    return value;
  }
  return {
    lastState: value['lastState'],
    records: value['records'],
    url: value['url'],
  };
}
