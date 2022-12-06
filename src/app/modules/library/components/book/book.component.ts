import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IBook } from 'src/app/static/models/book.model';
import { LibraryService } from '../../services/library.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  public form: FormGroup;
  public formInvalid = false;
  public submitText = '';
  public editing: boolean;
  public data?: IBook;

  constructor(
    private _router: Router,
    private _libraryService: LibraryService,
  ) {
    this.editing = this._libraryService.editing;
    this.data = this._libraryService.selectedBook;

    if (!this.editing && !this.data) {
      this._router.navigate(['/library']);
    }

    // Load missing data
    if (this.data) {
      this._libraryService.getBook(this.data.id).then((fullBook: IBook) => {
        this.form.get('series_number')?.setValue(fullBook.series_number);
        this.form.get('series_total')?.setValue(fullBook.series_total);
      });
    }

    // Initialise the form with known data
    this.form = new FormGroup(
      {
        name: new FormControl(this.data?.name, [Validators.required]),
        authour: new FormControl(this.data?.authour, [Validators.required]),
        genres: new FormControl(this.data?.genres, []),
        series_name: new FormControl(this.data?.series_name, []),
        series_number: new FormControl(this.data?.series_number, []),
        series_total: new FormControl(this.data?.series_total, [])
      }
    );

    if (!this.editing) {
      this.form.disable();
    }
  }


  /**
   * On form submit check for errors and attempt to login account.
   *
   * Will redirect to the home page after successful login, or display
   * relevant errors on fail.
   */
  async onSubmit(): Promise<void> {
    this.formInvalid = false;
    if (this.form.valid) {
      try {
        const name = this.form.get('name')?.value;
        const authour = this.form.get('authour')?.value; // as string).replace(', ', '/'),
        const genres = this.form.get('genres')?.value; // as string).replace(', ', '/'),
        const series_name = this.form.get('series_name')?.value;
        const series_number = this.form.get('series_number')?.value;
        const series_total = this.form.get('series_total')?.value;

        const book = {
          id: this.data ? this.data.id : undefined,
          name: name ? name : '',
          authour: authour ? authour.replace(', ', '/') : '',
          genres: genres ? genres.replace(', ', '/') : undefined,
          series_name: series_name ? series_name : undefined,
          series_number: series_number ? +series_number : undefined,
          series_total: series_total ? +series_total : undefined,
          image_full: undefined,
          image_icon: undefined
        } as (IBook);

        if (this.editing && this.data) {
          this._libraryService.updateBook(book);
        } else {
          this._libraryService.createBook(book);
        }
      } catch (err) {
        this.formInvalid = true;
      }
    }
  }

  public isAutocomplete(key: string): boolean {
    switch (key) {
      case 'authour':
      case 'genres':
      case 'series_name':
        return true;
      default:
        return false;
    }
  }

  public getAutocomplete(key: string): Promise<Array<string>> {
    switch (key) {
      case 'authour':
        return this._libraryService.getAuthours();
      case 'genres':
        return this._libraryService.getGenres();
      case 'series_name':
        return this._libraryService.getSeries();
      default:
        return new Promise((resolve) => resolve(['']));
    }
  }

  public close(): void {
    this._router.navigate(['/library']);
  }

  public editBook(): void {
    this.editing = true;
    this.form.enable();
  }

  public getFormKeys(): Array<string> {
    return Object.keys(this.form.controls);
  }

  public getField(field: string): AbstractControl | null {
    return this.form.get(field);
  }

  public getSubmitText(): string {
    return !this._libraryService.selectedBook ? 'Create' : 'Submit';
  }

  public getHeaderText(): string {
    if (!this.editing && this.data) return this.data.name;
    return this.data ? `Editing ${this.data.name}` : 'Add New Book';
  }
}
