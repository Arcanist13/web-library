import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { UserService } from 'src/app/modules/user/services/user.service';
import { SnackService } from 'src/app/shared/services/snack.service';
import { IBook } from 'src/app/static/models/book.model';
import { ObservableService } from 'src/app/static/services/observable.service';
import { LibraryService } from '../../services/library.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [ObservableService]
})
export class BookComponent {
  public form: FormGroup;
  public formInvalid = false;
  public submitText = '';
  public editing: boolean;
  public data?: IBook;
  public loggedIn: boolean;

  public filteredAuthours: Observable<Array<string>>;
  public filteredGenres: Observable<Array<string>>;
  public filteredSeries: Observable<Array<string>>;

  constructor(
    private _observableService: ObservableService,
    private _router: Router,
    private _libraryService: LibraryService,
    private _userService: UserService,
    private _snackService: SnackService,
  ) {
    this.editing = this._libraryService.editing;
    this.data = this._libraryService.selectedBook;

    // Subscribe to login state changes (for logout mostly)
    this.loggedIn = this._userService.onLoginStateUpdate.value;
    this._observableService.subscribe(
      this._userService.onLoginStateUpdate,
      (state: boolean) => {
        this.loggedIn = state;
        if (!this.loggedIn && this.editing) {
          this.editing = false;
          this.form.disable();
        }
      }
    );

    if ((!this.editing && !this.data) || (this.editing && !this.loggedIn)) {
      this._snackService.openInfoSnack('Failed to load book data.');
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
    const authForm = new FormControl(this.data?.authour, [Validators.required]);
    const genreForm = new FormControl(this.data?.genres, []);
    const seriesForm = new FormControl(this.data?.series_name, []);

    this.form = new FormGroup(
      {
        name: new FormControl(this.data?.name, [Validators.required]),
        authour: authForm,
        genres: genreForm,
        series_name: seriesForm,
        series_number: new FormControl(this.data?.series_number, []),
        series_total: new FormControl(this.data?.series_total, [])
      }
    );

    this.filteredAuthours = authForm.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || '', this._libraryService.authours)),
    );
    this.filteredGenres = genreForm.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || '', this._libraryService.genres)),
    );
    this.filteredSeries = seriesForm.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || '', this._libraryService.series)),
    );

    if (!this.editing) {
      this.form.disable();
    }
  }

  private _filter(value: string, list: Array<string>): Array<string> {
    const filterValue = value.toLowerCase();
    return list.filter((option) => option.toLowerCase().includes(filterValue));
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

  public getAutocomplete(key: string): Observable<Array<string>> {
    switch (key) {
      case 'authour':
        return this.filteredAuthours;
      case 'genres':
        return this.filteredGenres;
      default:
        return this.filteredSeries;
    }
  }

  public close(): void {
    this._router.navigate(['/library']);
  }

  public editBook(): void {
    if (!this.loggedIn) {
      this._snackService.openInfoSnack('Must be logged in to edit books.');
      this._router.navigate(['/library']);
      return;
    }

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
