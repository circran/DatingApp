import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ValueComponent } from './Components/value/value.component';
import { NavComponent } from './Components/nav/nav.component';
import { AuthService } from './Services/auth.service';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { ErrorInterceptorProvider } from './Services/error.interceptor';
import { AlertifyService } from './Services/alertify.service';


@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
