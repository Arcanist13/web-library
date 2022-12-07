import { Injectable } from '@angular/core';
import { IBook } from 'src/app/static/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private _textFilter: string;

  constructor() {
    this._textFilter = '';
  }


  public get textFilter(): string {
    return this._textFilter;
  }
  public set textFilter(v: string) {
    this._textFilter = v.toLowerCase();
  }

  public filterBooks(books: Array<IBook>): Array<IBook> {
    return books.filter((book) => book.name.toLowerCase().includes(this._textFilter) ||
      book.authour.toLowerCase().includes(this._textFilter) ||
      book.series_name?.toLowerCase().includes(this._textFilter));
  }
}
