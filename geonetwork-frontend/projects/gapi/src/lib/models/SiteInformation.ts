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
 * @interface SiteInformation
 */
export interface SiteInformation {
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof SiteInformation
   */
  catalogue?: { [key: string]: string };
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof SiteInformation
   */
  database?: { [key: string]: string };
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof SiteInformation
   */
  env?: { [key: string]: string };
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof SiteInformation
   */
  index?: { [key: string]: string };
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof SiteInformation
   */
  main?: { [key: string]: string };
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof SiteInformation
   */
  version?: { [key: string]: string };
}

/**
 * Check if a given object implements the SiteInformation interface.
 */
export function instanceOfSiteInformation(
  value: object
): value is SiteInformation {
  return true;
}

export function SiteInformationFromJSON(json: any): SiteInformation {
  return SiteInformationFromJSONTyped(json, false);
}

export function SiteInformationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SiteInformation {
  if (json == null) {
    return json;
  }
  return {
    catalogue: json['catalogue'] == null ? undefined : json['catalogue'],
    database: json['database'] == null ? undefined : json['database'],
    env: json['env'] == null ? undefined : json['env'],
    index: json['index'] == null ? undefined : json['index'],
    main: json['main'] == null ? undefined : json['main'],
    version: json['version'] == null ? undefined : json['version'],
  };
}

export function SiteInformationToJSON(value?: SiteInformation | null): any {
  if (value == null) {
    return value;
  }
  return {
    catalogue: value['catalogue'],
    database: value['database'],
    env: value['env'],
    index: value['index'],
    main: value['main'],
    version: value['version'],
  };
}
