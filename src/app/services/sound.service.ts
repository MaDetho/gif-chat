import { Injectable } from '@angular/core';

@Injectable()
export class SoundService {

  messageSound:any = new Audio();
  loginSound:any = new Audio();

  constructor() { 
    this.messageSound.src = "assets/message.ogg";
    this.loginSound.src = "assets/login.ogg";
  }

  playMessageSound() {
    this.messageSound.load();
    this.messageSound.play();
  }

  playLoginSound() {
    this.loginSound.load();
    this.loginSound.play();
  }

}
