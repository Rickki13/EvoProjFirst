import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {DataService} from "./data.service";
import {LoggingInterceptor} from "./logging.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [DataService, {
    provide: HTTP_INTERCEPTORS,
    useClass: LoggingInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
