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
 * @interface DateRange
 */
export interface DateRange {
  /**
   *
   * @type {string}
   * @memberof DateRange
   */
  gte?: string;
  /**
   *
   * @type {string}
   * @memberof DateRange
   */
  lte?: string;
}

/**
 * Check if a given object implements the DateRange interface.
 */
export function instanceOfDateRange(value: object): value is DateRange {
  return true;
}

export function DateRangeFromJSON(json: any): DateRange {
  return DateRangeFromJSONTyped(json, false);
}

export function DateRangeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): DateRange {
  if (json == null) {
    return json;
  }
  return {
    gte: json['gte'] == null ? undefined : json['gte'],
    lte: json['lte'] == null ? undefined : json['lte'],
  };
}

export function DateRangeToJSON(value?: DateRange | null): any {
  if (value == null) {
    return value;
  }
  return {
    gte: value['gte'],
    lte: value['lte'],
  };
}