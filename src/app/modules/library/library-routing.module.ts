import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LibraryComponent } from './library.component';

const LIBRARY_ROUTES = [
  {
    path: '',
    component: LibraryComponent,
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
