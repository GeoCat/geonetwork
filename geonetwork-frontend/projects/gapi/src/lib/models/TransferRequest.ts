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
 * @interface TransferRequest
 */
export interface TransferRequest {
  /**
   *
   * @type {number}
   * @memberof TransferRequest
   */
  sourceGroup?: number;
  /**
   *
   * @type {number}
   * @memberof TransferRequest
   */
  sourceUser?: number;
  /**
   *
   * @type {number}
   * @memberof TransferRequest
   */
  targetGroup?: number;
  /**
   *
   * @type {number}
   * @memberof TransferRequest
   */
  targetUser?: number;
}

/**
 * Check if a given object implements the TransferRequest interface.
 */
export function instanceOfTransferRequest(
  value: object
): value is TransferRequest {
  return true;
}

export function TransferRequestFromJSON(json: any): TransferRequest {
  return TransferRequestFromJSONTyped(json, false);
}

export function TransferRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TransferRequest {
  if (json == null) {
    return json;
  }
  return {
    sourceGroup: json['sourceGroup'] == null ? undefined : json['sourceGroup'],
    sourceUser: json['sourceUser'] == null ? undefined : json['sourceUser'],
    targetGroup: json['targetGroup'] == null ? undefined : json['targetGroup'],
    targetUser: json['targetUser'] == null ? undefined : json['targetUser'],
  };
}

export function TransferRequestToJSON(value?: TransferRequest | null): any {
  if (value == null) {
    return value;
  }
  return {
    sourceGroup: value['sourceGroup'],
    sourceUser: value['sourceUser'],
    targetGroup: value['targetGroup'],
    targetUser: value['targetUser'],
  };
}
