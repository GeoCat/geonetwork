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
 * @interface FormatterData
 */
export interface FormatterData {
  /**
   *
   * @type {string}
   * @memberof FormatterData
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof FormatterData
   */
  schema?: string;
}

/**
 * Check if a given object implements the FormatterData interface.
 */
export function instanceOfFormatterData(value: object): value is FormatterData {
  return true;
}

export function FormatterDataFromJSON(json: any): FormatterData {
  return FormatterDataFromJSONTyped(json, false);
}

export function FormatterDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): FormatterData {
  if (json == null) {
    return json;
  }
  return {
    id: json['id'] == null ? undefined : json['id'],
    schema: json['schema'] == null ? undefined : json['schema'],
  };
}

export function FormatterDataToJSON(value?: FormatterData | null): any {
  if (value == null) {
    return value;
  }
  return {
    id: value['id'],
    schema: value['schema'],
  };
}
