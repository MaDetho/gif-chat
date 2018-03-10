import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {

  constructor(private _electronService: ElectronService) { }

  ngOnInit() {
  }

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

}
