import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { UserService } from 'src/app/modules/user/services/user.service';
import { SnackService } from 'src/app/shared/services/snack.service';
import { HOME_PATH } from 'src/app/static/constants';
import { IBook, IBookImage } from 'src/app/static/models/book.model';
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

    // Check mode and redirect on invalid mode
    if ((!this.editing && !this.data) || (this.editing && !this.loggedIn)) {
      this._snackService.openInfoSnack('Failed to load book data.');
      this._router.navigate([`/${HOME_PATH}`]);
    }

    // Load missing data
    if (this.data) {
      this._libraryService.getBookImage(this.data.id).then((fullBook: IBookImage) => {
        // Do things with the image
      });
    }

    // Initialise the form with known data
    const authForm = new FormControl(this.data?.authour, [Validators.required]);
    const genreForm = new FormControl(this.data?.genres, []);
    const seriesForm = new FormControl(this.data?.series_name, []);

    // Init the form data
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

    // Create autocomplete filters
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

  /**
   * Filter a list based on a string value
   *
   * @param value string to search on
   * @param list  initial list to search
   * @returns     list matching filter
   */
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

  /**
   * Check if a field has an autocomplete
   *
   * @param key field name
   * @returns   if the field has autocomplete
   */
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

  /**
   * Get the autocomplete filter for a given field
   *
   * @param key field key
   * @returns   the autocomplete filter observable
   */
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

  /**
   * Close the editing page
   */
  public close(): void {
    this._router.navigate([`/${HOME_PATH}`]);
  }

  /**
   * Switch to editing mode
   */
  public editBook(): void {
    if (!this.loggedIn) {
      this._snackService.openInfoSnack('Must be logged in to edit books.');
      this._router.navigate([`/${HOME_PATH}`]);
      return;
    }

    this.editing = true;
    this.form.enable();
  }

  /**
   * Get the form field keys
   *
   * @returns list of fields
   */
  public getFormKeys(): Array<string> {
    return Object.keys(this.form.controls);
  }

  /**
   * Get a specific form field by name
   *
   * @param field field name
   * @returns     form field
   */
  public getField(field: string): AbstractControl | null {
    return this.form.get(field);
  }

  /**
   * Get the text to use as the submit button
   *
   * @returns button text
   */
  public getSubmitText(): string {
    return !this._libraryService.selectedBook ? 'Create' : 'Submit';
  }

  /**
   * Get the text to use as the header based on editing state
   *
   * @returns header text
   */
  public getHeaderText(): string {
    if (!this.editing && this.data) return this.data.name;
    return this.data ? `Editing ${this.data.name}` : 'Add New Book';
  }
}
