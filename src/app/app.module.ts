import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {GoTopButtonModule} from "./layout/custom/gotop/go-top-button.module";

const APP_CUST_PROVIDERS = [
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GoTopButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    APP_CUST_PROVIDERS,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

