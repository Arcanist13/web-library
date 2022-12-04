import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOME_PATH } from './static/constants';

const CORE_ROUTES: Routes = [
  {
    path: 'user',
    loadChildren: () => import('src/app/modules/user/user-routing.module').then((m) => m.UserRoutingModule)
  },
  {
    path: HOME_PATH,
    loadChildren: () => import('src/app/modules/library/library-routing.module').then((m) => m.LibraryRoutingModule)
  },
  { path: '**', redirectTo: HOME_PATH }
];

@NgModule({
  imports: [RouterModule.forRoot(CORE_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
