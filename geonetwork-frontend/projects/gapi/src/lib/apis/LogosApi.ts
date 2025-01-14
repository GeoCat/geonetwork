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

export interface AddLogoRequest {
  file: Array<Blob>;
  overwrite?: boolean;
}

export interface DeleteLogoRequest {
  file: string;
}

export interface GetLogoRequest {
  file: string;
}

/**
 *
 */
export class LogosApi extends runtime.BaseAPI {
  /**
   * Add a logo
   */
  async addLogoRaw(
    requestParameters: AddLogoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<string>> {
    if (requestParameters['file'] == null) {
      throw new runtime.RequiredError(
        'file',
        'Required parameter "file" was null or undefined when calling addLogo().'
      );
    }

    const queryParameters: any = {};

    if (requestParameters['file'] != null) {
      queryParameters['file'] = requestParameters['file'];
    }

    if (requestParameters['overwrite'] != null) {
      queryParameters['overwrite'] = requestParameters['overwrite'];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/logos`,
        method: 'POST',
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
   * Add a logo
   */
  async addLogo(
    requestParameters: AddLogoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<string> {
    const response = await this.addLogoRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Remove a logo
   */
  async deleteLogoRaw(
    requestParameters: DeleteLogoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['file'] == null) {
      throw new runtime.RequiredError(
        'file',
        'Required parameter "file" was null or undefined when calling deleteLogo().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/logos/{file}`.replace(
          `{${'file'}}`,
          encodeURIComponent(String(requestParameters['file']))
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
   * Remove a logo
   */
  async deleteLogo(
    requestParameters: DeleteLogoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.deleteLogoRaw(requestParameters, initOverrides);
  }

  /**
   * Get a logo
   */
  async getLogoRaw(
    requestParameters: GetLogoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['file'] == null) {
      throw new runtime.RequiredError(
        'file',
        'Required parameter "file" was null or undefined when calling getLogo().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/logos/{file}`.replace(
          `{${'file'}}`,
          encodeURIComponent(String(requestParameters['file']))
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
   * Get a logo
   */
  async getLogo(
    requestParameters: GetLogoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.getLogoRaw(requestParameters, initOverrides);
  }

  /**
   * Logos are used for the catalog, the groups logos, and harvester icons. Logos are stored in the data directory in <dataDirectory>/resources/images/harvesting.<br/> Records are attached to a source. A source can be the local catalog or a harvester node. When a source is created, its logo is located in the images/logos folder with the source UUID as filename. For some sources the logo can be automatically retrieved (eg. when harvesting GeoNetwork catalogs). For others, the logo is usually manually defined when configuring the harvester.
   * Get all logos
   */
  async getLogosRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Set<string>>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/logos`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Logos are used for the catalog, the groups logos, and harvester icons. Logos are stored in the data directory in <dataDirectory>/resources/images/harvesting.<br/> Records are attached to a source. A source can be the local catalog or a harvester node. When a source is created, its logo is located in the images/logos folder with the source UUID as filename. For some sources the logo can be automatically retrieved (eg. when harvesting GeoNetwork catalogs). For others, the logo is usually manually defined when configuring the harvester.
   * Get all logos
   */
  async getLogos(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Set<string>> {
    const response = await this.getLogosRaw(initOverrides);
    return await response.value();
  }
}
