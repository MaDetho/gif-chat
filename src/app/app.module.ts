import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
