import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IBook } from 'src/app/static/models/book.model';
import { HttpService } from 'src/app/static/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private _books: Array<IBook> = [];

  constructor(
    private _httpService: HttpService,
    private _sanitizer: DomSanitizer,
  ) {
    // Load the library books
    this._httpService.get<Array<IBook>>(`${environment.backendUri}/books`).subscribe((books: Array<IBook>) => {
      this._books = books;
    });
  }

  public getBook(id: number): void {
    this._httpService.get<IBook>(`${environment.backendUri}/book/${id}`).subscribe((book: IBook) => {
      // Do things with a book
    });
  }

  public getIcon(icon_string?: string): SafeResourceUrl | string {
    if (!!icon_string) {
      return this._sanitizer.bypassSecurityTrustResourceUrl(`data:image/jpg;base64,${icon_string}`);
    }
    return 'assets/missing_icon.jpg';
  }

  public get books() : Array<IBook> {
    return this._books;
  }

}
