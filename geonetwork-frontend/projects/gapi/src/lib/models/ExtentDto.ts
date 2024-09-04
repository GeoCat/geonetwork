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
 * @interface ExtentDto
 */
export interface ExtentDto {
  /**
   *
   * @type {string}
   * @memberof ExtentDto
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof ExtentDto
   */
  href?: string;
  /**
   *
   * @type {string}
   * @memberof ExtentDto
   */
  type?: string;
  /**
   *
   * @type {string}
   * @memberof ExtentDto
   */
  xpath?: string;
}

/**
 * Check if a given object implements the ExtentDto interface.
 */
export function instanceOfExtentDto(value: object): value is ExtentDto {
  return true;
}

export function ExtentDtoFromJSON(json: any): ExtentDto {
  return ExtentDtoFromJSONTyped(json, false);
}

export function ExtentDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ExtentDto {
  if (json == null) {
    return json;
  }
  return {
    description: json['description'] == null ? undefined : json['description'],
    href: json['href'] == null ? undefined : json['href'],
    type: json['type'] == null ? undefined : json['type'],
    xpath: json['xpath'] == null ? undefined : json['xpath'],
  };
}

export function ExtentDtoToJSON(value?: ExtentDto | null): any {
  if (value == null) {
    return value;
  }
  return {
    description: value['description'],
    href: value['href'],
    type: value['type'],
    xpath: value['xpath'],
  };
}
