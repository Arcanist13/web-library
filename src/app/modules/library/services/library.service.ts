import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SnackService } from 'src/app/shared/services/snack.service';
import { HOME_PATH } from 'src/app/static/constants';
import { IBook, IBookIcon, IBookImageProcessed } from 'src/app/static/models/book.model';
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
  private _newBook: boolean;

  private _onBooksLoaded: BehaviorSubject<Array<IBook>> = new BehaviorSubject<Array<IBook>>([]);

  constructor(
    private _router: Router,
    private _sanitizer: DomSanitizer,
    private _httpService: HttpService,
    private _snackService: SnackService,
    private _userService: UserService,
  ) {
    this._selectedBook = undefined;
    this._editing = false;
    this._newBook = false;

    // Load the library books
    this._httpService.get<Array<IBook>>(`${environment.backendUri}/books`).subscribe({
      next: (books: Array<IBook> = []) => {
        this._books = books;
        this._onBooksLoaded.next(this._books);
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
  public getBookImage(id: number): Promise<IBook> {
    return new Promise((resolve, reject) => {
      this._httpService.get<IBook>(`${environment.backendUri}/book/image/${id}`).subscribe({
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
   * Get the icons for the specified IDs
   *
   * @param ids book IDs
   * @returns   request result
   */
  public getBookIcons(ids: Array<number>): Promise<boolean> {
    return new Promise((resolve) => {
      // Don't request existing icons
      const sendIds: Array<number> = [];
      ids.forEach((id: number) => {
        if (!this._books[id - 1].image_icon) sendIds.push(id);
      });

      // Get the list of icons
      this._httpService.post<Array<IBookIcon>>(`${environment.backendUri}/iconset`, sendIds).subscribe({
        next: (icons: Array<IBookIcon> = []) => {
          icons.forEach((icon: IBookIcon) => this._books[icon.id - 1].image_icon = icon.image_icon);
          resolve(true);
        },
        error: () => {
          this._snackService.openInfoSnack('Failed to get a book icons.');
          resolve(false);
        }
      });
    });
  }

  /**
   * Create a new book
   *
   * @param details new book details
   */
  public createBook(details: IBook, redirect = true): void {
    if (this._userService.onLoginStateUpdate.value) {
      this._httpService.post<IBook>(`${environment.backendUri}/book/add`, details).subscribe({
        next: (newBook: IBook) => {
          this._snackService.openInfoSnack(`Sucessfully created ${newBook.name}.`);

          // Update the list
          this._books.push(newBook);
          this._updateBookInfoLists(details);
          this._updateBookSeriesTotals(details);

          if (redirect) {
            this._router.navigate([`/${HOME_PATH}`]);
            this._editing = false;
            this._newBook = false;
            this._selectedBook = undefined;
          }
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
  public viewBook(book: IBook | undefined, edit = false, newBook = false): void {
    this._selectedBook = book;
    this._editing = edit;
    this._newBook = newBook;
    this._router.navigate(['/library/book']);
  }

  /**
   * Update a books details
   *
   * @param details new book details
   */
  public updateBook(details: IBook, redirect = true): void {
    if (this._userService.onLoginStateUpdate.value) {
      this._httpService.post<IBook>(`${environment.backendUri}/book/edit/${details.id}`, details).subscribe({
        next: (newBook: IBook) => {
          this._snackService.openInfoSnack(`Sucessfully editied ${newBook.name}.`);

          // Update the list
          const foundIdx = this._books.findIndex((b) => b.id === details.id);
          if (foundIdx !== -1) this._books[foundIdx] = details;
          this._updateBookInfoLists(details);
          this._updateBookSeriesTotals(details);

          if (redirect) {
            this._router.navigate([`/${HOME_PATH}`]);
            this._editing = false;
            this._newBook = false;
            this._selectedBook = undefined;
          }
        },
        error: () => { this._snackService.openInfoSnack('Failed to edit the book.'); }
      });
    } else {
      this._snackService.openInfoSnack('Must be logged in to update a book.');
    }
  }

  /**
   * Update the memory lists of book information for future repopulation
   *
   * @param details book details
   */
  private _updateBookInfoLists(details: IBook): void {
    const auths = details.authour.split(',');
    auths.forEach((auth: string) => {
      if (!this._authours.includes(auth.trim())) { this._authours.push(auth.trim()); }
    });

    if (details.series_name && !this._series.includes(details.series_name)) {
      this._series.push(details.series_name);
    }
  }

  /**
   * Update stored book series totals to match if changed
   *
   * @param details book information
   */
  private _updateBookSeriesTotals(details: IBook): void {
    this._books.forEach((book: IBook) => {
      if (book.series_name === details.series_name) { book.series_total = details.series_total; }
    });
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
          this._onBooksLoaded.next(this._books);
        },
        error: () => { this._snackService.openInfoSnack('Failed to delete the book.'); }
      });
    } else {
      this._snackService.openInfoSnack('Must be logged in to delete a book.');
    }
  }

  /**
   * Process and image and return and array of strings containing the full image and the icon image
   *
   * @param buffer  image buffer
   * @returns       image string array [full, icon]
   */
  public processImage(file: File): Promise<IBookImageProcessed> {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('image', file, file.name);
      this._httpService.post<IBookImageProcessed>(`${environment.backendUri}/book/genimage`, formData).subscribe({
        next: (images: IBookImageProcessed) => {
          resolve(images);
        },
        error: () => { this._snackService.openInfoSnack('Failed to process the image.'); reject(); }
      });
    });
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
          error: () => { console.log('Failed to get autocomplete authour list'); reject(); }
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
          error: () => { console.log('Failed to get autocomplete genre list'); reject(); }
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
          error: () => { console.log('Failed to get autocomplete series name list'); reject(); }
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

  /**
   * Get the current new book status
   */
  public get newBook(): boolean {
    return this._newBook;
  }
  /**
   * Set the new book status
   */
  public set newBook(value: boolean) {
    this._newBook = value;
  }

  /**
   * Get event for when books are loaded
   */
  public get onBooksLoaded(): BehaviorSubject<Array<IBook>> {
    return this._onBooksLoaded;
  }
}
