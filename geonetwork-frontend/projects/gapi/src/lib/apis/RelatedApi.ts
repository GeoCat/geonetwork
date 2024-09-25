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

import * as runtime from '../runtime';
import type { RelatedItemType, RelatedResponse } from '../models/index';
import {
  RelatedItemTypeFromJSON,
  RelatedItemTypeToJSON,
  RelatedResponseFromJSON,
  RelatedResponseToJSON,
} from '../models/index';

export interface GetAssociatedResourcesForRecordsRequest {
  type?: Array<RelatedItemType>;
  uuid?: Array<string>;
  approved?: boolean;
}

/**
 *
 */
export class RelatedApi extends runtime.BaseAPI {
  /**
   * Retrieve related services, datasets, onlines, thumbnails, sources, ... to all requested records.<br/><a href=\'https://geonetwork-opensource.org/manuals/trunk/eng/users/user-guide/associating-resources/index.html\'>More info</a>
   * Get record related resources for all requested metadatas
   */
  async getAssociatedResourcesForRecordsRaw(
    requestParameters: GetAssociatedResourcesForRecordsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<{ [key: string]: RelatedResponse }>> {
    const queryParameters: any = {};

    if (requestParameters['type'] != null) {
      queryParameters['type'] = requestParameters['type'];
    }

    if (requestParameters['uuid'] != null) {
      queryParameters['uuid'] = requestParameters['uuid'];
    }

    if (requestParameters['approved'] != null) {
      queryParameters['approved'] = requestParameters['approved'];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/related`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      runtime.mapValues(jsonValue, RelatedResponseFromJSON)
    );
  }

  /**
   * Retrieve related services, datasets, onlines, thumbnails, sources, ... to all requested records.<br/><a href=\'https://geonetwork-opensource.org/manuals/trunk/eng/users/user-guide/associating-resources/index.html\'>More info</a>
   * Get record related resources for all requested metadatas
   */
  async getAssociatedResourcesForRecords(
    requestParameters: GetAssociatedResourcesForRecordsRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<{ [key: string]: RelatedResponse }> {
    const response = await this.getAssociatedResourcesForRecordsRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }
}