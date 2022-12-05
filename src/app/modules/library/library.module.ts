import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SeriesComponent } from './components/series/series.component';

@NgModule({
  declarations: [
    LibraryComponent,
    SeriesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class LibraryModule { }
