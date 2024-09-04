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

export interface AssignHarvestedRecordToSourceRequest {
  harvesterUuid: string;
  source: string;
}

export interface CheckHarvesterPropertyExistRequest {
  property: string;
  exist: string;
}

/**
 *
 */
export class HarvestersApi extends runtime.BaseAPI {
  /**
   * Assign harvester records to a new source
   */
  async assignHarvestedRecordToSourceRaw(
    requestParameters: AssignHarvestedRecordToSourceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['harvesterUuid'] == null) {
      throw new runtime.RequiredError(
        'harvesterUuid',
        'Required parameter "harvesterUuid" was null or undefined when calling assignHarvestedRecordToSource().'
      );
    }

    if (requestParameters['source'] == null) {
      throw new runtime.RequiredError(
        'source',
        'Required parameter "source" was null or undefined when calling assignHarvestedRecordToSource().'
      );
    }

    const queryParameters: any = {};

    if (requestParameters['source'] != null) {
      queryParameters['source'] = requestParameters['source'];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/harvesters/{harvesterUuid}/assign`.replace(
          `{${'harvesterUuid'}}`,
          encodeURIComponent(String(requestParameters['harvesterUuid']))
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Assign harvester records to a new source
   */
  async assignHarvestedRecordToSource(
    requestParameters: AssignHarvestedRecordToSourceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.assignHarvestedRecordToSourceRaw(
      requestParameters,
      initOverrides
    );
  }

  /**
   * Check if a harvester name or host already exist
   */
  async checkHarvesterPropertyExistRaw(
    requestParameters: CheckHarvesterPropertyExistRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<string>> {
    if (requestParameters['property'] == null) {
      throw new runtime.RequiredError(
        'property',
        'Required parameter "property" was null or undefined when calling checkHarvesterPropertyExist().'
      );
    }

    if (requestParameters['exist'] == null) {
      throw new runtime.RequiredError(
        'exist',
        'Required parameter "exist" was null or undefined when calling checkHarvesterPropertyExist().'
      );
    }

    const queryParameters: any = {};

    if (requestParameters['exist'] != null) {
      queryParameters['exist'] = requestParameters['exist'];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/harvesters/properties/{property}`.replace(
          `{${'property'}}`,
          encodeURIComponent(String(requestParameters['property']))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    if (this.isJsonMime(response.headers.get('content-type'))) {
      return new runtime.JSONApiResponse<string>(response);
    } else {
      return new runtime.TextApiResponse(response) as any;
    }
  }

  /**
   * Check if a harvester name or host already exist
   */
  async checkHarvesterPropertyExist(
    requestParameters: CheckHarvesterPropertyExistRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<string> {
    const response = await this.checkHarvesterPropertyExistRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }
}
