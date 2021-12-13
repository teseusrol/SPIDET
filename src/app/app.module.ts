import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Da71pidt05Module} from "./da71pidt05/da71pidt05.module";


@NgModule({
  declarations: [
    AppComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        Da71pidt05Module
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
