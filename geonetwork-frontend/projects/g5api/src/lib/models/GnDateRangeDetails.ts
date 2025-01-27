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
import type { GnDateRangeDetailsInfo } from './GnGnDateRangeDetailsInfo';
import {
  GnDateRangeDetailsInfoFromJSON,
  GnDateRangeDetailsInfoFromJSONTyped,
  GnDateRangeDetailsInfoToJSON,
} from './GnGnDateRangeDetailsInfo';

/**
 *
 * @export
 * @interface GnDateRangeDetails
 */
export interface GnDateRangeDetails {
  /**
   *
   * @type {GnDateRangeDetailsInfo}
   * @memberof GnDateRangeDetails
   */
  start?: GnDateRangeDetailsInfo;
  /**
   *
   * @type {GnDateRangeDetailsInfo}
   * @memberof GnDateRangeDetails
   */
  end?: GnDateRangeDetailsInfo;
}

/**
 * Check if a given object implements the GnDateRangeDetails interface.
 */
export function instanceOfGnDateRangeDetails(
  value: object
): value is GnDateRangeDetails {
  return true;
}

export function GnDateRangeDetailsFromJSON(json: any): GnDateRangeDetails {
  return GnDateRangeDetailsFromJSONTyped(json, false);
}

export function GnDateRangeDetailsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GnDateRangeDetails {
  if (json == null) {
    return json;
  }
  return {
    start:
      json['start'] == null
        ? undefined
        : GnDateRangeDetailsInfoFromJSON(json['start']),
    end:
      json['end'] == null
        ? undefined
        : GnDateRangeDetailsInfoFromJSON(json['end']),
  };
}

export function GnDateRangeDetailsToJSON(
  value?: GnDateRangeDetails | null
): any {
  if (value == null) {
    return value;
  }
  return {
    start: GnDateRangeDetailsInfoToJSON(value['start']),
    end: GnDateRangeDetailsInfoToJSON(value['end']),
  };
}