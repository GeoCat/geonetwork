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
 * @interface Address
 */
export interface Address {
  /**
   *
   * @type {string}
   * @memberof Address
   */
  address?: string;
  /**
   *
   * @type {string}
   * @memberof Address
   */
  city?: string;
  /**
   *
   * @type {string}
   * @memberof Address
   */
  country?: string;
  /**
   *
   * @type {number}
   * @memberof Address
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof Address
   */
  state?: string;
  /**
   *
   * @type {string}
   * @memberof Address
   */
  zip?: string;
}

/**
 * Check if a given object implements the Address interface.
 */
export function instanceOfAddress(value: object): value is Address {
  return true;
}

export function AddressFromJSON(json: any): Address {
  return AddressFromJSONTyped(json, false);
}

export function AddressFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Address {
  if (json == null) {
    return json;
  }
  return {
    address: json['address'] == null ? undefined : json['address'],
    city: json['city'] == null ? undefined : json['city'],
    country: json['country'] == null ? undefined : json['country'],
    id: json['id'] == null ? undefined : json['id'],
    state: json['state'] == null ? undefined : json['state'],
    zip: json['zip'] == null ? undefined : json['zip'],
  };
}

export function AddressToJSON(value?: Address | null): any {
  if (value == null) {
    return value;
  }
  return {
    address: value['address'],
    city: value['city'],
    country: value['country'],
    id: value['id'],
    state: value['state'],
    zip: value['zip'],
  };
}
