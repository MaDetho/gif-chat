import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { App } from 'electron';
import { SoundService } from './sound.service';
const url = require('url');
const path = require('path');

@Injectable()
export class WindowService {
  bounceId:number = undefined;

  constructor(private _electronService: ElectronService,
              private soundService: SoundService) { }

  minimize() {
    if (this.isElectronApp) {
      this._electronService.remote.getCurrentWindow().minimize();
    }
  }

  maximize() {
    if (this.isElectronApp) {
      this._electronService.remote.getCurrentWindow().maximize();
    }
  }

  quit() {
    if (this.isElectronApp) {
      this._electronService.remote.app.quit();
    }
  }

  flashOnBlur() {
    if (this.isElectronApp && !this._electronService.remote.getCurrentWindow().isFocused()) {
      this._electronService.remote.getCurrentWindow().flashFrame(true);
      if(this.app.dock) {
        this.bounceId = this.app.dock.bounce("critical");
      }
      this.soundService.playMessageSound();
    }
  }

  onFocus() {
    if(this.bounceId && this.app.dock) {
      this.app.dock.cancelBounce(this.bounceId)
    }
  }

  get isElectronApp(): boolean {
    return this._electronService.isElectronApp;
  }

  get app(): App {
    if (this.isElectronApp) {
      return this._electronService.remote.app;
    }
  }

}
