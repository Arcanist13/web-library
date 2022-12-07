import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackService {
  constructor(
    private _snackBar: MatSnackBar
  ) { }

  /**
   * Open an information snack
   *
   * @param msg message to display in the snack
   */
  openInfoSnack(msg: string): void {
    this._snackBar.open(
      msg,
      'Dismiss',
      {
        duration: 3000
      }
    );
  }
}
