import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  gifForm: FormGroup;
  chatForm: FormGroup;
  messageInput: string;
  oldMessages: object = [];
  messages: object[] = [];
  users: object = [];

  constructor(private fb: FormBuilder,
    private chatService: ChatService) {

    this.chatForm = this.fb.group({
      messageFormInput: ['', Validators.required]
    });

    this.gifForm = this.fb.group({
    });
  }

  ngOnInit() {
    this.chatService.onConnect()
      .subscribe(() => {
        this.chatService.getUserStatus();
        this.chatService.getOldMessages();
      });

    this.chatService.loadOldMessages()
      .subscribe((messages: object[]) => {
        console.log(messages);
        this.oldMessages = messages;
      });

    this.chatService.getMessage()
      .subscribe((message: object) => {
        console.log(message);
       this.messages.push(message);
      });

    this.chatService.getUserStatusUpdate()
      .subscribe((users: object) => {
        this.users = users;
      });
  }


  sendMessage() {
    this.chatService.sendMessage(this.messageInput);
    this.messageInput = '';
  }

}
