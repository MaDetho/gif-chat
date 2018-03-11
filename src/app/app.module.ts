import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxElectronModule } from 'ngx-electron';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { routes } from './app.routes';
import { ChatComponent } from './chat/chat.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { ChatService } from './services/chat.service';
import { StatusPipe } from './pipes/status.pipe';
import { WindowService } from './services/window.service';
import { RouterModule } from '@angular/router';
import { TenorService } from './services/tenor.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    TitleBarComponent,
    StatusPipe
  ],
  imports: [
    BrowserModule,
    routes,
    ReactiveFormsModule,
    HttpModule,
    NgxElectronModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    ChatService,
    WindowService,
    TenorService
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
