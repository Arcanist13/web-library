import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { IBook } from 'src/app/static/models/book.model';
import { LibraryService } from './services/library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
  constructor(
    private _libraryService: LibraryService,
  ) { }

  public getIcon(icon_string?: string): SafeResourceUrl | string {
    return this._libraryService.getIcon(icon_string);
  }

  public get books(): Array<IBook> {
    return this._libraryService.books;
  }

  public trackById(index: number, item: IBook): any {
    return item.id;
  }
}
