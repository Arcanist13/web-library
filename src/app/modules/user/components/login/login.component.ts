import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ObservableService } from 'src/app/static/services/observable.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ObservableService]
})
export class LoginComponent {
  form: FormGroup;
  public loginInvalid = false;

  public readonly MIN_PW = 5;
  public readonly MIN_USER = 5;

  constructor(
    private _observableService: ObservableService,
    private _userService: UserService,
    private _router: Router,
  ) {
    // Check if already logged in, redirect to previous page
    this._observableService.subscribe(
      this._userService.onLoginStateUpdate,
      (state: boolean) => {
        if (state) {
          this._router.navigate(['/']);
        }
      }
    );

    this.form = new FormGroup(
      {
        username: new FormControl('', [Validators.required, Validators.minLength(this.MIN_USER)]),
        password: new FormControl('', [Validators.required, Validators.minLength(this.MIN_PW)])
      }
    );
  }

  /**
   * On form submit check for errors and attempt to login account.
   *
   * Will redirect to the home page after successful login, or display
   * relevant errors on fail.
   *
   * @returns promise for login resolve
   */
  async onSubmit(): Promise<void> {
    this.loginInvalid = false;
    if (this.form.valid) {
      try {
        const username = this.form.get('username')?.value;
        const password = this.form.get('password')?.value;
        this._userService.login(username, password)
          .then(() => {
            this._router.navigate(['/']);
          })
          .catch(() => {
            this.loginInvalid = true;
          });
      } catch (err) {
        this.loginInvalid = true;
      }
    }
  }

  /**
   * Get a form field object
   *
   * @param field field name
   * @returns     form field
   */
  getField(field: string): AbstractControl | null {
    return this.form.get(field);
  }
}
