import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { splitOnSeparatorPipe } from './pipes/split-on-separator.pipe';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

const MATERIAL_IMPORTS = [
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
];
// const SHARED_COMPONENTS = [];
// const SHARED_DIALOG = [];
const SHARED_PIPES = [
  splitOnSeparatorPipe,
];

@NgModule({
  declarations: [
    // ...SHARED_COMPONENTS,
    ...SHARED_PIPES,
    // ...SHARED_DIALOG,
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
    // ...SHARED_COMPONENTS,
    ...SHARED_PIPES,
    ...MATERIAL_IMPORTS,
    // ...SHARED_DIALOG,
  ]
})
export class SharedModule { }
