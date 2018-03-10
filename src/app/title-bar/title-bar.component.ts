import { Component, OnInit } from '@angular/core';
import { WindowService } from '../services/window.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {

  constructor(private windowService: WindowService) { }

  ngOnInit() {
  }

  minimize() {
    this.windowService.minimize();
  }

  maximize() {
    this.windowService.maximize();
  }

  quit() {
    this.windowService.quit();
  }

}
