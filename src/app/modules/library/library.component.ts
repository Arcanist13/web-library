import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ConfirmComponent } from 'src/app/shared/modals/confirm/confirm.component';
import { IBook } from 'src/app/static/models/book.model';
import { ObservableService } from 'src/app/static/services/observable.service';
import { STORAGE_KEY_BOOKS_PAGE_INDEX, STORAGE_KEY_BOOKS_PAGE_SIZE } from 'src/app/static/storage_keys.constants';
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
  public pageSizeOptions = [20, 50, 100];
  public pageSize = this.pageSizeOptions[0];
  public pageIndex = 0;
  public length = 0;

  public hidePageSize = false;
  public showPageSizeOptions = true;
  public showFirstLastButtons = true;
  public disabled = false;

  private _bookList: Array<IBook>;

  constructor(
    private _observableService: ObservableService,
    private _dialog: MatDialog,
    private _libraryService: LibraryService,
    private _userService: UserService,
    private _filterService: FilterService,
  ) {
    // Load the books
    this._bookList = this._libraryService.onBooksLoaded.value;
    this._observableService.subscribe(
      this._libraryService.onBooksLoaded,
      () => {
        this._bookList = this._filterService.filterBooks(this._libraryService.books);
        this.length = this._bookList.length;
      }
    );

    // Subscribe to login state changes (for logout mostly)
    this.loggedIn = this._userService.onLoginStateUpdate.value;
    this._observableService.subscribe(
      this._userService.onLoginStateUpdate,
      (state: boolean) => {
        this.loggedIn = state;
      }
    );

    // Load the pagination settings
    const savedPageSize = localStorage.getItem(STORAGE_KEY_BOOKS_PAGE_SIZE);
    if (savedPageSize !== null) {
      this.pageSize = +savedPageSize;
    } else {
      // set default
      localStorage.setItem(STORAGE_KEY_BOOKS_PAGE_SIZE, this.pageSize.toString());
    }
    const savedPageIndex = localStorage.getItem(STORAGE_KEY_BOOKS_PAGE_INDEX);
    if (savedPageIndex !== null) {
      this.pageIndex = +savedPageIndex;
    } else {
      // set default
      localStorage.setItem(STORAGE_KEY_BOOKS_PAGE_INDEX, this.pageIndex.toString());
    }
  }

  /**
   * Handle user page modification events
   *
   * @param e page modification
   */
  public handlePageEvent(e: PageEvent): void {
    this.length = e.length;
    this.pageSize = e.pageSize;
    localStorage.setItem(STORAGE_KEY_BOOKS_PAGE_SIZE, this.pageSize.toString());
    this.pageIndex = e.pageIndex;
    localStorage.setItem(STORAGE_KEY_BOOKS_PAGE_INDEX, this.pageIndex.toString());
  }

  /**
   * Get a HTML img compatable book icon string
   *
   * @param icon_string image string
   * @returns           transformed image string
   */
  public getIcon(icon_string?: string): SafeResourceUrl | string {
    return this._libraryService.getIcon(icon_string);
  }

  /**
   * Get the list of books, spliced based on the current page view
   *
   * @returns list of books on page
   */
  public get books(): Array<IBook> {
    const startIdx = this.pageIndex * this.pageSize;
    const endIdx = startIdx + this.pageSize;
    return this._bookList.slice(startIdx, endIdx);
  }

  /**
   * Confirm dialog for deleting a book
   *
   * @param id    book id
   * @param name  book name
   */
  public confirmDelete(id: number, name: string): void {
    const msg = `Confirm that you wish to remove ${name} from the library?`;
    const dialogRef = this._dialog.open(ConfirmComponent, { data: msg });

    dialogRef.afterClosed().subscribe((res: boolean) => {
      if (res) {
        this._libraryService.deleteBook(id, name);
      }
    });
  }

  /**
   * Create a book
   */
  public createBook(): void {
    this._libraryService.viewBook(undefined, true, true);
  }

  /**
   * Edit a book
   *
   * @param book  book to edit
   */
  public editBook(book: IBook): void {
    this._libraryService.viewBook(book, true);
  }

  /**
   * View a book
   *
   * @param book  book to view
   */
  public viewBook(book: IBook): void {
    this._libraryService.viewBook(book, false);
  }

  /**
   * Notify of a new filter
   */
  searchChange(searchText: string): void {
    this._filterService.bookFilter = searchText;

    this._bookList = this._filterService.filterBooks(this._libraryService.books);

    // Update pageinator properties
    this.length = this._bookList.length;
    this.pageIndex = 0;
    localStorage.setItem(STORAGE_KEY_BOOKS_PAGE_INDEX, this.pageIndex.toString());
  }

  /**
   * Load the filter text
   *
   * @returns filter text
   */
  public get filterText(): string {
    return this._filterService.bookFilter;
  }

  /**
   * ngFor id tracker for books
   *
   * @param index book index
   * @param item  book
   * @returns     book id
   */
  public trackById(index: number, item: IBook): number {
    return item.id;
  }
}
