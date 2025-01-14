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
import type { ISODate } from './ISODate';
import {
  ISODateFromJSON,
  ISODateFromJSONTyped,
  ISODateToJSON,
} from './ISODate';
import type { StatusValue } from './StatusValue';
import {
  StatusValueFromJSON,
  StatusValueFromJSONTyped,
  StatusValueToJSON,
} from './StatusValue';

/**
 *
 * @export
 * @interface MetadataStatusResponse
 */
export interface MetadataStatusResponse {
  /**
   *
   * @type {string}
   * @memberof MetadataStatusResponse
   */
  authorEmail?: string;
  /**
   *
   * @type {string}
   * @memberof MetadataStatusResponse
   */
  authorName?: string;
  /**
   *
   * @type {string}
   * @memberof MetadataStatusResponse
   */
  authorProfile?: string;
  /**
   *
   * @type {ISODate}
   * @memberof MetadataStatusResponse
   */
  changeDate?: ISODate;
  /**
   *
   * @type {string}
   * @memberof MetadataStatusResponse
   */
  changeMessage?: string;
  /**
   *
   * @type {ISODate}
   * @memberof MetadataStatusResponse
   */
  closeDate?: ISODate;
  /**
   *
   * @type {string}
   * @memberof MetadataStatusResponse
   */
  currentState?: string;
  /**
   *
   * @type {boolean}
   * @memberof MetadataStatusResponse
   */
  currentStateEmpty?: boolean;
  /**
   *
   * @type {string}
   * @memberof MetadataStatusResponse
   */
  currentStatus?: string;
  /**
   *
   * @type {string}
   * @memberof MetadataStatusResponse
   */
  dateChange?: string;
  /**
   *
   * @type {string}
   * @memberof MetadataStatusResponse
   */
  dateClose?: string;
  /**
   *
   * @type {string}
   * @memberof MetadataStatusResponse
   */
  dateDue?: string;
  /**
   *
   * @type {ISODate}
   * @memberof MetadataStatusResponse
   */
  dueDate?: ISODate;
  /**
   *
   * @type {number}
   * @memberof MetadataStatusResponse
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof MetadataStatusResponse
   */
  metadataId?: number;
  /**
   *
   * @type {number}
   * @memberof MetadataStatusResponse
   */
  owner?: number;
  /**
   *
   * @type {string}
   * @memberof MetadataStatusResponse
   */
  ownerEmail?: string;
  /**
   *
   * @type {string}
   * @memberof MetadataStatusResponse
   */
  ownerName?: string;
  /**
   *
   * @type {string}
   * @memberof MetadataStatusResponse
   */
  ownerProfile?: string;
  /**
   *
   * @type {string}
   * @memberof MetadataStatusResponse
   */
  previousState?: string;
  /**
   *
   * @type {boolean}
   * @memberof MetadataStatusResponse
   */
  previousStateEmpty?: boolean;
  /**
   *
   * @type {string}
   * @memberof MetadataStatusResponse
   */
  previousStatus?: string;
  /**
   *
   * @type {number}
   * @memberof MetadataStatusResponse
   */
  relatedMetadataStatusId?: number;
  /**
   *
   * @type {number}
   * @memberof MetadataStatusResponse
   */
  statusId?: number;
  /**
   *
   * @type {StatusValue}
   * @memberof MetadataStatusResponse
   */
  statusValue?: StatusValue;
  /**
   *
   * @type {string}
   * @memberof MetadataStatusResponse
   */
  title?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof MetadataStatusResponse
   */
  titles?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof MetadataStatusResponse
   */
  userId?: number;
  /**
   *
   * @type {string}
   * @memberof MetadataStatusResponse
   */
  uuid?: string;
}

/**
 * Check if a given object implements the MetadataStatusResponse interface.
 */
export function instanceOfMetadataStatusResponse(
  value: object
): value is MetadataStatusResponse {
  return true;
}

export function MetadataStatusResponseFromJSON(
  json: any
): MetadataStatusResponse {
  return MetadataStatusResponseFromJSONTyped(json, false);
}

export function MetadataStatusResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): MetadataStatusResponse {
  if (json == null) {
    return json;
  }
  return {
    authorEmail: json['authorEmail'] == null ? undefined : json['authorEmail'],
    authorName: json['authorName'] == null ? undefined : json['authorName'],
    authorProfile:
      json['authorProfile'] == null ? undefined : json['authorProfile'],
    changeDate:
      json['changeDate'] == null
        ? undefined
        : ISODateFromJSON(json['changeDate']),
    changeMessage:
      json['changeMessage'] == null ? undefined : json['changeMessage'],
    closeDate:
      json['closeDate'] == null
        ? undefined
        : ISODateFromJSON(json['closeDate']),
    currentState:
      json['currentState'] == null ? undefined : json['currentState'],
    currentStateEmpty:
      json['currentStateEmpty'] == null ? undefined : json['currentStateEmpty'],
    currentStatus:
      json['currentStatus'] == null ? undefined : json['currentStatus'],
    dateChange: json['dateChange'] == null ? undefined : json['dateChange'],
    dateClose: json['dateClose'] == null ? undefined : json['dateClose'],
    dateDue: json['dateDue'] == null ? undefined : json['dateDue'],
    dueDate:
      json['dueDate'] == null ? undefined : ISODateFromJSON(json['dueDate']),
    id: json['id'] == null ? undefined : json['id'],
    metadataId: json['metadataId'] == null ? undefined : json['metadataId'],
    owner: json['owner'] == null ? undefined : json['owner'],
    ownerEmail: json['ownerEmail'] == null ? undefined : json['ownerEmail'],
    ownerName: json['ownerName'] == null ? undefined : json['ownerName'],
    ownerProfile:
      json['ownerProfile'] == null ? undefined : json['ownerProfile'],
    previousState:
      json['previousState'] == null ? undefined : json['previousState'],
    previousStateEmpty:
      json['previousStateEmpty'] == null
        ? undefined
        : json['previousStateEmpty'],
    previousStatus:
      json['previousStatus'] == null ? undefined : json['previousStatus'],
    relatedMetadataStatusId:
      json['relatedMetadataStatusId'] == null
        ? undefined
        : json['relatedMetadataStatusId'],
    statusId: json['statusId'] == null ? undefined : json['statusId'],
    statusValue:
      json['statusValue'] == null
        ? undefined
        : StatusValueFromJSON(json['statusValue']),
    title: json['title'] == null ? undefined : json['title'],
    titles: json['titles'] == null ? undefined : json['titles'],
    userId: json['userId'] == null ? undefined : json['userId'],
    uuid: json['uuid'] == null ? undefined : json['uuid'],
  };
}

export function MetadataStatusResponseToJSON(
  value?: MetadataStatusResponse | null
): any {
  if (value == null) {
    return value;
  }
  return {
    authorEmail: value['authorEmail'],
    authorName: value['authorName'],
    authorProfile: value['authorProfile'],
    changeDate: ISODateToJSON(value['changeDate']),
    changeMessage: value['changeMessage'],
    closeDate: ISODateToJSON(value['closeDate']),
    currentState: value['currentState'],
    currentStateEmpty: value['currentStateEmpty'],
    currentStatus: value['currentStatus'],
    dateChange: value['dateChange'],
    dateClose: value['dateClose'],
    dateDue: value['dateDue'],
    dueDate: ISODateToJSON(value['dueDate']),
    id: value['id'],
    metadataId: value['metadataId'],
    owner: value['owner'],
    ownerEmail: value['ownerEmail'],
    ownerName: value['ownerName'],
    ownerProfile: value['ownerProfile'],
    previousState: value['previousState'],
    previousStateEmpty: value['previousStateEmpty'],
    previousStatus: value['previousStatus'],
    relatedMetadataStatusId: value['relatedMetadataStatusId'],
    statusId: value['statusId'],
    statusValue: StatusValueToJSON(value['statusValue']),
    title: value['title'],
    titles: value['titles'],
    userId: value['userId'],
    uuid: value['uuid'],
  };
}
