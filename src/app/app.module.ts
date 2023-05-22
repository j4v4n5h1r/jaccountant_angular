import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { InvoiceComponent } from './invoice/invoice.component';
import { EmployeeComponent } from './employee/employee.component';
import { TaxComponent } from './tax/tax.component';
import { ReportsComponent } from './reports/reports.component';
import { ForecastComponent } from './forecast/forecast.component';
import { BankComponent } from './bank/bank.component';
import { CrmComponent } from './crm/crm.component';
import { SettingsComponent } from './settings/settings.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    InvoiceComponent,
    EmployeeComponent,
    TaxComponent,
    ReportsComponent,
    ForecastComponent,
    BankComponent,
    CrmComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
