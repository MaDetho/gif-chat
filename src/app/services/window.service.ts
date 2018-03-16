import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { App } from 'electron';
const url = require('url');
const path = require('path');

@Injectable()
export class WindowService {

  constructor(private _electronService: ElectronService) { }

  minimize() {
    if(this.isElectronApp()) {
      this._electronService.remote.getCurrentWindow().minimize();
    }
  }

  maximize() {
    if(this.isElectronApp()) {
      this._electronService.remote.getCurrentWindow().maximize();
    }
  }

  quit() {
    if(this.isElectronApp()) {
      this._electronService.remote.app.quit();
    }
  }

  flashOnBlur() {
    if(this.isElectronApp() && !this._electronService.remote.getCurrentWindow().isFocused()) {
      this._electronService.remote.getCurrentWindow().flashFrame(true);
    }
  }

  isElectronApp(): boolean {
    return this._electronService.isElectronApp;
  }

  get app(): App {
    return this._electronService.remote.app;
  }

}
