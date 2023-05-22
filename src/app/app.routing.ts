import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

import { InvoiceComponent } from './invoice/invoice.component';
import { EmployeeComponent } from './employee/employee.component';
import { TaxComponent } from './tax/tax.component';
import { ReportsComponent } from './reports/reports.component';
import { ForecastComponent } from './forecast/forecast.component';
import { BankComponent } from './bank/bank.component';
import { CrmComponent } from './crm/crm.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'invoice',          component: InvoiceComponent },
    { path: 'employee',          component: EmployeeComponent },
    { path: 'tax',          component: TaxComponent },
    { path: 'reports',          component: ReportsComponent },
    { path: 'forecast',          component: ForecastComponent },
    { path: 'bank',          component: BankComponent },
    { path: 'crm',          component: CrmComponent },
    { path: 'settings',          component: SettingsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
