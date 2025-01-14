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
 * @interface SystemInfo
 */
export interface SystemInfo {
  /**
   *
   * @type {string}
   * @memberof SystemInfo
   */
  buildDate?: string;
  /**
   *
   * @type {string}
   * @memberof SystemInfo
   */
  buildJavaVendor?: string;
  /**
   *
   * @type {string}
   * @memberof SystemInfo
   */
  buildJavaVersion?: string;
  /**
   *
   * @type {string}
   * @memberof SystemInfo
   */
  buildOsInfo?: string;
  /**
   *
   * @type {boolean}
   * @memberof SystemInfo
   */
  devMode?: boolean;
  /**
   *
   * @type {string}
   * @memberof SystemInfo
   */
  scmRevision?: string;
  /**
   *
   * @type {string}
   * @memberof SystemInfo
   */
  scmUrl?: string;
  /**
   *
   * @type {string}
   * @memberof SystemInfo
   */
  stagingProfile?: string;
  /**
   *
   * @type {string}
   * @memberof SystemInfo
   */
  subVersion?: string;
  /**
   *
   * @type {string}
   * @memberof SystemInfo
   */
  version?: string;
}

/**
 * Check if a given object implements the SystemInfo interface.
 */
export function instanceOfSystemInfo(value: object): value is SystemInfo {
  return true;
}

export function SystemInfoFromJSON(json: any): SystemInfo {
  return SystemInfoFromJSONTyped(json, false);
}

export function SystemInfoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SystemInfo {
  if (json == null) {
    return json;
  }
  return {
    buildDate: json['buildDate'] == null ? undefined : json['buildDate'],
    buildJavaVendor:
      json['buildJavaVendor'] == null ? undefined : json['buildJavaVendor'],
    buildJavaVersion:
      json['buildJavaVersion'] == null ? undefined : json['buildJavaVersion'],
    buildOsInfo: json['buildOsInfo'] == null ? undefined : json['buildOsInfo'],
    devMode: json['devMode'] == null ? undefined : json['devMode'],
    scmRevision: json['scmRevision'] == null ? undefined : json['scmRevision'],
    scmUrl: json['scmUrl'] == null ? undefined : json['scmUrl'],
    stagingProfile:
      json['stagingProfile'] == null ? undefined : json['stagingProfile'],
    subVersion: json['subVersion'] == null ? undefined : json['subVersion'],
    version: json['version'] == null ? undefined : json['version'],
  };
}

export function SystemInfoToJSON(value?: SystemInfo | null): any {
  if (value == null) {
    return value;
  }
  return {
    buildDate: value['buildDate'],
    buildJavaVendor: value['buildJavaVendor'],
    buildJavaVersion: value['buildJavaVersion'],
    buildOsInfo: value['buildOsInfo'],
    devMode: value['devMode'],
    scmRevision: value['scmRevision'],
    scmUrl: value['scmUrl'],
    stagingProfile: value['stagingProfile'],
    subVersion: value['subVersion'],
    version: value['version'],
  };
}
