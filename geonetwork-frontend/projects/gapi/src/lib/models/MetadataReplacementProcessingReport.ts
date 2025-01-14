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
import type { Report } from './Report';
import { ReportFromJSON, ReportFromJSONTyped, ReportToJSON } from './Report';
import type { InfoReport } from './InfoReport';
import {
  InfoReportFromJSON,
  InfoReportFromJSONTyped,
  InfoReportToJSON,
} from './InfoReport';
import type { ReplaceReport } from './ReplaceReport';
import {
  ReplaceReportFromJSON,
  ReplaceReportFromJSONTyped,
  ReplaceReportToJSON,
} from './ReplaceReport';

/**
 *
 * @export
 * @interface MetadataReplacementProcessingReport
 */
export interface MetadataReplacementProcessingReport {
  /**
   *
   * @type {number}
   * @memberof MetadataReplacementProcessingReport
   */
  ellapsedTimeInSeconds?: number;
  /**
   *
   * @type {string}
   * @memberof MetadataReplacementProcessingReport
   */
  endIsoDateTime?: string;
  /**
   *
   * @type {Array<Report>}
   * @memberof MetadataReplacementProcessingReport
   */
  errors?: Array<Report>;
  /**
   *
   * @type {Array<InfoReport>}
   * @memberof MetadataReplacementProcessingReport
   */
  infos?: Array<InfoReport>;
  /**
   *
   * @type {Set<number>}
   * @memberof MetadataReplacementProcessingReport
   */
  metadata?: Set<number>;
  /**
   *
   * @type {{ [key: string]: ReplaceReport; }}
   * @memberof MetadataReplacementProcessingReport
   */
  metadataChanges?: { [key: string]: ReplaceReport };
  /**
   *
   * @type {{ [key: string]: Array<Report>; }}
   * @memberof MetadataReplacementProcessingReport
   */
  metadataErrors?: { [key: string]: Array<Report> };
  /**
   *
   * @type {{ [key: string]: Array<InfoReport>; }}
   * @memberof MetadataReplacementProcessingReport
   */
  metadataInfos?: { [key: string]: Array<InfoReport> };
  /**
   *
   * @type {number}
   * @memberof MetadataReplacementProcessingReport
   */
  noProcessFoundCount?: number;
  /**
   *
   * @type {number}
   * @memberof MetadataReplacementProcessingReport
   */
  numberOfNullRecords?: number;
  /**
   *
   * @type {number}
   * @memberof MetadataReplacementProcessingReport
   */
  numberOfRecordNotFound?: number;
  /**
   *
   * @type {number}
   * @memberof MetadataReplacementProcessingReport
   */
  numberOfRecords?: number;
  /**
   *
   * @type {number}
   * @memberof MetadataReplacementProcessingReport
   */
  numberOfRecordsChanged?: number;
  /**
   *
   * @type {number}
   * @memberof MetadataReplacementProcessingReport
   */
  numberOfRecordsNotChanged?: number;
  /**
   *
   * @type {number}
   * @memberof MetadataReplacementProcessingReport
   */
  numberOfRecordsNotEditable?: number;
  /**
   *
   * @type {number}
   * @memberof MetadataReplacementProcessingReport
   */
  numberOfRecordsProcessed?: number;
  /**
   *
   * @type {number}
   * @memberof MetadataReplacementProcessingReport
   */
  numberOfRecordsUnchanged?: number;
  /**
   *
   * @type {number}
   * @memberof MetadataReplacementProcessingReport
   */
  numberOfRecordsWithErrors?: number;
  /**
   *
   * @type {string}
   * @memberof MetadataReplacementProcessingReport
   */
  processId?: string;
  /**
   *
   * @type {boolean}
   * @memberof MetadataReplacementProcessingReport
   */
  running?: boolean;
  /**
   *
   * @type {string}
   * @memberof MetadataReplacementProcessingReport
   */
  startIsoDateTime?: string;
  /**
   *
   * @type {number}
   * @memberof MetadataReplacementProcessingReport
   */
  totalRecords?: number;
  /**
   *
   * @type {number}
   * @memberof MetadataReplacementProcessingReport
   */
  totalTimeInSeconds?: number;
  /**
   *
   * @type {string}
   * @memberof MetadataReplacementProcessingReport
   */
  type?: string;
  /**
   *
   * @type {string}
   * @memberof MetadataReplacementProcessingReport
   */
  uuid?: string;
}

/**
 * Check if a given object implements the MetadataReplacementProcessingReport interface.
 */
export function instanceOfMetadataReplacementProcessingReport(
  value: object
): value is MetadataReplacementProcessingReport {
  return true;
}

export function MetadataReplacementProcessingReportFromJSON(
  json: any
): MetadataReplacementProcessingReport {
  return MetadataReplacementProcessingReportFromJSONTyped(json, false);
}

export function MetadataReplacementProcessingReportFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): MetadataReplacementProcessingReport {
  if (json == null) {
    return json;
  }
  return {
    ellapsedTimeInSeconds:
      json['ellapsedTimeInSeconds'] == null
        ? undefined
        : json['ellapsedTimeInSeconds'],
    endIsoDateTime:
      json['endIsoDateTime'] == null ? undefined : json['endIsoDateTime'],
    errors:
      json['errors'] == null
        ? undefined
        : (json['errors'] as Array<any>).map(ReportFromJSON),
    infos:
      json['infos'] == null
        ? undefined
        : (json['infos'] as Array<any>).map(InfoReportFromJSON),
    metadata: json['metadata'] == null ? undefined : json['metadata'],
    metadataChanges:
      json['metadataChanges'] == null
        ? undefined
        : mapValues(json['metadataChanges'], ReplaceReportFromJSON),
    metadataErrors:
      json['metadataErrors'] == null ? undefined : json['metadataErrors'],
    metadataInfos:
      json['metadataInfos'] == null ? undefined : json['metadataInfos'],
    noProcessFoundCount:
      json['noProcessFoundCount'] == null
        ? undefined
        : json['noProcessFoundCount'],
    numberOfNullRecords:
      json['numberOfNullRecords'] == null
        ? undefined
        : json['numberOfNullRecords'],
    numberOfRecordNotFound:
      json['numberOfRecordNotFound'] == null
        ? undefined
        : json['numberOfRecordNotFound'],
    numberOfRecords:
      json['numberOfRecords'] == null ? undefined : json['numberOfRecords'],
    numberOfRecordsChanged:
      json['numberOfRecordsChanged'] == null
        ? undefined
        : json['numberOfRecordsChanged'],
    numberOfRecordsNotChanged:
      json['numberOfRecordsNotChanged'] == null
        ? undefined
        : json['numberOfRecordsNotChanged'],
    numberOfRecordsNotEditable:
      json['numberOfRecordsNotEditable'] == null
        ? undefined
        : json['numberOfRecordsNotEditable'],
    numberOfRecordsProcessed:
      json['numberOfRecordsProcessed'] == null
        ? undefined
        : json['numberOfRecordsProcessed'],
    numberOfRecordsUnchanged:
      json['numberOfRecordsUnchanged'] == null
        ? undefined
        : json['numberOfRecordsUnchanged'],
    numberOfRecordsWithErrors:
      json['numberOfRecordsWithErrors'] == null
        ? undefined
        : json['numberOfRecordsWithErrors'],
    processId: json['processId'] == null ? undefined : json['processId'],
    running: json['running'] == null ? undefined : json['running'],
    startIsoDateTime:
      json['startIsoDateTime'] == null ? undefined : json['startIsoDateTime'],
    totalRecords:
      json['totalRecords'] == null ? undefined : json['totalRecords'],
    totalTimeInSeconds:
      json['totalTimeInSeconds'] == null
        ? undefined
        : json['totalTimeInSeconds'],
    type: json['type'] == null ? undefined : json['type'],
    uuid: json['uuid'] == null ? undefined : json['uuid'],
  };
}

export function MetadataReplacementProcessingReportToJSON(
  value?: MetadataReplacementProcessingReport | null
): any {
  if (value == null) {
    return value;
  }
  return {
    ellapsedTimeInSeconds: value['ellapsedTimeInSeconds'],
    endIsoDateTime: value['endIsoDateTime'],
    errors:
      value['errors'] == null
        ? undefined
        : (value['errors'] as Array<any>).map(ReportToJSON),
    infos:
      value['infos'] == null
        ? undefined
        : (value['infos'] as Array<any>).map(InfoReportToJSON),
    metadata:
      value['metadata'] == null
        ? undefined
        : Array.from(value['metadata'] as Set<any>),
    metadataChanges:
      value['metadataChanges'] == null
        ? undefined
        : mapValues(value['metadataChanges'], ReplaceReportToJSON),
    metadataErrors: value['metadataErrors'],
    metadataInfos: value['metadataInfos'],
    noProcessFoundCount: value['noProcessFoundCount'],
    numberOfNullRecords: value['numberOfNullRecords'],
    numberOfRecordNotFound: value['numberOfRecordNotFound'],
    numberOfRecords: value['numberOfRecords'],
    numberOfRecordsChanged: value['numberOfRecordsChanged'],
    numberOfRecordsNotChanged: value['numberOfRecordsNotChanged'],
    numberOfRecordsNotEditable: value['numberOfRecordsNotEditable'],
    numberOfRecordsProcessed: value['numberOfRecordsProcessed'],
    numberOfRecordsUnchanged: value['numberOfRecordsUnchanged'],
    numberOfRecordsWithErrors: value['numberOfRecordsWithErrors'],
    processId: value['processId'],
    running: value['running'],
    startIsoDateTime: value['startIsoDateTime'],
    totalRecords: value['totalRecords'],
    totalTimeInSeconds: value['totalTimeInSeconds'],
    type: value['type'],
    uuid: value['uuid'],
  };
}
