import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeriesComponent } from './components/series/series.component';
import { LibraryComponent } from './library.component';

const LIBRARY_ROUTES = [
  {
    path: '',
    component: LibraryComponent,
    children: [],
    canActivate: []
  },
  {
    path: 'series',
    component: SeriesComponent,
    children: [],
    canActivate: []
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(LIBRARY_ROUTES)
  ]
})
export class LibraryRoutingModule { }
