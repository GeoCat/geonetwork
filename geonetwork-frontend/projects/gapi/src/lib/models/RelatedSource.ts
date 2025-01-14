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
 * @interface RelatedSource
 */
export interface RelatedSource {
  /**
   *
   * @type {Array<RelatedMetadataItem>}
   * @memberof RelatedSource
   */
  item?: Array<RelatedMetadataItem>;
}

/**
 * Check if a given object implements the RelatedSource interface.
 */
export function instanceOfRelatedSource(value: object): value is RelatedSource {
  return true;
}

export function RelatedSourceFromJSON(json: any): RelatedSource {
  return RelatedSourceFromJSONTyped(json, false);
}

export function RelatedSourceFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): RelatedSource {
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

export function RelatedSourceToJSON(value?: RelatedSource | null): any {
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
