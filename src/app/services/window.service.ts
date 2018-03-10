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
    this._electronService.remote.getCurrentWindow().flashFrame(true);
  }

  goToPage(hasho: string) {
    console.log(__dirname);
    this._electronService.remote.getCurrentWindow().loadURL( url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true,
      hash: hasho
    }));
  }

}
