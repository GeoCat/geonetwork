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
import type { RelatedMetadataItem } from './RelatedMetadataItem';
import {
  RelatedMetadataItemFromJSON,
  RelatedMetadataItemFromJSONTyped,
  RelatedMetadataItemToJSON,
} from './RelatedMetadataItem';

/**
 *
 * @export
 * @interface Service
 */
export interface Service {
  /**
   *
   * @type {Array<RelatedMetadataItem>}
   * @memberof Service
   */
  item?: Array<RelatedMetadataItem>;
}

/**
 * Check if a given object implements the Service interface.
 */
export function instanceOfService(value: object): value is Service {
  return true;
}

export function ServiceFromJSON(json: any): Service {
  return ServiceFromJSONTyped(json, false);
}

export function ServiceFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Service {
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

export function ServiceToJSON(value?: Service | null): any {
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
