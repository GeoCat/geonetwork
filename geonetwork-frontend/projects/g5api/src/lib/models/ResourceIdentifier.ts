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
 * @interface ResourceIdentifier
 */
export interface ResourceIdentifier {
  /**
   *
   * @type {string}
   * @memberof ResourceIdentifier
   */
  code?: string;
  /**
   *
   * @type {string}
   * @memberof ResourceIdentifier
   */
  codeSpace?: string;
  /**
   *
   * @type {string}
   * @memberof ResourceIdentifier
   */
  link?: string;
}

/**
 * Check if a given object implements the ResourceIdentifier interface.
 */
export function instanceOfResourceIdentifier(
  value: object
): value is ResourceIdentifier {
  return true;
}

export function ResourceIdentifierFromJSON(json: any): ResourceIdentifier {
  return ResourceIdentifierFromJSONTyped(json, false);
}

export function ResourceIdentifierFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ResourceIdentifier {
  if (json == null) {
    return json;
  }
  return {
    code: json['code'] == null ? undefined : json['code'],
    codeSpace: json['codeSpace'] == null ? undefined : json['codeSpace'],
    link: json['link'] == null ? undefined : json['link'],
  };
}

export function ResourceIdentifierToJSON(
  value?: ResourceIdentifier | null
): any {
  if (value == null) {
    return value;
  }
  return {
    code: value['code'],
    codeSpace: value['codeSpace'],
    link: value['link'],
  };
}