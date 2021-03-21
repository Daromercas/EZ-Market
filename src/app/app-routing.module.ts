
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AccountsComponent} from './pages/accounts/accounts.component';
import {InvestortComponent } from './pages/investort/investort.component';
import { CommonModule } from '@angular/common';
//new
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './auth.guard';
import { NgAuthService } from './auth.service';
import { SettingsComponent } from './pages/settings/settings.component';






const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'accounts',
    component: AccountsComponent,canActivate: [AuthGuard]
  },
  {
   path: 'investort',
   component: InvestortComponent 
  },
  {
    path: 'settings',
    component: SettingsComponent,canActivate: [AuthGuard]
   },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'email-verification', component: VerifyEmailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule],
  providers: [NgAuthService]
})
export class AppRoutingModule { }
