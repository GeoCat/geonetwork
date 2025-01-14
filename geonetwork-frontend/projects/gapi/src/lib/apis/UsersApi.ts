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
import type {
  OwnerResponse,
  PasswordResetDto,
  PasswordUpdateParameter,
  TransferRequest,
  User,
  UserDto,
  UserGroup,
  UserGroupsResponse,
  UserRegisterDto,
} from '../models/index';
import {
  OwnerResponseFromJSON,
  OwnerResponseToJSON,
  PasswordResetDtoFromJSON,
  PasswordResetDtoToJSON,
  PasswordUpdateParameterFromJSON,
  PasswordUpdateParameterToJSON,
  TransferRequestFromJSON,
  TransferRequestToJSON,
  UserFromJSON,
  UserToJSON,
  UserDtoFromJSON,
  UserDtoToJSON,
  UserGroupFromJSON,
  UserGroupToJSON,
  UserGroupsResponseFromJSON,
  UserGroupsResponseToJSON,
  UserRegisterDtoFromJSON,
  UserRegisterDtoToJSON,
} from '../models/index';

export interface CheckUserPropertyExistRequest {
  property: string;
  exist: string;
}

export interface CreateUserRequest {
  userDto: UserDto;
}

export interface DeleteUserRequest {
  userIdentifier: number;
}

export interface GetUserRequest {
  userIdentifier: number;
}

export interface GetUserIdenticonRequest {
  userIdentifier: number;
  size?: number;
}

export interface RegisterUserRequest {
  userRegisterDto: UserRegisterDto;
}

export interface ResetUserPasswordRequest {
  userIdentifier: number;
  passwordResetDto: PasswordResetDto;
}

export interface RetrieveUserGroupsRequest {
  userIdentifier: number;
}

export interface SaveOwnersRequest {
  transferRequest: TransferRequest;
}

export interface SendPasswordByEmailRequest {
  username: string;
}

export interface UpdatePasswordRequest {
  username: string;
  passwordUpdateParameter: PasswordUpdateParameter;
}

export interface UpdateUserRequest {
  userIdentifier: number;
  userDto: UserDto;
}

/**
 *
 */
export class UsersApi extends runtime.BaseAPI {
  /**
   * Check if a user property already exist
   */
  async checkUserPropertyExistRaw(
    requestParameters: CheckUserPropertyExistRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<string>> {
    if (requestParameters['property'] == null) {
      throw new runtime.RequiredError(
        'property',
        'Required parameter "property" was null or undefined when calling checkUserPropertyExist().'
      );
    }

    if (requestParameters['exist'] == null) {
      throw new runtime.RequiredError(
        'exist',
        'Required parameter "exist" was null or undefined when calling checkUserPropertyExist().'
      );
    }

    const queryParameters: any = {};

    if (requestParameters['exist'] != null) {
      queryParameters['exist'] = requestParameters['exist'];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/users/properties/{property}`.replace(
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
   * Check if a user property already exist
   */
  async checkUserPropertyExist(
    requestParameters: CheckUserPropertyExistRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<string> {
    const response = await this.checkUserPropertyExistRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Creates a catalog user.
   * Creates a user
   */
  async createUserRaw(
    requestParameters: CreateUserRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<string>> {
    if (requestParameters['userDto'] == null) {
      throw new runtime.RequiredError(
        'userDto',
        'Required parameter "userDto" was null or undefined when calling createUser().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/users`,
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: UserDtoToJSON(requestParameters['userDto']),
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
   * Creates a catalog user.
   * Creates a user
   */
  async createUser(
    requestParameters: CreateUserRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<string> {
    const response = await this.createUserRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Deletes a catalog user by identifier.
   * Delete a user
   */
  async deleteUserRaw(
    requestParameters: DeleteUserRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<string>> {
    if (requestParameters['userIdentifier'] == null) {
      throw new runtime.RequiredError(
        'userIdentifier',
        'Required parameter "userIdentifier" was null or undefined when calling deleteUser().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/users/{userIdentifier}`.replace(
          `{${'userIdentifier'}}`,
          encodeURIComponent(String(requestParameters['userIdentifier']))
        ),
        method: 'DELETE',
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
   * Deletes a catalog user by identifier.
   * Delete a user
   */
  async deleteUser(
    requestParameters: DeleteUserRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<string> {
    const response = await this.deleteUserRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Return users who actually owns one or more records.
   * Get owners
   */
  async getRecordOwnersRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<OwnerResponse>>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/users/owners`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(OwnerResponseFromJSON)
    );
  }

  /**
   * Return users who actually owns one or more records.
   * Get owners
   */
  async getRecordOwners(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<OwnerResponse>> {
    const response = await this.getRecordOwnersRaw(initOverrides);
    return await response.value();
  }

  /**
   * Get user
   */
  async getUserRaw(
    requestParameters: GetUserRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<User>> {
    if (requestParameters['userIdentifier'] == null) {
      throw new runtime.RequiredError(
        'userIdentifier',
        'Required parameter "userIdentifier" was null or undefined when calling getUser().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/users/{userIdentifier}`.replace(
          `{${'userIdentifier'}}`,
          encodeURIComponent(String(requestParameters['userIdentifier']))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      UserFromJSON(jsonValue)
    );
  }

  /**
   * Get user
   */
  async getUser(
    requestParameters: GetUserRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<User> {
    const response = await this.getUserRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Get user identicon
   */
  async getUserIdenticonRaw(
    requestParameters: GetUserIdenticonRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['userIdentifier'] == null) {
      throw new runtime.RequiredError(
        'userIdentifier',
        'Required parameter "userIdentifier" was null or undefined when calling getUserIdenticon().'
      );
    }

    const queryParameters: any = {};

    if (requestParameters['size'] != null) {
      queryParameters['size'] = requestParameters['size'];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/users/{userIdentifier}.png`.replace(
          `{${'userIdentifier'}}`,
          encodeURIComponent(String(requestParameters['userIdentifier']))
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
   * Get user identicon
   */
  async getUserIdenticon(
    requestParameters: GetUserIdenticonRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.getUserIdenticonRaw(requestParameters, initOverrides);
  }

  /**
   * Get users
   */
  async getUsersRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<User>>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/users`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(UserFromJSON)
    );
  }

  /**
   * Get users
   */
  async getUsers(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<User>> {
    const response = await this.getUsersRaw(initOverrides);
    return await response.value();
  }

  /**
   * User is created with a registered user profile. username field is ignored and the email is used as username. Password is sent by email. Catalog administrator is also notified.
   * Create user account
   */
  async registerUserRaw(
    requestParameters: RegisterUserRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<string>> {
    if (requestParameters['userRegisterDto'] == null) {
      throw new runtime.RequiredError(
        'userRegisterDto',
        'Required parameter "userRegisterDto" was null or undefined when calling registerUser().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/user/actions/register`,
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: UserRegisterDtoToJSON(requestParameters['userRegisterDto']),
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
   * User is created with a registered user profile. username field is ignored and the email is used as username. Password is sent by email. Catalog administrator is also notified.
   * Create user account
   */
  async registerUser(
    requestParameters: RegisterUserRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<string> {
    const response = await this.registerUserRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Resets the user password.
   * Resets user password
   */
  async resetUserPasswordRaw(
    requestParameters: ResetUserPasswordRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<string>> {
    if (requestParameters['userIdentifier'] == null) {
      throw new runtime.RequiredError(
        'userIdentifier',
        'Required parameter "userIdentifier" was null or undefined when calling resetUserPassword().'
      );
    }

    if (requestParameters['passwordResetDto'] == null) {
      throw new runtime.RequiredError(
        'passwordResetDto',
        'Required parameter "passwordResetDto" was null or undefined when calling resetUserPassword().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/users/{userIdentifier}/actions/forget-password`.replace(
          `{${'userIdentifier'}}`,
          encodeURIComponent(String(requestParameters['userIdentifier']))
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: PasswordResetDtoToJSON(requestParameters['passwordResetDto']),
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
   * Resets the user password.
   * Resets user password
   */
  async resetUserPassword(
    requestParameters: ResetUserPasswordRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<string> {
    const response = await this.resetUserPasswordRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Retrieve all user groups
   */
  async retrieveAllUserGroupsRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<UserGroupsResponse>>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/users/groups`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(UserGroupsResponseFromJSON)
    );
  }

  /**
   * Retrieve all user groups
   */
  async retrieveAllUserGroups(
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<UserGroupsResponse>> {
    const response = await this.retrieveAllUserGroupsRaw(initOverrides);
    return await response.value();
  }

  /**
   * Retrieve the user groups.
   * Retrieve user groups
   */
  async retrieveUserGroupsRaw(
    requestParameters: RetrieveUserGroupsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<Array<UserGroup>>> {
    if (requestParameters['userIdentifier'] == null) {
      throw new runtime.RequiredError(
        'userIdentifier',
        'Required parameter "userIdentifier" was null or undefined when calling retrieveUserGroups().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/users/{userIdentifier}/groups`.replace(
          `{${'userIdentifier'}}`,
          encodeURIComponent(String(requestParameters['userIdentifier']))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(UserGroupFromJSON)
    );
  }

  /**
   * Retrieve the user groups.
   * Retrieve user groups
   */
  async retrieveUserGroups(
    requestParameters: RetrieveUserGroupsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<Array<UserGroup>> {
    const response = await this.retrieveUserGroupsRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Transfer privileges
   */
  async saveOwnersRaw(
    requestParameters: SaveOwnersRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<string>> {
    if (requestParameters['transferRequest'] == null) {
      throw new runtime.RequiredError(
        'transferRequest',
        'Required parameter "transferRequest" was null or undefined when calling saveOwners().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/users/owners`,
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: TransferRequestToJSON(requestParameters['transferRequest']),
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
   * Transfer privileges
   */
  async saveOwners(
    requestParameters: SaveOwnersRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<string> {
    const response = await this.saveOwnersRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * An email is sent to the requested user with a link to reset his password. User MUST have an email to get the link. LDAP users will not be able to retrieve their password using this service.
   * Send user password reminder by email
   */
  async sendPasswordByEmailRaw(
    requestParameters: SendPasswordByEmailRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<string>> {
    if (requestParameters['username'] == null) {
      throw new runtime.RequiredError(
        'username',
        'Required parameter "username" was null or undefined when calling sendPasswordByEmail().'
      );
    }

    const queryParameters: any = {};

    if (requestParameters['username'] != null) {
      queryParameters['username'] = requestParameters['username'];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/user/actions/forgot-password`,
        method: 'PUT',
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
   * An email is sent to the requested user with a link to reset his password. User MUST have an email to get the link. LDAP users will not be able to retrieve their password using this service.
   * Send user password reminder by email
   */
  async sendPasswordByEmail(
    requestParameters: SendPasswordByEmailRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<string> {
    const response = await this.sendPasswordByEmailRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Get a valid changekey by email first and then update your password.
   * Update user password
   */
  async updatePasswordRaw(
    requestParameters: UpdatePasswordRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<string>> {
    if (requestParameters['username'] == null) {
      throw new runtime.RequiredError(
        'username',
        'Required parameter "username" was null or undefined when calling updatePassword().'
      );
    }

    if (requestParameters['passwordUpdateParameter'] == null) {
      throw new runtime.RequiredError(
        'passwordUpdateParameter',
        'Required parameter "passwordUpdateParameter" was null or undefined when calling updatePassword().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/user/{username}`.replace(
          `{${'username'}}`,
          encodeURIComponent(String(requestParameters['username']))
        ),
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: PasswordUpdateParameterToJSON(
          requestParameters['passwordUpdateParameter']
        ),
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
   * Get a valid changekey by email first and then update your password.
   * Update user password
   */
  async updatePassword(
    requestParameters: UpdatePasswordRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<string> {
    const response = await this.updatePasswordRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Updates a catalog user.
   * Update a user
   */
  async updateUserRaw(
    requestParameters: UpdateUserRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<string>> {
    if (requestParameters['userIdentifier'] == null) {
      throw new runtime.RequiredError(
        'userIdentifier',
        'Required parameter "userIdentifier" was null or undefined when calling updateUser().'
      );
    }

    if (requestParameters['userDto'] == null) {
      throw new runtime.RequiredError(
        'userDto',
        'Required parameter "userDto" was null or undefined when calling updateUser().'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/users/{userIdentifier}`.replace(
          `{${'userIdentifier'}}`,
          encodeURIComponent(String(requestParameters['userIdentifier']))
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: UserDtoToJSON(requestParameters['userDto']),
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
   * Updates a catalog user.
   * Update a user
   */
  async updateUser(
    requestParameters: UpdateUserRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<string> {
    const response = await this.updateUserRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
