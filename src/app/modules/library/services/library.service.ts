import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SnackService } from 'src/app/shared/services/snack.service';
import { IBook } from 'src/app/static/models/book.model';
import { HttpService } from 'src/app/static/services/http.service';
import { environment } from 'src/environments/environment';

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
    private _httpService: HttpService,
    private _sanitizer: DomSanitizer,
    private _router: Router,
    private _snackService: SnackService,
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

    this.getAuthours();
    this.getSeries();
    this.getGenres();
  }

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

  public createBook(details: IBook): void {
    this._httpService.post<IBook>(`${environment.backendUri}/book/add`, details).subscribe({
      next: (newBook: IBook) => {
        this._snackService.openInfoSnack(`Sucessfully created ${newBook.name}.`);

        // Update the list
        this._books.push(newBook);

        this._router.navigate(['/library']);
        this._editing = false;
        this._selectedBook = undefined;
      },
      error: () => { this._snackService.openInfoSnack('Failed to create the new book.'); }
    });
  }

  public viewBook(book: IBook | undefined, edit = false): void {
    this._selectedBook = book;
    this._editing = edit;
    this._router.navigate(['/library/book']);
  }

  public updateBook(details: IBook): void {
    this._httpService.post<IBook>(`${environment.backendUri}/book/edit/${details.id}`, details).subscribe({
      next: (newBook: IBook) => {
        this._snackService.openInfoSnack(`Sucessfully editied ${newBook.name}.`);

        // Update the list
        const foundIdx = this._books.findIndex((b) => b.id === details.id);
        if (foundIdx !== -1) this._books[foundIdx] = details;

        this._router.navigate(['/library']);
        this._editing = false;
        this._selectedBook = undefined;
      },
      error: () => { this._snackService.openInfoSnack('Failed to edit the book.'); }
    });
  }

  public deleteBook(id: number, name: string): void {
    this._httpService.delete(`${environment.backendUri}/book/remove/${id}`).subscribe({
      next: () => {
        this._snackService.openInfoSnack(`Sucessfully deleted ${name}.`);
        this._books = this._books.filter((book: IBook) => book.id !== id);
      },
      error: () => { this._snackService.openInfoSnack('Failed to delete the book.'); }
    });
  }

  public getIcon(icon_string?: string): SafeResourceUrl | string {
    if (icon_string) {
      return this._sanitizer.bypassSecurityTrustResourceUrl(`data:image/jpg;base64,${icon_string}`);
    }
    return 'assets/missing_icon.jpg';
  }

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
  public get authours(): Array<string> {
    return this._authours;
  }

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
  public get genres(): Array<string> {
    return this._genres;
  }

  public getSeries(): Promise<Array<string>> {
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
  public get series(): Array<string> {
    return this._series;
  }

  public get books(): Array<IBook> {
    return this._books;
  }

  public get selectedBook(): IBook | undefined {
    return this._selectedBook;
  }
  public set selectedBook(book: IBook | undefined) {
    this._selectedBook = book;
  }

  public get editing(): boolean {
    return this._editing;
  }
  public set editing(value: boolean) {
    this._editing = value;
  }
}
