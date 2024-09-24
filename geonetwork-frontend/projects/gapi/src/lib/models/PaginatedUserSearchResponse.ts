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
import type { UserSearchDto } from './UserSearchDto';
import {
  UserSearchDtoFromJSON,
  UserSearchDtoFromJSONTyped,
  UserSearchDtoToJSON,
} from './UserSearchDto';

/**
 *
 * @export
 * @interface PaginatedUserSearchResponse
 */
export interface PaginatedUserSearchResponse {
  /**
   *
   * @type {Array<UserSearchDto>}
   * @memberof PaginatedUserSearchResponse
   */
  rows?: Array<UserSearchDto>;
  /**
   *
   * @type {number}
   * @memberof PaginatedUserSearchResponse
   */
  total?: number;
}

/**
 * Check if a given object implements the PaginatedUserSearchResponse interface.
 */
export function instanceOfPaginatedUserSearchResponse(
  value: object
): value is PaginatedUserSearchResponse {
  return true;
}

export function PaginatedUserSearchResponseFromJSON(
  json: any
): PaginatedUserSearchResponse {
  return PaginatedUserSearchResponseFromJSONTyped(json, false);
}

export function PaginatedUserSearchResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PaginatedUserSearchResponse {
  if (json == null) {
    return json;
  }
  return {
    rows:
      json['rows'] == null
        ? undefined
        : (json['rows'] as Array<any>).map(UserSearchDtoFromJSON),
    total: json['total'] == null ? undefined : json['total'],
  };
}

export function PaginatedUserSearchResponseToJSON(
  value?: PaginatedUserSearchResponse | null
): any {
  if (value == null) {
    return value;
  }
  return {
    rows:
      value['rows'] == null
        ? undefined
        : (value['rows'] as Array<any>).map(UserSearchDtoToJSON),
    total: value['total'],
  };
}