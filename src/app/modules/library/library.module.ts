import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SeriesComponent } from './components/series/series.component';
import { BookComponent } from './components/book/book.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    LibraryComponent,
    SeriesComponent,
    BookComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class LibraryModule { }
