import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { AngularFire, FirebaseListObservable } from 'angularfire2' ;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  homes: FirebaseListObservable<any>;
  schedules: FirebaseListObservable<any>;
  activities: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public angfire: AngularFire) {
    this.homes = angfire.database.list('Homes');
    this.schedules = angfire.database.list('Schedules');
    this.activities = angfire.database.list('Activities');
  }

  chat(){
    this.navCtrl.push(ChatPage);
  }
} 