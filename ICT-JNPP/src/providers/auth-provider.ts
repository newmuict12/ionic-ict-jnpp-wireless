import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import firebase from 'firebase';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthProvider {

	fireAuth: any;
  userData: any = firebase.database().ref('/userData');


  	constructor(public angfire: AngularFire) {
		 angfire.auth.subscribe( user => {
            if (user) {
                this.fireAuth = user.auth;
                this.userData = firebase.database().ref('/userData');
                console.log(user);
            }
        });
  	}

  	loginUser(newEmail: string, newPassword: string): firebase.Promise<any> {
  		return this.angfire.auth.login({
  			email: newEmail,
  			password: newPassword
  		});

  	}

  	resetPassword(email: string): firebase.Promise<any> {
  		return firebase.auth().sendPasswordResetEmail(email);
  	}

  	logoutUser(): firebase.Promise<any> {
  		return this.angfire.auth.logout();
  	}


  	signupUser(newEmail: string, newPassword: string, newName: string): firebase.Promise<any> {
  		return firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword).then((newUser) => {
         this.userData.child(newUser.uid).set({email: newEmail, displayName: newName});
  		});
  	}

}
