/* tslint:disable */
/* eslint-disable */
/**
 * GeoNetwork 4.4.5 OpenAPI Documentation
 * This is the description of the GeoNetwork OpenAPI. Use this API to manage your catalog.
 *
 * The version of the OpenAPI document: 4.4.5
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
 * @interface CategoryResponse
 */
export interface CategoryResponse {
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof CategoryResponse
   */
  label?: { [key: string]: string };
}

/**
 * Check if a given object implements the CategoryResponse interface.
 */
export function instanceOfCategoryResponse(
  value: object
): value is CategoryResponse {
  return true;
}

export function CategoryResponseFromJSON(json: any): CategoryResponse {
  return CategoryResponseFromJSONTyped(json, false);
}

export function CategoryResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CategoryResponse {
  if (json == null) {
    return json;
  }
  return {
    label: json['label'] == null ? undefined : json['label'],
  };
}

export function CategoryResponseToJSON(value?: CategoryResponse | null): any {
  if (value == null) {
    return value;
  }
  return {
    label: value['label'],
  };
}