
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
import { AuthenticationService } from './auth.service';
import { SettingsComponent } from './pages/settings/settings.component';
import { Investing101Component } from './pages/investing101/investing101.component';
import { StocksComponent } from './pages/stocks/stocks.component';

import { StockChartComponent } from './pages/stock-chart/stock-chart.component';







const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'accounts',
    component: AccountsComponent, canActivate: [AuthGuard]
  },
  {
   path: 'investort',
   component: InvestortComponent, canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    component: SettingsComponent, canActivate: [AuthGuard]
   },
   { path: 'investing101', component: Investing101Component , canActivate: [AuthGuard] },
   { path: 'stocks', component: StocksComponent , canActivate: [AuthGuard] },
  
  { path: 'chart', component: StockChartComponent, canActivate: [AuthGuard] },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'email-verification', component: VerifyEmailComponent },
  //{ path: 'dashboard', component: DashboardComponent },



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule],
  providers: [AuthenticationService,AuthGuard]
})
export class AppRoutingModule { }
