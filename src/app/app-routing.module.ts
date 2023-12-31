import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signin', component: LoginComponent},
  {path: 'signup', component: CreateAccountComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
