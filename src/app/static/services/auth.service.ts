import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';
import { IUser, ITokenUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authCodeFlowConfig: AuthConfig = {
    tokenEndpoint: `${environment.backendUri}/token`,
    userinfoEndpoint: `${environment.backendUri}/users/me`,
    clientId: 'climb-web-ui',
    dummyClientSecret: 'null',
    scope: 'openid profile',
    oidc: false,
    sessionChecksEnabled: false,
    requireHttps: false,
  };

  constructor(
    private _oAuthService: OAuthService,
  ) {
    this._oAuthService.configure(this._authCodeFlowConfig);
    this._oAuthService.setStorage(localStorage);
  }

  /**
   * Login the current user to the oauth service, if a username and password are not
   * provided it will attempt to load an existing profile from storage.
   *
   * @param username  user username
   * @param password  user password
   * @returns         login result
   */
  async login(username?: string, password?: string): Promise<{ info: IUser }> {
    if (username !== undefined && password !== undefined) {
      const res: ITokenUser = await this._oAuthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(username, password) as ITokenUser;
      return res;
    }
    if (this._oAuthService.getAccessToken()) {
      return this._oAuthService.loadUserProfile() as Promise<{ info: IUser }>;
    }
    throw Error('No profile loaded');
  }

  /**
   * Log the user out of the oauth service.
   *
   * @returns logout result
   */
  async logout(): Promise<void> {
    return this._oAuthService.logOut();
  }

  /**
   * Get the information for the current logged in user.
   *
   * @returns user information
   */
  getCurrentUserInfo(): IUser {
    return this._oAuthService.getIdentityClaims() as IUser;
  }
}
