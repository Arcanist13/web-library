import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SplitOnSeparatorPipe } from './pipes/split-on-separator.pipe';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { ConfirmComponent } from './modals/confirm/confirm.component';
import { NiceKeyStringPipe } from './pipes/nice-key-string.pipe';
import { SearchComponent } from './components/search/search.component';

const MATERIAL_IMPORTS = [
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatPaginatorModule,
  MatChipsModule,
  MatCheckboxModule,
  NgxDropzoneModule,
];
// const SHARED_COMPONENTS = [];
const SHARED_DIALOG = [
  ConfirmComponent,
];
const SHARED_PIPES = [
  SplitOnSeparatorPipe,
  NiceKeyStringPipe,
];
const SHARED_COMPONENTS = [
  SearchComponent,
];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
    ...SHARED_PIPES,
    ...SHARED_DIALOG,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ...MATERIAL_IMPORTS,
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ...SHARED_COMPONENTS,
    ...SHARED_PIPES,
    ...MATERIAL_IMPORTS,
    ...SHARED_DIALOG,
  ]
})
export class SharedModule { }
