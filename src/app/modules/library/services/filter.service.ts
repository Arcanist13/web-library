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
    this._bookFilter = v;
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
    this._seriesFilter = v;
  }

  /**
   * Filter a list of series based on the current series filter
   *
   * @param books book list to filter
   * @returns     filtered list of books
   */
  public filterSeries(series: Array<ISeries>): Array<ISeries> {
    const seriesFilter = this._seriesFilter.toLowerCase();

    // Extract specific search filter terms
    let seriesSearch: string | undefined = undefined;
    let authourSearch: string | undefined = undefined;
    const keySearch = seriesFilter.split(/(authour|series):/);
    if (keySearch.length > 1) {
      for (let index = 0; index < keySearch.length - 1; index += 1) {
        switch (keySearch[index]) {
          case 'authour':
            authourSearch = keySearch[index + 1].trim();
            index += 1;
            break;
          case 'series':
            seriesSearch = keySearch[index + 1].trim();
            index += 1;
            break;
          default:
            break;
        }
      }
    }

    // Return a specific search with combined matches
    if (seriesSearch || authourSearch) {
      return series.filter((serie) => (seriesSearch === undefined || serie.series_name.toLowerCase().includes(seriesSearch)) &&
        (authourSearch === undefined || serie.authours.toLowerCase().includes(authourSearch)));
    }
    // Return generic match on all fields
    return series.filter((serie) => serie.series_name.toLowerCase().includes(seriesFilter) ||
      serie.authours.toLowerCase().includes(seriesFilter));
  }

  /**
   * Filter a list of books based on the current book filter
   *
   * @param books book list to filter
   * @returns     filtered list of books
   */
  public filterBooks(books: Array<IBook>): Array<IBook> {
    const bookFilter = this._bookFilter.toLowerCase();

    // Extract specific search filter terms
    let titleSearch: string | undefined = undefined;
    let authourSearch: string | undefined = undefined;
    let seriesSearch: string | undefined = undefined;
    const keySearch = bookFilter.split(/(authour|title|series):/);
    if (keySearch.length > 1) {
      for (let index = 0; index < keySearch.length - 1; index += 1) {
        switch (keySearch[index]) {
          case 'title':
            titleSearch = keySearch[index + 1].trim();
            index += 1;
            break;
          case 'authour':
            authourSearch = keySearch[index + 1].trim();
            index += 1;
            break;
          case 'series':
            seriesSearch = keySearch[index + 1].trim();
            index += 1;
            break;
          default:
            break;
        }
      }
    }

    // Return a specific search with combined matches
    if (titleSearch || authourSearch || seriesSearch) {
      return books.filter((book) => (titleSearch === undefined || book.name.toLowerCase().includes(titleSearch)) &&
        (authourSearch === undefined || book.authour.toLowerCase().includes(authourSearch)) &&
        (seriesSearch === undefined || book.series_name?.toLowerCase().includes(seriesSearch)));
    }
    // Return generic match on all fields
    return books.filter((book) => book.name.toLowerCase().includes(bookFilter) ||
      book.authour.toLowerCase().includes(bookFilter) ||
      book.series_name?.toLowerCase().includes(bookFilter));
  }
}
