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
 * @interface RatingCriteria
 */
export interface RatingCriteria {
  /**
   *
   * @type {number}
   * @memberof RatingCriteria
   */
  id?: number;
  /**
   *
   * @type {boolean}
   * @memberof RatingCriteria
   */
  internal?: boolean;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof RatingCriteria
   */
  label?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof RatingCriteria
   */
  name?: string;
}

/**
 * Check if a given object implements the RatingCriteria interface.
 */
export function instanceOfRatingCriteria(
  value: object
): value is RatingCriteria {
  return true;
}

export function RatingCriteriaFromJSON(json: any): RatingCriteria {
  return RatingCriteriaFromJSONTyped(json, false);
}

export function RatingCriteriaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): RatingCriteria {
  if (json == null) {
    return json;
  }
  return {
    id: json['id'] == null ? undefined : json['id'],
    internal: json['internal'] == null ? undefined : json['internal'],
    label: json['label'] == null ? undefined : json['label'],
    name: json['name'] == null ? undefined : json['name'],
  };
}

export function RatingCriteriaToJSON(value?: RatingCriteria | null): any {
  if (value == null) {
    return value;
  }
  return {
    id: value['id'],
    internal: value['internal'],
    label: value['label'],
    name: value['name'],
  };
}
