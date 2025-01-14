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
 * Metadata field information to check
 * @export
 * @interface DuplicatedValueDto
 */
export interface DuplicatedValueDto {
  /**
   *
   * @type {string}
   * @memberof DuplicatedValueDto
   */
  field?: string;
  /**
   *
   * @type {string}
   * @memberof DuplicatedValueDto
   */
  value?: string;
}

/**
 * Check if a given object implements the DuplicatedValueDto interface.
 */
export function instanceOfDuplicatedValueDto(
  value: object
): value is DuplicatedValueDto {
  return true;
}

export function DuplicatedValueDtoFromJSON(json: any): DuplicatedValueDto {
  return DuplicatedValueDtoFromJSONTyped(json, false);
}

export function DuplicatedValueDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DuplicatedValueDto {
  if (json == null) {
    return json;
  }
  return {
    field: json['field'] == null ? undefined : json['field'],
    value: json['value'] == null ? undefined : json['value'],
  };
}

export function DuplicatedValueDtoToJSON(
  value?: DuplicatedValueDto | null
): any {
  if (value == null) {
    return value;
  }
  return {
    field: value['field'],
    value: value['value'],
  };
}
