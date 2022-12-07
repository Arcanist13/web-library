import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ConfirmComponent } from 'src/app/shared/modals/confirm/confirm.component';
import { IBook } from 'src/app/static/models/book.model';
import { ObservableService } from 'src/app/static/services/observable.service';
import { UserService } from '../user/services/user.service';
import { FilterService } from './services/filter.service';
import { LibraryService } from './services/library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
  providers: [ObservableService]
})
export class LibraryComponent {
  public loggedIn: boolean;

  constructor(
    private _observableService: ObservableService,
    private _dialog: MatDialog,
    private _libraryService: LibraryService,
    private _userService: UserService,
    private _filterService: FilterService,
  ) {
    // Subscribe to login state changes (for logout mostly)
    this.loggedIn = this._userService.onLoginStateUpdate.value;
    this._observableService.subscribe(
      this._userService.onLoginStateUpdate,
      (state: boolean) => {
        this.loggedIn = state;
      }
    );
  }

  public getIcon(icon_string?: string): SafeResourceUrl | string {
    return this._libraryService.getIcon(icon_string);
  }

  public get books(): Array<IBook> {
    return this._filterService.filterBooks(this._libraryService.books);
  }

  public trackById(index: number, item: IBook): any {
    return item.id;
  }

  public confirmDelete(id: number, name: string): void {
    const msg = `Confirm that you wish to remove ${name} from the library?`;
    const dialogRef = this._dialog.open(ConfirmComponent, { data: msg });

    dialogRef.afterClosed().subscribe((res: boolean) => {
      if (res) {
        this._libraryService.deleteBook(id, name);
      }
    });
  }

  public createBook(): void {
    this._libraryService.viewBook(undefined, true);
  }

  public editBook(book: IBook): void {
    this._libraryService.viewBook(book, true);
  }

  public viewBook(book: IBook): void {
    this._libraryService.viewBook(book, false);
  }
}
