import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import {MaterialModule} from './material/material.module';
import { BillComponent } from './components/bill/bill.component';
import { DialogComponent } from './components/dialog/dialog.component'
import { HttpClientModule } from '@angular/common/http';
//拦截器
import {httpInterceptorProviders} from 'src/app/interceptors';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component'
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    BillComponent,
    DialogComponent,
    SnackBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
