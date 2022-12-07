import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { IRegisterUser, IUser } from 'src/app/static/models/user.model';
import { AuthService } from 'src/app/static/services/auth.service';
import { STORAGE_KEY_ACCESS_TOKEN } from 'src/app/static/storage_keys.constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _loginUpdate: BehaviorSubject<boolean>;
  private _userInfo: IUser | undefined;

  constructor(
    private _authService: AuthService,
    private _http: HttpClient,
    private _router: Router,
  ) {
    this._loginUpdate = new BehaviorSubject<boolean>(false);
    this._userInfo = undefined;

    // On init check if already logged in and have a valid token
    this.login();
  }

  /**
   * Login a user with a username and password
   *
   * @param username  users username
   * @param password  users password
   * @returns         promise result
   */
  login(username?: string, password?: string): Promise<void> {
    if (localStorage.getItem(STORAGE_KEY_ACCESS_TOKEN) !== null || (username !== undefined && password !== undefined)) {
      return this._authService.login(username, password).then((user: { info: IUser }) => {
        this.updateUserInformation(user.info);
        this.touch();
      }).catch((err) => {
        this.logout();
        throw err;
      });
    }
    return new Promise((resolve) => { resolve(); });
  }

  /**
   * Logout the current user
   *
   * @returns promise result
   */
  logout(): Promise<void> {
    return this._authService.logout().then(() => {
      this.updateUserInformation();
    });
  }

  /**
   * Register a new user account and login.
   *
   * @param username  new account username (must be unique)
   * @param email     new user email, optional
   * @param password  new user password
   * @returns         register result
   */
  register(username: string, email: string, password: string): Promise<void> {
    return firstValueFrom(this._http.post<IRegisterUser>(
      `${environment.backendUri}/register`,
      {
        username, email, password
      } as IRegisterUser
    )).then(() => {
      this.login(username, password);
    });
  }

  /**
   * Update the activity of the user
   */
  public touch(): void {
    this._http.post<void>(
      `${environment.backendUri}/user/touch`,
      {}
    ).subscribe();
  }

  /**
   * Update the user information of reset it if there isn't any.
   *
   * @param user  user information
   */
  private updateUserInformation(user?: IUser): void {
    this._userInfo = user;
    this._loginUpdate.next(!!this._userInfo);
  }

  /**
   * Check if the user is logged in, redirect if they aren't
   *
   * @param state log in state
   */
  checkLoginStateRedirect(state: boolean): void {
    if (!state) {
      this._router.navigate(['/user/login']);
    }
  }

  /**
   * Get an observable of the logged in state.
   *
   * @returns login state observable
   */
  public get onLoginStateUpdate(): BehaviorSubject<boolean> {
    return this._loginUpdate;
  }

  /**
   * Get the current user information.
   *
   * @returns user information or undefined
   */
  public get getUserInfo(): IUser | undefined {
    return this._userInfo;
  }

  /**
   * Check if the current user is an admin
   */
  public get getUserIsAdmin(): boolean {
    return this._userInfo?.admin === 1;
  }
}
