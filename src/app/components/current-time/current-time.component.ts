import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.scss']
})
export class CurrentTimeComponent implements OnInit {
  now = Date.now();

  ngOnInit() {
  }

}
