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
import type { RelatedMetadataItem } from './RelatedMetadataItem';
import {
  RelatedMetadataItemFromJSON,
  RelatedMetadataItemFromJSONTyped,
  RelatedMetadataItemToJSON,
} from './RelatedMetadataItem';

/**
 *
 * @export
 * @interface Hasfeaturecats
 */
export interface Hasfeaturecats {
  /**
   *
   * @type {Array<RelatedMetadataItem>}
   * @memberof Hasfeaturecats
   */
  item?: Array<RelatedMetadataItem>;
}

/**
 * Check if a given object implements the Hasfeaturecats interface.
 */
export function instanceOfHasfeaturecats(
  value: object
): value is Hasfeaturecats {
  return true;
}

export function HasfeaturecatsFromJSON(json: any): Hasfeaturecats {
  return HasfeaturecatsFromJSONTyped(json, false);
}

export function HasfeaturecatsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Hasfeaturecats {
  if (json == null) {
    return json;
  }
  return {
    item:
      json['item'] == null
        ? undefined
        : (json['item'] as Array<any>).map(RelatedMetadataItemFromJSON),
  };
}

export function HasfeaturecatsToJSON(value?: Hasfeaturecats | null): any {
  if (value == null) {
    return value;
  }
  return {
    item:
      value['item'] == null
        ? undefined
        : (value['item'] as Array<any>).map(RelatedMetadataItemToJSON),
  };
}
