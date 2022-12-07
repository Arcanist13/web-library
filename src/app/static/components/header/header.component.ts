import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/user/services/user.service';
import { ObservableService } from '../../services/observable.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ObservableService]
})
export class HeaderComponent {
  public navCollapsed: boolean;
  public isLoggedIn: boolean;
  public isAdmin: boolean;

  constructor(
    private _observableService: ObservableService,
    private _router: Router,
    private _userService: UserService,
  ) {
    this.navCollapsed = true;
    this.isLoggedIn = false;
    this.isAdmin = false;

    // Subscribe to login state changes
    this._observableService.subscribe(
      this._userService.onLoginStateUpdate,
      (state: boolean) => {
        this.isLoggedIn = state;
        this.isAdmin = this._userService.getUserIsAdmin;
      }
    );
  }

  /**
   * Navigate and close the menu bar
   *
   * @param route path string
   */
  navigate(route: string): void {
    this.navCollapsed = true;
    this._router.navigate([route]);
  }

  /**
   * Trigger a user logout event
   */
  logout(): void {
    this.navCollapsed = true;
    this._userService.logout();
  }
}
