import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navCollapsed: boolean;
  loggedIn: boolean;

  constructor(
    private _router: Router,
  ) {
    this.navCollapsed = true;
    this.loggedIn = false;
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
    // this._userService.logout();
  }
}
