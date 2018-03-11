import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';
import { OldMessage } from '../model/oldMessage';
import { Message } from '../model/message';

@Injectable()
export class ChatService {

  private socket;

  constructor() {
    this.socket = io.connect(environment.apiUrl, {
      query: 'token=' + localStorage.getItem("id_token")
    });
  }

  public onConnect = () => {
    return Observable.create((observer) => {
      this.socket.on('connect', () => {
        observer.next();
      });
    });
  }

  public getUserStatusUpdate = () => {
    return Observable.create((observer) => {
      this.socket.on('userStatusUpdate', (users:User[]) => {
        observer.next(users);
      });
    });
  }


  public loadOldMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('loadOldMessages', (messages:OldMessage[]) => {
        observer.next(messages);
      });
    });
  }

  public getMessage = () => {
    return Observable.create((observer) => {
      this.socket.on('newMessage', (message:Message) => {
        observer.next(message);
      });
    });
  }

  public getUserStatus = () => {
    this.socket.emit("getUserStatus");
  }

  public getOldMessages = () => {
    this.socket.emit("getOldMessages");
  }

  public sendMessage = (message) => {
    this.socket.emit('sendMessage', message);
  }

}
