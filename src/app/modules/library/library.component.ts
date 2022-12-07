import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ConfirmComponent } from 'src/app/shared/modals/confirm/confirm.component';
import { IBook } from 'src/app/static/models/book.model';
import { ObservableService } from 'src/app/static/services/observable.service';
import { STORAGE_KEY_PAGE_INDEX, STORAGE_KEY_PAGE_SIZE } from 'src/app/static/storage_keys.constants';
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

  // Paginator
  public pageSizeOptions = [50, 100, 500];
  public pageSize = this.pageSizeOptions[0];
  public pageIndex = 0;
  public length = 0;

  public hidePageSize = false;
  public showPageSizeOptions = true;
  public showFirstLastButtons = true;
  public disabled = false;

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

    // Load the pagination settings
    const savedPageSize = localStorage.getItem(STORAGE_KEY_PAGE_SIZE);
    if (savedPageSize) {
      this.pageSize = +savedPageSize;
    } else {
      // set default
      localStorage.setItem(STORAGE_KEY_PAGE_SIZE, this.pageSize.toString());
    }
    const savedPageIndex = localStorage.getItem(STORAGE_KEY_PAGE_INDEX);
    if (savedPageIndex) {
      this.pageIndex = +savedPageIndex;
    } else {
      // set default
      localStorage.setItem(STORAGE_KEY_PAGE_INDEX, this.pageIndex.toString());
    }
  }

  public handlePageEvent(e: PageEvent) {
    this.length = e.length;
    this.pageSize = e.pageSize;
    localStorage.setItem(STORAGE_KEY_PAGE_SIZE, this.pageSize.toString());
    this.pageIndex = e.pageIndex;
    localStorage.setItem(STORAGE_KEY_PAGE_INDEX, this.pageIndex.toString());
  }

  public getIcon(icon_string?: string): SafeResourceUrl | string {
    return this._libraryService.getIcon(icon_string);
  }

  public get books(): Array<IBook> {
    const startIdx = this.pageIndex * this.pageSize;
    const endIdx = (startIdx + this.pageSize) - 1;
    const fullList = this._filterService.filterBooks(this._libraryService.books);
    this.length = fullList.length;
    return fullList.slice(startIdx, endIdx);
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
