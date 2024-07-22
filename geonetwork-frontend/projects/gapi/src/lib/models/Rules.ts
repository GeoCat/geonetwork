/* tslint:disable */
/* eslint-disable */
/**
 * GeoNetwork 4.4.5 OpenAPI Documentation
 * This is the description of the GeoNetwork OpenAPI. Use this API to manage your catalog.
 *
 * The version of the OpenAPI document: 4.4.5
 * Contact: geonetwork-users@lists.sourceforge.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Rule } from './Rule';
import { RuleFromJSON, RuleFromJSONTyped, RuleToJSON } from './Rule';

/**
 *
 * @export
 * @interface Rules
 */
export interface Rules {
  /**
   *
   * @type {Array<Rule>}
   * @memberof Rules
   */
  rule?: Array<Rule>;
}

/**
 * Check if a given object implements the Rules interface.
 */
export function instanceOfRules(value: object): value is Rules {
  return true;
}

export function RulesFromJSON(json: any): Rules {
  return RulesFromJSONTyped(json, false);
}

export function RulesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Rules {
  if (json == null) {
    return json;
  }
  return {
    rule:
      json['rule'] == null
        ? undefined
        : (json['rule'] as Array<any>).map(RuleFromJSON),
  };
}

export function RulesToJSON(value?: Rules | null): any {
  if (value == null) {
    return value;
  }
  return {
    rule:
      value['rule'] == null
        ? undefined
        : (value['rule'] as Array<any>).map(RuleToJSON),
  };
}