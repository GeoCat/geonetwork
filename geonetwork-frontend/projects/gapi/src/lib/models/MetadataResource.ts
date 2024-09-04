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
import type { MetadataResourceExternalManagementProperties } from './MetadataResourceExternalManagementProperties';
import {
  MetadataResourceExternalManagementPropertiesFromJSON,
  MetadataResourceExternalManagementPropertiesFromJSONTyped,
  MetadataResourceExternalManagementPropertiesToJSON,
} from './MetadataResourceExternalManagementProperties';

/**
 *
 * @export
 * @interface MetadataResource
 */
export interface MetadataResource {
  /**
   *
   * @type {boolean}
   * @memberof MetadataResource
   */
  approved?: boolean;
  /**
   *
   * @type {string}
   * @memberof MetadataResource
   */
  filename?: string;
  /**
   *
   * @type {string}
   * @memberof MetadataResource
   */
  id?: string;
  /**
   *
   * @type {Date}
   * @memberof MetadataResource
   */
  lastModification?: Date;
  /**
   *
   * @type {number}
   * @memberof MetadataResource
   */
  metadataId?: number;
  /**
   *
   * @type {MetadataResourceExternalManagementProperties}
   * @memberof MetadataResource
   */
  metadataResourceExternalManagementProperties?: MetadataResourceExternalManagementProperties;
  /**
   *
   * @type {string}
   * @memberof MetadataResource
   */
  metadataUuid?: string;
  /**
   *
   * @type {number}
   * @memberof MetadataResource
   */
  size?: number;
  /**
   *
   * @type {string}
   * @memberof MetadataResource
   */
  url?: string;
  /**
   *
   * @type {string}
   * @memberof MetadataResource
   */
  version?: string;
  /**
   *
   * @type {string}
   * @memberof MetadataResource
   */
  visibility?: MetadataResourceVisibilityEnum;
}

/**
 * @export
 */
export const MetadataResourceVisibilityEnum = {
  Public: 'PUBLIC',
  Private: 'PRIVATE',
} as const;
export type MetadataResourceVisibilityEnum =
  (typeof MetadataResourceVisibilityEnum)[keyof typeof MetadataResourceVisibilityEnum];

/**
 * Check if a given object implements the MetadataResource interface.
 */
export function instanceOfMetadataResource(
  value: object
): value is MetadataResource {
  return true;
}

export function MetadataResourceFromJSON(json: any): MetadataResource {
  return MetadataResourceFromJSONTyped(json, false);
}

export function MetadataResourceFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): MetadataResource {
  if (json == null) {
    return json;
  }
  return {
    approved: json['approved'] == null ? undefined : json['approved'],
    filename: json['filename'] == null ? undefined : json['filename'],
    id: json['id'] == null ? undefined : json['id'],
    lastModification:
      json['lastModification'] == null
        ? undefined
        : new Date(json['lastModification']),
    metadataId: json['metadataId'] == null ? undefined : json['metadataId'],
    metadataResourceExternalManagementProperties:
      json['metadataResourceExternalManagementProperties'] == null
        ? undefined
        : MetadataResourceExternalManagementPropertiesFromJSON(
            json['metadataResourceExternalManagementProperties']
          ),
    metadataUuid:
      json['metadataUuid'] == null ? undefined : json['metadataUuid'],
    size: json['size'] == null ? undefined : json['size'],
    url: json['url'] == null ? undefined : json['url'],
    version: json['version'] == null ? undefined : json['version'],
    visibility: json['visibility'] == null ? undefined : json['visibility'],
  };
}

export function MetadataResourceToJSON(value?: MetadataResource | null): any {
  if (value == null) {
    return value;
  }
  return {
    approved: value['approved'],
    filename: value['filename'],
    id: value['id'],
    lastModification:
      value['lastModification'] == null
        ? undefined
        : value['lastModification'].toISOString(),
    metadataId: value['metadataId'],
    metadataResourceExternalManagementProperties:
      MetadataResourceExternalManagementPropertiesToJSON(
        value['metadataResourceExternalManagementProperties']
      ),
    metadataUuid: value['metadataUuid'],
    size: value['size'],
    url: value['url'],
    version: value['version'],
    visibility: value['visibility'],
  };
}
