import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { UserService } from 'src/app/modules/user/services/user.service';
import { ConfirmComponent } from 'src/app/shared/modals/confirm/confirm.component';
import { SnackService } from 'src/app/shared/services/snack.service';
import { HOME_PATH } from 'src/app/static/constants';
import { IBook, IBookImage, IBookImageProcessed } from 'src/app/static/models/book.model';
import { ObservableService } from 'src/app/static/services/observable.service';
import { LibraryService } from '../../services/library.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

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
  public newBook: boolean;
  public data?: IBook;
  public loggedIn: boolean;
  private _originalImages: Array<string | undefined>;

  public filteredAuthours: Observable<Array<string>>;
  public filteredGenres: Observable<Array<string>>;
  public filteredSeries: Observable<Array<string>>;

  // Chip input
  public separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    private _observableService: ObservableService,
    private _router: Router,
    private _dialog: MatDialog,
    private _libraryService: LibraryService,
    private _userService: UserService,
    private _snackService: SnackService,
  ) {
    this.editing = this._libraryService.editing;
    this.newBook = this._libraryService.newBook;
    this.data = this._libraryService.selectedBook;
    this._originalImages = [];

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
    if (((!this.editing && !this.data) || (this.editing && !this.loggedIn)) && !this.newBook) {
      this._snackService.openInfoSnack('Failed to load book data.');
      this._router.navigate([`/${HOME_PATH}`]);
    }

    // Load missing data
    if (this.data) {
      this._libraryService.getBookImage(this.data.id).then((image: IBookImage) => {
        // Do things with the image
        if (this.data) {
          this.data.image_full = image.image_full;
        }
      });
    }

    // Set default book values for creating a new book
    if (this.newBook) {
      this.data = {
        name: '',
        authour: '',
        genres: undefined,
        series_name: undefined,
        series_number: undefined,
        series_total: undefined,
        notes: undefined,
        damaged: 0,
        inconsistent: 0,
        image_full: undefined,
        image_icon: undefined
      } as IBook;
    }

    // Initialise the form with known data
    const authForm = new FormControl(this.data?.authour, [Validators.required]);
    const genreForm = new FormControl(this.data?.genres, []);
    const seriesForm = new FormControl(this.data?.series_name, []);
    this._originalImages = [this.data?.image_full, this.data?.image_icon];

    // Init the form data
    this.form = new FormGroup(
      {
        name: new FormControl(this.data?.name, [Validators.required]),
        authour: authForm,
        genres: genreForm,
        series_name: seriesForm,
        series_number: new FormControl(this.data?.series_number, []),
        series_total: new FormControl(this.data?.series_total, []),
        notes: new FormControl(this.data?.notes, []),
        damaged: new FormControl(this.data?.damaged, []),
        inconsistent: new FormControl(this.data?.inconsistent, []),
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
      startWith(null),
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
  public async onSubmit(): Promise<void> {
    this.formInvalid = false;
    if (this.form.valid) {
      try {
        const name = this.form.get('name')?.value;
        const authour = this.form.get('authour')?.value; // as string).replace(', ', '/'),
        const genres = this.data ? this.data.genres : undefined; // as string).replace(', ', '/'),
        const series_name = this.form.get('series_name')?.value;
        const series_number = this.form.get('series_number')?.value;
        const series_total = this.form.get('series_total')?.value;
        const image_full = this.data ? this.data.image_full : undefined;
        const image_icon = this.data ? this.data.image_icon : undefined;
        const notes = this.form.get('notes')?.value;
        const damaged = this.form.get('damaged')?.value;
        const inconsistent = this.form.get('inconsistent')?.value;

        const book = {
          id: this.data ? this.data.id : undefined,
          name: name ? name : '',
          authour: authour ? authour.replace(', ', '/') : '',
          genres: genres ? genres.replace(', ', '/') : undefined,
          series_name: series_name ? series_name : undefined,
          series_number: series_number ? +series_number : undefined,
          series_total: series_total ? +series_total : undefined,
          image_full,
          image_icon,
          notes: notes ? notes : undefined,
          damaged: damaged ? +damaged : undefined,
          inconsistent: inconsistent ? +inconsistent : undefined,
        } as (IBook);

        if ((this.editing && this.data) && !this.newBook) {
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
   * Upload a file and get the image strings
   *
   * @param file  file to process
   */
  public fileUpload(file?: File): void {
    if (file) {
      this._libraryService.processImage(file).then((res: IBookImageProcessed) => {
        if (this.data) {
          this.data.image_full = res.image_full;
          this.data.image_icon = res.image_icon;
        }
      }).catch(() => this._snackService.openInfoSnack('Failed to process the image.'));
    } else {
      this._snackService.openInfoSnack('Failed to find a valid image file.');
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
    if (this.newBook) {
      this._router.navigate([`/${HOME_PATH}`]);
      return;
    }
    this.editing = false;
    if (this.data) {
      this.data.image_full = this._originalImages[0];
      this.data.image_icon = this._originalImages[1];
    }
    this.form.disable();
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
    this.form.get('genres')?.reset();
  }

  /**
   * Confirm dialog for deleting a book
   *
   * @param id    book id
   * @param name  book name
   */
  public confirmDelete(): void {
    const id = this.data?.id;
    const name = this.form.get('name')?.value;

    if (id !== undefined && name !== undefined) {
      const msg = `Confirm that you wish to remove ${name} from the library?`;
      const dialogRef = this._dialog.open(ConfirmComponent, { data: msg });

      dialogRef.afterClosed().subscribe((res: boolean) => {
        if (res) {
          this._libraryService.deleteBook(id, name);
          this._router.navigate([`/${HOME_PATH}`]);
        }
      });
    } else {
      this._snackService.openInfoSnack('Failed to remove book.');
    }
  }

  /**
   * Add a new genre to the list and chips
   *
   * @param event chip add event
   */
  public addGenre(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value && this.data) {
      this.data.genres = `${this.data.genres}${this.data.genres ? '/' : ''}${value}`;
    }
    // Clear the input value
    event.chipInput.clear();
    this.form.get('genres')?.setValue(null);
  }

  /**
   * Remove a genre from the list
   *
   * @param genre genre to remove
   */
  public removeGenre(genre: string): void {
    if (this.data) {
      this.data.genres = this.data.genres?.replace(genre, '').replace('//', '/');
      if (this.data.genres?.split('/')[0] === '' || this.data.genres?.split('/')[1] === '') {
        this.data.genres = this.data.genres.replace('/', '');
      }
      if (this.data.genres === '') {
        this.data.genres = undefined;
      }
    }
  }

  /**
   * Add a genre to the list by selection from autocomplete
   *
   * @param event autocomplete select event
   */
  public selectGenre(event: MatAutocompleteSelectedEvent): void {
    if (this.data) {
      this.data.genres = `${this.data.genres ?? ''}${this.data.genres ? '/' : ''}${event.option.viewValue}`;
    }
    // this.fruitInput.nativeElement.value = '';
    this.form.get('genres')?.setValue(null);
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
    if (this.newBook) return 'Add New Book';
    return `Editing ${this.data?.name}`;
  }
}
