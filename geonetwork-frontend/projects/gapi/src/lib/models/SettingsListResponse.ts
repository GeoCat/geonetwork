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
import type { Setting } from './Setting';
import {
  SettingFromJSON,
  SettingFromJSONTyped,
  SettingToJSON,
} from './Setting';

/**
 *
 * @export
 * @interface SettingsListResponse
 */
export interface SettingsListResponse {
  /**
   *
   * @type {Array<Setting>}
   * @memberof SettingsListResponse
   */
  settings?: Array<Setting>;
}

/**
 * Check if a given object implements the SettingsListResponse interface.
 */
export function instanceOfSettingsListResponse(
  value: object
): value is SettingsListResponse {
  return true;
}

export function SettingsListResponseFromJSON(json: any): SettingsListResponse {
  return SettingsListResponseFromJSONTyped(json, false);
}

export function SettingsListResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SettingsListResponse {
  if (json == null) {
    return json;
  }
  // TODO: Improve GN4 API schema which is a map {
  return json;
  // return {
  //   settings:
  //     json == null ? undefined : (json as Array<any>).map(SettingFromJSON),
  // };
}

export function SettingsListResponseToJSON(
  value?: SettingsListResponse | null
): any {
  if (value == null) {
    return value;
  }
  return {
    settings:
      value['settings'] == null
        ? undefined
        : (value['settings'] as Array<any>).map(SettingToJSON),
  };
}
