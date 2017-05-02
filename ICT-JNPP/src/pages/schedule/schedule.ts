import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2' ;

/*
  Generated class for the Schedule page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

	schedules: FirebaseListObservable<any>;
	constructor(public navCtrl: NavController, public navParams: NavParams, public angfire: AngularFire) {
		this.schedules = angfire.database.list('Schedules');
	}

	ionViewDidLoad() {
	  console.log('ionViewDidLoad SchedulePage');
	}

}
