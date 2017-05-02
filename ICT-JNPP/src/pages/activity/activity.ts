import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2' ;
 
/*
  Generated class for the Activity page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html'
})
export class ActivityPage {

	activities: FirebaseListObservable<any>;
	constructor(public navCtrl: NavController, public navParams: NavParams, public angfire: AngularFire) {
		this.activities = angfire.database.list('Activities');

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ActivityPage');
	}

}
