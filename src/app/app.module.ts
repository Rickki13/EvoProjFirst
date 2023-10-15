import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from "@ngxs/store";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskState } from "./store/task-state.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([TaskState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
