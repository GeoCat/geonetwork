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
import type { GnMetadataResourceExternalManagementProperties } from './GnGnMetadataResourceExternalManagementProperties';
import {
  GnMetadataResourceExternalManagementPropertiesFromJSON,
  GnMetadataResourceExternalManagementPropertiesFromJSONTyped,
  GnMetadataResourceExternalManagementPropertiesToJSON,
} from './GnGnMetadataResourceExternalManagementProperties';

/**
 *
 * @export
 * @interface GnMetadataResource
 */
export interface GnMetadataResource {
  /**
   *
   * @type {string}
   * @memberof GnMetadataResource
   */
  id?: string;
  /**
   *
   * @type {number}
   * @memberof GnMetadataResource
   */
  size?: number;
  /**
   *
   * @type {string}
   * @memberof GnMetadataResource
   */
  version?: string;
  /**
   *
   * @type {string}
   * @memberof GnMetadataResource
   */
  url?: string;
  /**
   *
   * @type {Date}
   * @memberof GnMetadataResource
   */
  lastModification?: Date;
  /**
   *
   * @type {GnMetadataResourceExternalManagementProperties}
   * @memberof GnMetadataResource
   */
  metadataResourceExternalManagementProperties?: GnMetadataResourceExternalManagementProperties;
  /**
   *
   * @type {boolean}
   * @memberof GnMetadataResource
   */
  approved?: boolean;
  /**
   *
   * @type {number}
   * @memberof GnMetadataResource
   */
  metadataId?: number;
  /**
   *
   * @type {string}
   * @memberof GnMetadataResource
   */
  filename?: string;
  /**
   *
   * @type {string}
   * @memberof GnMetadataResource
   */
  visibility?: GnMetadataResourceVisibilityEnum;
  /**
   *
   * @type {string}
   * @memberof GnMetadataResource
   */
  metadataUuid?: string;
}

/**
 * @export
 */
export const GnMetadataResourceVisibilityEnum = {
  Public: 'public',
  Private: 'private',
} as const;
export type GnMetadataResourceVisibilityEnum =
  (typeof GnMetadataResourceVisibilityEnum)[keyof typeof GnMetadataResourceVisibilityEnum];

/**
 * Check if a given object implements the GnMetadataResource interface.
 */
export function instanceOfGnMetadataResource(
  value: object
): value is GnMetadataResource {
  return true;
}

export function GnMetadataResourceFromJSON(json: any): GnMetadataResource {
  return GnMetadataResourceFromJSONTyped(json, false);
}

export function GnMetadataResourceFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GnMetadataResource {
  if (json == null) {
    return json;
  }
  return {
    id: json['id'] == null ? undefined : json['id'],
    size: json['size'] == null ? undefined : json['size'],
    version: json['version'] == null ? undefined : json['version'],
    url: json['url'] == null ? undefined : json['url'],
    lastModification:
      json['lastModification'] == null
        ? undefined
        : new Date(json['lastModification']),
    metadataResourceExternalManagementProperties:
      json['metadataResourceExternalManagementProperties'] == null
        ? undefined
        : GnMetadataResourceExternalManagementPropertiesFromJSON(
            json['metadataResourceExternalManagementProperties']
          ),
    approved: json['approved'] == null ? undefined : json['approved'],
    metadataId: json['metadataId'] == null ? undefined : json['metadataId'],
    filename: json['filename'] == null ? undefined : json['filename'],
    visibility: json['visibility'] == null ? undefined : json['visibility'],
    metadataUuid:
      json['metadataUuid'] == null ? undefined : json['metadataUuid'],
  };
}

export function GnMetadataResourceToJSON(
  value?: GnMetadataResource | null
): any {
  if (value == null) {
    return value;
  }
  return {
    id: value['id'],
    size: value['size'],
    version: value['version'],
    url: value['url'],
    lastModification:
      value['lastModification'] == null
        ? undefined
        : value['lastModification'].toISOString(),
    metadataResourceExternalManagementProperties:
      GnMetadataResourceExternalManagementPropertiesToJSON(
        value['metadataResourceExternalManagementProperties']
      ),
    approved: value['approved'],
    metadataId: value['metadataId'],
    filename: value['filename'],
    visibility: value['visibility'],
    metadataUuid: value['metadataUuid'],
  };
}