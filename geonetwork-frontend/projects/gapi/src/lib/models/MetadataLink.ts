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
 * @interface MetadataLink
 */
export interface MetadataLink {
  /**
   *
   * @type {number}
   * @memberof MetadataLink
   */
  metadataId?: number;
  /**
   *
   * @type {string}
   * @memberof MetadataLink
   */
  metadataUuid?: string;
}

/**
 * Check if a given object implements the MetadataLink interface.
 */
export function instanceOfMetadataLink(value: object): value is MetadataLink {
  return true;
}

export function MetadataLinkFromJSON(json: any): MetadataLink {
  return MetadataLinkFromJSONTyped(json, false);
}

export function MetadataLinkFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): MetadataLink {
  if (json == null) {
    return json;
  }
  return {
    metadataId: json['metadataId'] == null ? undefined : json['metadataId'],
    metadataUuid:
      json['metadataUuid'] == null ? undefined : json['metadataUuid'],
  };
}

export function MetadataLinkToJSON(value?: MetadataLink | null): any {
  if (value == null) {
    return value;
  }
  return {
    metadataId: value['metadataId'],
    metadataUuid: value['metadataUuid'],
  };
}
