import { Injectable } from '@angular/core';
import { IBook } from 'src/app/static/models/book.model';
import { ISeries } from 'src/app/static/models/series.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private _bookFilter: string;
  private _seriesFilter: string;

  constructor() {
    this._bookFilter = '';
    this._seriesFilter = '';
  }

  /**
   * Get the current book filter
   */
  public get bookFilter(): string {
    return this._bookFilter;
  }
  /**
   * Set the current book filter
   */
  public set bookFilter(v: string) {
    this._bookFilter = v.toLowerCase();
  }

  /**
   * Get the current book filter
   */
  public get seriesFilter(): string {
    return this._seriesFilter;
  }
  /**
   * Set the current book filter
   */
  public set seriesFilter(v: string) {
    this._seriesFilter = v.toLowerCase();
  }

  /**
   * Filter a list of series based on the current series filter
   *
   * @param books book list to filter
   * @returns     filtered list of books
   */
  public filterSeries(series: Array<ISeries>): Array<ISeries> {
    return series.filter((serie) => serie.series_name.toLowerCase().includes(this._seriesFilter) ||
      serie.authours.toLowerCase().includes(this._seriesFilter));
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
