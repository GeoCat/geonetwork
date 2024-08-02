/* tslint:disable */
/* eslint-disable */

/**
 * GeoNetwork API
 * This API exposes endpoints to GeoNetwork API.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: geonetwork-users@lists.sourceforge.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface GnLink
 */
export interface GnLink {
  /**
   *
   * @type {string}
   * @memberof GnLink
   */
  protocol?: string;
  /**
   *
   * @type {string}
   * @memberof GnLink
   */
  _function?: string;
  /**
   *
   * @type {string}
   * @memberof GnLink
   */
  applicationProfile?: string;
  /**
   *
   * @type {string}
   * @memberof GnLink
   */
  group?: string;
  /**
   *
   * @type {string}
   * @memberof GnLink
   */
  mimeType?: string;
  /**
   *
   * @type {string}
   * @memberof GnLink
   */
  nilReason?: string;
  /**
   *
   * @type {string}
   * @memberof GnLink
   */
  hash?: string;
  /**
   *
   * @type {string}
   * @memberof GnLink
   */
  idx?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof GnLink
   */
  urlObject?: { [key: string]: string };
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof GnLink
   */
  nameObject?: { [key: string]: string };
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof GnLink
   */
  descriptionObject?: { [key: string]: string };
}

/**
 * Check if a given object implements the GnLink interface.
 */
export function instanceOfGnLink(value: object): value is GnLink {
  return true;
}

export function GnLinkFromJSON(json: any): GnLink {
  return GnLinkFromJSONTyped(json, false);
}

export function GnLinkFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GnLink {
  if (json == null) {
    return json;
  }
  return {
    protocol: json['protocol'] == null ? undefined : json['protocol'],
    _function: json['function'] == null ? undefined : json['function'],
    applicationProfile:
      json['applicationProfile'] == null
        ? undefined
        : json['applicationProfile'],
    group: json['group'] == null ? undefined : json['group'],
    mimeType: json['mimeType'] == null ? undefined : json['mimeType'],
    nilReason: json['nilReason'] == null ? undefined : json['nilReason'],
    hash: json['hash'] == null ? undefined : json['hash'],
    idx: json['idx'] == null ? undefined : json['idx'],
    urlObject: json['urlObject'] == null ? undefined : json['urlObject'],
    nameObject: json['nameObject'] == null ? undefined : json['nameObject'],
    descriptionObject:
      json['descriptionObject'] == null ? undefined : json['descriptionObject'],
  };
}

export function GnLinkToJSON(value?: GnLink | null): any {
  if (value == null) {
    return value;
  }
  return {
    protocol: value['protocol'],
    function: value['_function'],
    applicationProfile: value['applicationProfile'],
    group: value['group'],
    mimeType: value['mimeType'],
    nilReason: value['nilReason'],
    hash: value['hash'],
    idx: value['idx'],
    urlObject: value['urlObject'],
    nameObject: value['nameObject'],
    descriptionObject: value['descriptionObject'],
  };
}
