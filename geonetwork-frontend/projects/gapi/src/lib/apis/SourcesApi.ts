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

import * as runtime from '../runtime';
import type { Source } from '../models/index';
import { SourceFromJSON, SourceToJSON } from '../models/index';

export interface AddSourceRequest {
  source: Source;
}

export interface DeleteSourceRequest {
  sourceIdentifier: string;
}

export interface GetSourcesRequest {
  group?: number;
}

export interface GetSourcesByTypeRequest {
  type: GetSourcesByTypeTypeEnum;
}

export interface UpdateSourceRequest {
  sourceIdentifier: string;
  source: Source;
}

/**
 *
 */
export class SourcesApi extends runtime.BaseAPI {
  /**
   * Add a source
   */
  async addSourceRaw(
    requestParameters: AddSourceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<string>> {
    if (requestParameters['source'] == null) {
      throw new runtime.RequiredError(
        'source',
        'Required parameter "source" was null or undefined when calling addSource().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/sources`,
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: SourceToJSON(requestParameters['source']),
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
   * Add a source
   */
  async addSource(
    requestParameters: AddSourceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<string> {
    const response = await this.addSourceRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Remove a source
   */
  async deleteSourceRaw(
    requestParameters: DeleteSourceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['sourceIdentifier'] == null) {
      throw new runtime.RequiredError(
        'sourceIdentifier',
        'Required parameter "sourceIdentifier" was null or undefined when calling deleteSource().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/sources/{sourceIdentifier}`.replace(
          `{${'sourceIdentifier'}}`,
          encodeURIComponent(String(requestParameters['sourceIdentifier']))
        ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Remove a source
   */
  async deleteSource(
    requestParameters: DeleteSourceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.deleteSourceRaw(requestParameters, initOverrides);
  }

  /**
   * Sources are the local catalogue, subportal, external catalogue (when importing MEF files) or harvesters.
   * Get all sources
   */
  async getSourcesRaw(
    requestParameters: GetSourcesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<Source>>> {
    const queryParameters: any = {};

    if (requestParameters['group'] != null) {
      queryParameters['group'] = requestParameters['group'];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/sources`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(SourceFromJSON)
    );
  }

  /**
   * Sources are the local catalogue, subportal, external catalogue (when importing MEF files) or harvesters.
   * Get all sources
   */
  async getSources(
    requestParameters: GetSourcesRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<Source>> {
    const response = await this.getSourcesRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Sources are the local catalogue, subportal, external catalogue (when importing MEF files) or harvesters.
   * Get all sources by type
   */
  async getSourcesByTypeRaw(
    requestParameters: GetSourcesByTypeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<Source>>> {
    if (requestParameters['type'] == null) {
      throw new runtime.RequiredError(
        'type',
        'Required parameter "type" was null or undefined when calling getSourcesByType().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/sources/{type}`.replace(
          `{${'type'}}`,
          encodeURIComponent(String(requestParameters['type']))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(SourceFromJSON)
    );
  }

  /**
   * Sources are the local catalogue, subportal, external catalogue (when importing MEF files) or harvesters.
   * Get all sources by type
   */
  async getSourcesByType(
    requestParameters: GetSourcesByTypeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<Source>> {
    const response = await this.getSourcesByTypeRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Update a source
   */
  async updateSourceRaw(
    requestParameters: UpdateSourceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['sourceIdentifier'] == null) {
      throw new runtime.RequiredError(
        'sourceIdentifier',
        'Required parameter "sourceIdentifier" was null or undefined when calling updateSource().'
      );
    }

    if (requestParameters['source'] == null) {
      throw new runtime.RequiredError(
        'source',
        'Required parameter "source" was null or undefined when calling updateSource().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/sources/{sourceIdentifier}`.replace(
          `{${'sourceIdentifier'}}`,
          encodeURIComponent(String(requestParameters['sourceIdentifier']))
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: SourceToJSON(requestParameters['source']),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Update a source
   */
  async updateSource(
    requestParameters: UpdateSourceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.updateSourceRaw(requestParameters, initOverrides);
  }
}

/**
 * @export
 */
export const GetSourcesByTypeTypeEnum = {
  Portal: 'portal',
  Subportal: 'subportal',
  Externalportal: 'externalportal',
  Harvester: 'harvester',
} as const;
export type GetSourcesByTypeTypeEnum =
  (typeof GetSourcesByTypeTypeEnum)[keyof typeof GetSourcesByTypeTypeEnum];
