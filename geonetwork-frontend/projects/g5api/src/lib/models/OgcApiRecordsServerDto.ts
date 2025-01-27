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
import type { OgcApiRecordsServerVariableDto } from './OgcApiRecordsServerVariableDto';
import {
  OgcApiRecordsServerVariableDtoFromJSON,
  OgcApiRecordsServerVariableDtoFromJSONTyped,
  OgcApiRecordsServerVariableDtoToJSON,
} from './OgcApiRecordsServerVariableDto';

/**
 *
 * @export
 * @interface OgcApiRecordsServerDto
 */
export interface OgcApiRecordsServerDto {
  /**
   *
   * @type {string}
   * @memberof OgcApiRecordsServerDto
   */
  url: string;
  /**
   *
   * @type {string}
   * @memberof OgcApiRecordsServerDto
   */
  description?: string;
  /**
   *
   * @type {{ [key: string]: OgcApiRecordsServerVariableDto; }}
   * @memberof OgcApiRecordsServerDto
   */
  variables?: { [key: string]: OgcApiRecordsServerVariableDto };
}

/**
 * Check if a given object implements the OgcApiRecordsServerDto interface.
 */
export function instanceOfOgcApiRecordsServerDto(
  value: object
): value is OgcApiRecordsServerDto {
  if (!('url' in value) || value['url'] === undefined) return false;
  return true;
}

export function OgcApiRecordsServerDtoFromJSON(
  json: any
): OgcApiRecordsServerDto {
  return OgcApiRecordsServerDtoFromJSONTyped(json, false);
}

export function OgcApiRecordsServerDtoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): OgcApiRecordsServerDto {
  if (json == null) {
    return json;
  }
  return {
    url: json['url'],
    description: json['description'] == null ? undefined : json['description'],
    variables:
      json['variables'] == null
        ? undefined
        : mapValues(json['variables'], OgcApiRecordsServerVariableDtoFromJSON),
  };
}

export function OgcApiRecordsServerDtoToJSON(
  value?: OgcApiRecordsServerDto | null
): any {
  if (value == null) {
    return value;
  }
  return {
    url: value['url'],
    description: value['description'],
    variables:
      value['variables'] == null
        ? undefined
        : mapValues(value['variables'], OgcApiRecordsServerVariableDtoToJSON),
  };
}