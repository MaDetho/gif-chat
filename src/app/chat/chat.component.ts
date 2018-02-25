import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  gifForm: FormGroup;
  chatForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.gifForm = this.fb.group({
    });
  
    this.chatForm = this.fb.group({
    });
  }

  ngOnInit() {
  }

}
