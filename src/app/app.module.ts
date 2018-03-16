import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxElectronModule } from 'ngx-electron';

import { routes } from './app.routes';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { ChatService } from './services/chat.service';
import { StatusPipe } from './pipes/status.pipe';
import { WindowService } from './services/window.service';
import { RouterModule } from '@angular/router';
import { TenorService } from './services/tenor.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    TitleBarComponent,
    StatusPipe,
    LoadingComponent
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
