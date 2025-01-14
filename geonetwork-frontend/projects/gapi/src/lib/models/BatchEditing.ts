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
import type { Section } from './Section';
import {
  SectionFromJSON,
  SectionFromJSONTyped,
  SectionToJSON,
} from './Section';

/**
 *
 * @export
 * @interface BatchEditing
 */
export interface BatchEditing {
  /**
   *
   * @type {Array<Section>}
   * @memberof BatchEditing
   */
  section: Array<Section>;
}

/**
 * Check if a given object implements the BatchEditing interface.
 */
export function instanceOfBatchEditing(value: object): value is BatchEditing {
  if (!('section' in value) || value['section'] === undefined) return false;
  return true;
}

export function BatchEditingFromJSON(json: any): BatchEditing {
  return BatchEditingFromJSONTyped(json, false);
}

export function BatchEditingFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BatchEditing {
  if (json == null) {
    return json;
  }
  return {
    section: (json['section'] as Array<any>).map(SectionFromJSON),
  };
}

export function BatchEditingToJSON(value?: BatchEditing | null): any {
  if (value == null) {
    return value;
  }
  return {
    section: (value['section'] as Array<any>).map(SectionToJSON),
  };
}
