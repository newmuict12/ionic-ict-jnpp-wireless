import { Component, NgZone, ViewChild } from '@angular/core';
import * as io from 'socket.io-client';
import { NavController, Content } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import firebase from 'firebase';


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  @ViewChild(Content) content: Content;
  messages:any = [];
  socketHost: string = "http://localhost:3000/";
  socket:any;
  chat:any;
  username:string;
  zone:any;
  userDB: any = firebase.database().ref('/userData');

  constructor(public navCtrl: NavController, public angfire: AngularFire) {

    angfire.auth.subscribe( user => {
      if (user) {
          this.username = user.auth.email;
      } 
    });

    this.socket = io.connect(this.socketHost);
    this.zone = new NgZone({enableLongStackTrace: false});
    this.socket.on("chat message", (msg) =>{
      this.zone.run(() =>{
        this.messages.push(msg);
        // this.content.scrollToBottom();
      });
    });
  }

  chatSend(v){
    let data = {
      message: v.chatText,
      username: this.username.substring(0, this.username.indexOf('@'))
    }
    this.socket.emit('new message', data);
    this.chat = '';
  }

}