import { Injectable } from '@angular/core';
import { IBook } from 'src/app/static/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private _bookFilter: string;

  constructor() {
    this._bookFilter = '';
  }

  /**
   * Get the current book filter
   */
  public get textFilter(): string {
    return this._bookFilter;
  }
  /**
   * Set the current book filter
   */
  public set textFilter(v: string) {
    this._bookFilter = v.toLowerCase();
  }

  /**
   * Filter a list of books based on the current book filter
   *
   * @param books book list to filter
   * @returns     filtered list of books
   */
  public filterBooks(books: Array<IBook>): Array<IBook> {
    return books.filter((book) => book.name.toLowerCase().includes(this._bookFilter) ||
      book.authour.toLowerCase().includes(this._bookFilter) ||
      book.series_name?.toLowerCase().includes(this._bookFilter));
  }
}
