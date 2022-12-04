import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const USER_ROUTES = [
  {
    path: 'login',
    component: LoginComponent,
    children: [],
    canActivate: []
  },
  {
    path: 'register',
    component: RegisterComponent,
    children: [],
    canActivate: []
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [
    RouterModule.forChild(USER_ROUTES)
  ]
})
export class UserRoutingModule { }
