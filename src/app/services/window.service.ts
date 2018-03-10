import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
const url = require('url');
const path = require('path');

@Injectable()
export class WindowService {

  constructor(private _electronService: ElectronService) { }

  minimize() {
    if(this._electronService.isElectronApp) {
      this._electronService.remote.getCurrentWindow().minimize();
    }
  }

  maximize() {
    if(this._electronService.isElectronApp) {
      this._electronService.remote.getCurrentWindow().maximize();
    }
  }

  quit() {
    if(this._electronService.isElectronApp) {
      this._electronService.remote.app.quit();
    }
  }

  flashOnBlur() {
    if(this._electronService.isElectronApp && !this._electronService.remote.getCurrentWindow().isFocused()) {
      this._electronService.remote.getCurrentWindow().flashFrame(true);
    }
  }

}
