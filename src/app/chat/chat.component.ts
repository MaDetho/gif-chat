import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChatService } from '../services/chat.service';
import { WindowService } from '../services/window.service';
import { TenorService } from '../services/tenor.service';
import { TenorTag } from '../model/tenorTag';
import { TenorGifs } from '../model/tenorGifs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  gifForm: FormGroup;
  chatForm: FormGroup;
  messageInput: string;
  oldMessages: any = [];
  messages: any[] = [];
  users: object = [];
  trendingTags: TenorTag[];
  searchGifs: TenorGifs;
  searchInput: string;

  constructor(private fb: FormBuilder,
    private chatService: ChatService,
    private windowService: WindowService,
    private tenorService: TenorService) {

    this.chatForm = this.fb.group({
      messageFormInput: ['', Validators.required]
    });

    this.gifForm = this.fb.group({
      tenorSearchInput: ['']
    });
  }

  ngOnInit() {
    this.tenorService.getTrending().subscribe((tags) => {
      this.trendingTags = tags.slice(0,32)
    });

    this.chatService.onConnect()
      .subscribe(() => {
        this.chatService.getUserStatus();
        this.chatService.getOldMessages();
      });

    this.chatService.loadOldMessages()
      .subscribe((messages: object[]) => {
        this.oldMessages = messages;
      });

    this.chatService.getMessage()
      .subscribe((message: any) => {
        if (this.messages.length > 0) {
          message.append = this.isAppend(this.messages, message);
        }
        this.messages.push(message);
        this.windowService.flashOnBlur();
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

  isAppend(messages: any[], newMessage: any): boolean {
    let lastMessage = this.messages[this.messages.length - 1];
    if (lastMessage.user.firstname === newMessage.user.firstname) {
      return true;
    }
  }

  setSearchInput(term: string) {
    this.searchInput = term;
    this.searchGif();
  }

  searchGif() {
    this.tenorService.search(this.searchInput).subscribe((gifs) => {
      this.searchGifs = gifs;
    });
    
  }

}
