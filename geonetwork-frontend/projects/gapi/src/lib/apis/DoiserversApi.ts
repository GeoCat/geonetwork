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
import type { AnonymousDoiServer, DoiServerDto } from '../models/index';
import {
  AnonymousDoiServerFromJSON,
  AnonymousDoiServerToJSON,
  DoiServerDtoFromJSON,
  DoiServerDtoToJSON,
} from '../models/index';

export interface AddDoiServerRequest {
  doiServerDto: DoiServerDto;
}

export interface DeleteMapserverRequest {
  doiServerId: number;
}

export interface GetDoiServerRequest {
  doiServerId: string;
}

export interface GetDoiServersRequest {
  metadataId: number;
}

export interface UpdateDoiServerRequest {
  doiServerId: number;
  doiServerDto: DoiServerDto;
}

export interface UpdateDoiServerAuthRequest {
  doiServerId: number;
  password: string;
}

/**
 *
 */
export class DoiserversApi extends runtime.BaseAPI {
  /**
   * Return the id of the newly created DOI server.
   * Add a DOI server
   */
  async addDoiServerRaw(
    requestParameters: AddDoiServerRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<number>> {
    if (requestParameters['doiServerDto'] == null) {
      throw new runtime.RequiredError(
        'doiServerDto',
        'Required parameter "doiServerDto" was null or undefined when calling addDoiServer().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/doiservers`,
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: DoiServerDtoToJSON(requestParameters['doiServerDto']),
      },
      initOverrides
    );

    if (this.isJsonMime(response.headers.get('content-type'))) {
      return new runtime.JSONApiResponse<number>(response);
    } else {
      return new runtime.TextApiResponse(response) as any;
    }
  }

  /**
   * Return the id of the newly created DOI server.
   * Add a DOI server
   */
  async addDoiServer(
    requestParameters: AddDoiServerRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<number> {
    const response = await this.addDoiServerRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Remove a DOI server
   */
  async deleteMapserverRaw(
    requestParameters: DeleteMapserverRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['doiServerId'] == null) {
      throw new runtime.RequiredError(
        'doiServerId',
        'Required parameter "doiServerId" was null or undefined when calling deleteMapserver().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/doiservers/{doiServerId}`.replace(
          `{${'doiServerId'}}`,
          encodeURIComponent(String(requestParameters['doiServerId']))
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
   * Remove a DOI server
   */
  async deleteMapserver(
    requestParameters: DeleteMapserverRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.deleteMapserverRaw(requestParameters, initOverrides);
  }

  /**
   * Get a DOI Server
   */
  async getDoiServerRaw(
    requestParameters: GetDoiServerRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['doiServerId'] == null) {
      throw new runtime.RequiredError(
        'doiServerId',
        'Required parameter "doiServerId" was null or undefined when calling getDoiServer().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/doiservers/{doiServerId}`.replace(
          `{${'doiServerId'}}`,
          encodeURIComponent(String(requestParameters['doiServerId']))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Get a DOI Server
   */
  async getDoiServer(
    requestParameters: GetDoiServerRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.getDoiServerRaw(requestParameters, initOverrides);
  }

  /**
   * Get DOI servers that can be used with a metadata
   */
  async getDoiServersRaw(
    requestParameters: GetDoiServersRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<AnonymousDoiServer>>> {
    if (requestParameters['metadataId'] == null) {
      throw new runtime.RequiredError(
        'metadataId',
        'Required parameter "metadataId" was null or undefined when calling getDoiServers().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/doiservers/metadata/{metadataId}`.replace(
          `{${'metadataId'}}`,
          encodeURIComponent(String(requestParameters['metadataId']))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(AnonymousDoiServerFromJSON)
    );
  }

  /**
   * Get DOI servers that can be used with a metadata
   */
  async getDoiServers(
    requestParameters: GetDoiServersRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<AnonymousDoiServer>> {
    const response = await this.getDoiServersRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Get DOI servers
   */
  async getDoiServers1Raw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<AnonymousDoiServer>>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/doiservers`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(AnonymousDoiServerFromJSON)
    );
  }

  /**
   * Get DOI servers
   */
  async getDoiServers1(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<AnonymousDoiServer>> {
    const response = await this.getDoiServers1Raw(initOverrides);
    return await response.value();
  }

  /**
   * Update a DOI server
   */
  async updateDoiServerRaw(
    requestParameters: UpdateDoiServerRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['doiServerId'] == null) {
      throw new runtime.RequiredError(
        'doiServerId',
        'Required parameter "doiServerId" was null or undefined when calling updateDoiServer().'
      );
    }

    if (requestParameters['doiServerDto'] == null) {
      throw new runtime.RequiredError(
        'doiServerDto',
        'Required parameter "doiServerDto" was null or undefined when calling updateDoiServer().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/doiservers/{doiServerId}`.replace(
          `{${'doiServerId'}}`,
          encodeURIComponent(String(requestParameters['doiServerId']))
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: DoiServerDtoToJSON(requestParameters['doiServerDto']),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Update a DOI server
   */
  async updateDoiServer(
    requestParameters: UpdateDoiServerRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.updateDoiServerRaw(requestParameters, initOverrides);
  }

  /**
   * Update a DOI server authentication
   */
  async updateDoiServerAuthRaw(
    requestParameters: UpdateDoiServerAuthRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['doiServerId'] == null) {
      throw new runtime.RequiredError(
        'doiServerId',
        'Required parameter "doiServerId" was null or undefined when calling updateDoiServerAuth().'
      );
    }

    if (requestParameters['password'] == null) {
      throw new runtime.RequiredError(
        'password',
        'Required parameter "password" was null or undefined when calling updateDoiServerAuth().'
      );
    }

    const queryParameters: any = {};

    if (requestParameters['password'] != null) {
      queryParameters['password'] = requestParameters['password'];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/doiservers/{doiServerId}/auth`.replace(
          `{${'doiServerId'}}`,
          encodeURIComponent(String(requestParameters['doiServerId']))
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
   * Update a DOI server authentication
   */
  async updateDoiServerAuth(
    requestParameters: UpdateDoiServerAuthRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.updateDoiServerAuthRaw(requestParameters, initOverrides);
  }
}
