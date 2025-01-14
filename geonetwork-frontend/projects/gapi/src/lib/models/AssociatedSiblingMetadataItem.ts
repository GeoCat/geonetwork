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
import type { MultilingualValue } from './MultilingualValue';
import {
  MultilingualValueFromJSON,
  MultilingualValueFromJSONTyped,
  MultilingualValueToJSON,
} from './MultilingualValue';
import type { Description } from './Description';
import {
  DescriptionFromJSON,
  DescriptionFromJSONTyped,
  DescriptionToJSON,
} from './Description';

/**
 *
 * @export
 * @interface AssociatedSiblingMetadataItem
 */
export interface AssociatedSiblingMetadataItem {
  /**
   *
   * @type {Array<string>}
   * @memberof AssociatedSiblingMetadataItem
   */
  aggIsDescriptionOf?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof AssociatedSiblingMetadataItem
   */
  aggIsTemporalStatOf?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof AssociatedSiblingMetadataItem
   */
  aggLargerWorkCitation?: Array<string>;
  /**
   *
   * @type {Description}
   * @memberof AssociatedSiblingMetadataItem
   */
  description: Description;
  /**
   *
   * @type {string}
   * @memberof AssociatedSiblingMetadataItem
   */
  hash?: string;
  /**
   *
   * @type {string}
   * @memberof AssociatedSiblingMetadataItem
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof AssociatedSiblingMetadataItem
   */
  idx?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof AssociatedSiblingMetadataItem
   */
  mdType: Array<string>;
  /**
   *
   * @type {string}
   * @memberof AssociatedSiblingMetadataItem
   */
  origin?: string;
  /**
   *
   * @type {MultilingualValue}
   * @memberof AssociatedSiblingMetadataItem
   */
  title: MultilingualValue;
  /**
   *
   * @type {string}
   * @memberof AssociatedSiblingMetadataItem
   */
  type?: string;
  /**
   *
   * @type {MultilingualValue}
   * @memberof AssociatedSiblingMetadataItem
   */
  url?: MultilingualValue;
}

/**
 * Check if a given object implements the AssociatedSiblingMetadataItem interface.
 */
export function instanceOfAssociatedSiblingMetadataItem(
  value: object
): value is AssociatedSiblingMetadataItem {
  if (!('description' in value) || value['description'] === undefined)
    return false;
  if (!('mdType' in value) || value['mdType'] === undefined) return false;
  if (!('title' in value) || value['title'] === undefined) return false;
  return true;
}

export function AssociatedSiblingMetadataItemFromJSON(
  json: any
): AssociatedSiblingMetadataItem {
  return AssociatedSiblingMetadataItemFromJSONTyped(json, false);
}

export function AssociatedSiblingMetadataItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AssociatedSiblingMetadataItem {
  if (json == null) {
    return json;
  }
  return {
    aggIsDescriptionOf:
      json['agg_isDescriptionOf'] == null
        ? undefined
        : json['agg_isDescriptionOf'],
    aggIsTemporalStatOf:
      json['agg_isTemporalStatOf'] == null
        ? undefined
        : json['agg_isTemporalStatOf'],
    aggLargerWorkCitation:
      json['agg_largerWorkCitation'] == null
        ? undefined
        : json['agg_largerWorkCitation'],
    description: DescriptionFromJSON(json['description']),
    hash: json['hash'] == null ? undefined : json['hash'],
    id: json['id'] == null ? undefined : json['id'],
    idx: json['idx'] == null ? undefined : json['idx'],
    mdType: json['mdType'],
    origin: json['origin'] == null ? undefined : json['origin'],
    title: MultilingualValueFromJSON(json['title']),
    type: json['type'] == null ? undefined : json['type'],
    url:
      json['url'] == null ? undefined : MultilingualValueFromJSON(json['url']),
  };
}

export function AssociatedSiblingMetadataItemToJSON(
  value?: AssociatedSiblingMetadataItem | null
): any {
  if (value == null) {
    return value;
  }
  return {
    agg_isDescriptionOf: value['aggIsDescriptionOf'],
    agg_isTemporalStatOf: value['aggIsTemporalStatOf'],
    agg_largerWorkCitation: value['aggLargerWorkCitation'],
    description: DescriptionToJSON(value['description']),
    hash: value['hash'],
    id: value['id'],
    idx: value['idx'],
    mdType: value['mdType'],
    origin: value['origin'],
    title: MultilingualValueToJSON(value['title']),
    type: value['type'],
    url: MultilingualValueToJSON(value['url']),
  };
}
