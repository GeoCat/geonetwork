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
 * @interface Category
 */
export interface Category {
  /**
   *
   * @type {string}
   * @memberof Category
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof Category
   */
  label?: string;
}

/**
 * Check if a given object implements the Category interface.
 */
export function instanceOfCategory(value: object): value is Category {
  return true;
}

export function CategoryFromJSON(json: any): Category {
  return CategoryFromJSONTyped(json, false);
}

export function CategoryFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Category {
  if (json == null) {
    return json;
  }
  return {
    id: json['id'] == null ? undefined : json['id'],
    label: json['label'] == null ? undefined : json['label'],
  };
}

export function CategoryToJSON(value?: Category | null): any {
  if (value == null) {
    return value;
  }
  return {
    id: value['id'],
    label: value['label'],
  };
}
