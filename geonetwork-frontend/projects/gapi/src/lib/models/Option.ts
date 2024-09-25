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
 * @interface Option
 */
export interface Option {
  /**
   *
   * @type {string}
   * @memberof Option
   */
  description?: string;
  /**
   *
   * @type {boolean}
   * @memberof Option
   */
  isDefault?: boolean;
  /**
   *
   * @type {string}
   * @memberof Option
   */
  label?: string;
  /**
   *
   * @type {string}
   * @memberof Option
   */
  value?: string;
}

/**
 * Check if a given object implements the Option interface.
 */
export function instanceOfOption(value: object): value is Option {
  return true;
}

export function OptionFromJSON(json: any): Option {
  return OptionFromJSONTyped(json, false);
}

export function OptionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Option {
  if (json == null) {
    return json;
  }
  return {
    description: json['description'] == null ? undefined : json['description'],
    isDefault: json['isDefault'] == null ? undefined : json['isDefault'],
    label: json['label'] == null ? undefined : json['label'],
    value: json['value'] == null ? undefined : json['value'],
  };
}

export function OptionToJSON(value?: Option | null): any {
  if (value == null) {
    return value;
  }
  return {
    description: value['description'],
    isDefault: value['isDefault'],
    label: value['label'],
    value: value['value'],
  };
}