import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SnackService } from 'src/app/shared/services/snack.service';
import { HOME_PATH } from 'src/app/static/constants';
import { IBook } from 'src/app/static/models/book.model';
import { HttpService } from 'src/app/static/services/http.service';
import { environment } from 'src/environments/environment';
import { UserService } from '../../user/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private _books: Array<IBook> = [];
  private _authours: Array<string> = [];
  private _genres: Array<string> = [];
  private _series: Array<string> = [];

  private _selectedBook: IBook | undefined;
  private _editing: boolean;

  constructor(
    private _router: Router,
    private _sanitizer: DomSanitizer,
    private _httpService: HttpService,
    private _snackService: SnackService,
    private _userService: UserService,
  ) {
    this._selectedBook = undefined;
    this._editing = false;

    // Load the library books
    this._httpService.get<Array<IBook>>(`${environment.backendUri}/books`).subscribe({
      next: (books: Array<IBook>) => {
        this._books = books;
      },
      error: () => { this._snackService.openInfoSnack('Failed to fetch books from the backend.'); }
    });

    // Get the lists
    this.getAuthours();
    this.getSeriesNames();
    this.getGenres();
  }

  /**
   * Get a specific book (all information)
   *
   * @param id  book id
   * @returns   book
   */
  public getBook(id: number): Promise<IBook> {
    return new Promise((resolve, reject) => {
      this._httpService.get<IBook>(`${environment.backendUri}/book/${id}`).subscribe({
        next: (book: IBook) => {
          resolve(book);
        },
        error: () => {
          this._snackService.openInfoSnack('Failed to get a book.');
          reject();
        }
      });
    });
  }

  /**
   * Create a new book
   *
   * @param details new book details
   */
  public createBook(details: IBook): void {
    if (this._userService.onLoginStateUpdate.value) {
      this._httpService.post<IBook>(`${environment.backendUri}/book/add`, details).subscribe({
        next: (newBook: IBook) => {
          this._snackService.openInfoSnack(`Sucessfully created ${newBook.name}.`);

          // Update the list
          this._books.push(newBook);

          this._router.navigate([`/${HOME_PATH}`]);
          this._editing = false;
          this._selectedBook = undefined;
        },
        error: () => { this._snackService.openInfoSnack('Failed to create the new book.'); }
      });
    } else {
      this._snackService.openInfoSnack('Must be logged in to create a new book.');
    }
  }

  /**
   * View or edit a book, navigates to the book page
   *
   * @param book  book to view/edit
   * @param edit  toggle for editing mode
   */
  public viewBook(book: IBook | undefined, edit = false): void {
    this._selectedBook = book;
    this._editing = edit;
    this._router.navigate(['/library/book']);
  }

  /**
   * Update a books details
   *
   * @param details new book details
   */
  public updateBook(details: IBook): void {
    if (this._userService.onLoginStateUpdate.value) {
      this._httpService.post<IBook>(`${environment.backendUri}/book/edit/${details.id}`, details).subscribe({
        next: (newBook: IBook) => {
          this._snackService.openInfoSnack(`Sucessfully editied ${newBook.name}.`);

          // Update the list
          const foundIdx = this._books.findIndex((b) => b.id === details.id);
          if (foundIdx !== -1) this._books[foundIdx] = details;

          this._router.navigate([`/${HOME_PATH}`]);
          this._editing = false;
          this._selectedBook = undefined;
        },
        error: () => { this._snackService.openInfoSnack('Failed to edit the book.'); }
      });
    } else {
      this._snackService.openInfoSnack('Must be logged in to update a book.');
    }
  }

  /**
   * Remove a book from the library
   *
   * @param id    book id to remove
   * @param name  name of the book
   */
  public deleteBook(id: number, name: string): void {
    if (this._userService.onLoginStateUpdate.value) {
      this._httpService.delete(`${environment.backendUri}/book/remove/${id}`).subscribe({
        next: () => {
          this._snackService.openInfoSnack(`Sucessfully deleted ${name}.`);
          this._books = this._books.filter((book: IBook) => book.id !== id);
        },
        error: () => { this._snackService.openInfoSnack('Failed to delete the book.'); }
      });
    } else {
      this._snackService.openInfoSnack('Must be logged in to delete a book.');
    }
  }

  public getIcon(icon_string?: string): SafeResourceUrl | string {
    if (icon_string) {
      return this._sanitizer.bypassSecurityTrustResourceUrl(`data:image/jpg;base64,${icon_string}`);
    }
    return 'assets/missing.png';
  }

  /**
   * Request the list of authours from the backend
   *
   * @returns promise of authours list
   */
  public getAuthours(): Promise<Array<string>> {
    return new Promise((resolve, reject) => {
      if (this._authours.length > 0) {
        resolve(this._authours);
      }
      else {
        this._httpService.get<Array<string>>(`${environment.backendUri}/authours`).subscribe({
          next: (res: Array<string>) => {
            this._authours = res;
            resolve(res);
          },
          error: () => { console.log('Failed to get autocomplete list'); reject(); }
        });
      }
    });
  }
  /**
   * Get the list of authours
   */
  public get authours(): Array<string> {
    return this._authours;
  }

  /**
   * Request the list of genres from the backend
   *
   * @returns promise of genre list
   */
  public getGenres(): Promise<Array<string>> {
    return new Promise((resolve, reject) => {
      if (this._genres.length > 0) {
        resolve(this._genres);
      }
      else {
        this._httpService.get<Array<string>>(`${environment.backendUri}/genres`).subscribe({
          next: (res: Array<string>) => {
            this._genres = res;
            resolve(res);
          },
          error: () => { console.log('Failed to get autocomplete list'); reject(); }
        });
      }
    });
  }
  /**
   * Get the list of genres
   */
  public get genres(): Array<string> {
    return this._genres;
  }

  /**
   * Request the list of series names from the backend
   *
   * @returns promise of series list
   */
  public getSeriesNames(): Promise<Array<string>> {
    return new Promise((resolve, reject) => {
      if (this._series.length > 0) {
        resolve(this._series);
      }
      else {
        this._httpService.get<Array<string>>(`${environment.backendUri}/series/name`).subscribe({
          next: (res: Array<string>) => {
            this._series = res;
            resolve(res);
          },
          error: () => { console.log('Failed to get autocomplete list'); reject(); }
        });
      }
    });
  }
  /**
   * Get the list of series
   */
  public get series(): Array<string> {
    return this._series;
  }

  /**
   * Get the list of books in the library
   */
  public get books(): Array<IBook> {
    return this._books;
  }

  /**
   * Get the currently selected book
   */
  public get selectedBook(): IBook | undefined {
    return this._selectedBook;
  }
  /**
   * Set the currently selected book
   */
  public set selectedBook(book: IBook | undefined) {
    this._selectedBook = book;
  }

  /**
   * Get the current editing status
   */
  public get editing(): boolean {
    return this._editing;
  }
  /**
   * Set the editing status
   */
  public set editing(value: boolean) {
    this._editing = value;
  }
}
