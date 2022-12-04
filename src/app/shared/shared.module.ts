import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SplitOnSlashPipe } from './pipes/split-on-slash.pipe';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

const MATERIAL_IMPORTS = [
  MatListModule,
  MatIconModule,
];
const SHARED_COMPONENTS = [];
const SHARED_DIALOG = [];
const SHARED_PIPES = [
  SplitOnSlashPipe
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
    ...MATERIAL_IMPORTS,
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // ...SHARED_COMPONENTS,
    ...SHARED_PIPES,
    ...MATERIAL_IMPORTS,
    // ...SHARED_DIALOG,
  ]
})
export class SharedModule { }
