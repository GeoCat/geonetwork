/* tslint:disable */
/* eslint-disable */
/**
 * GeoNetwork API
 * This API exposes endpoints to GeoNetwork API.
 *
 * The version of the OpenAPI document: 5.0.0
 * Contact: geonetwork-users@lists.sourceforge.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';

export interface GetRecord1Request {
  uuid: string;
  formatterId: string;
}

export interface GetRecord2Request {
  uuid: string;
}

/**
 *
 */
export class RecordControllerApi extends runtime.BaseAPI {
  /**
   */
  async getRecord1Raw(
    requestParameters: GetRecord1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<string>> {
    if (requestParameters['uuid'] == null) {
      throw new runtime.RequiredError(
        'uuid',
        'Required parameter "uuid" was null or undefined when calling getRecord1().'
      );
    }

    if (requestParameters['formatterId'] == null) {
      throw new runtime.RequiredError(
        'formatterId',
        'Required parameter "formatterId" was null or undefined when calling getRecord1().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/records/{uuid}/formatters/{formatterId}`
          .replace(
            `{${'uuid'}}`,
            encodeURIComponent(String(requestParameters['uuid']))
          )
          .replace(
            `{${'formatterId'}}`,
            encodeURIComponent(String(requestParameters['formatterId']))
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
   */
  async getRecord1(
    requestParameters: GetRecord1Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<string> {
    const response = await this.getRecord1Raw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   */
  async getRecord2Raw(
    requestParameters: GetRecord2Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<string>> {
    if (requestParameters['uuid'] == null) {
      throw new runtime.RequiredError(
        'uuid',
        'Required parameter "uuid" was null or undefined when calling getRecord2().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/records/{uuid}`.replace(
          `{${'uuid'}}`,
          encodeURIComponent(String(requestParameters['uuid']))
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
   */
  async getRecord2(
    requestParameters: GetRecord2Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<string> {
    const response = await this.getRecord2Raw(requestParameters, initOverrides);
    return await response.value();
  }
}