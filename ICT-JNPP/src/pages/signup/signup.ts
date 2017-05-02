import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController,MenuController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthProvider } from '../../providers/auth-provider';
import { EmailValidator } from '../../validators/email';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  public signupForm: FormGroup;
  loading;

  

  constructor(public nav: NavController, public authData: AuthProvider, 
    public formBuilder: FormBuilder, public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController,private menuCtrl: MenuController) {

      this.signupForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });    
  }

  

  /**
   * If the form is valid it will call the AuthData service to sign the user up password displaying a loading
   *  component while the user waits.
   *
   * If the form is invalid it will just log the form value, feel free to handle that as you like.
   */

  signupUser(){


    if (!this.signupForm.valid){
      console.log(this.signupForm.value);
    } else {
      this.authData.signupUser(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.name)
      .then(() => {
        this.nav.setRoot(HomePage);
      }, (error) => {
        this.loading.dismiss().then( () => {
          console.log(this.signupForm.value);

          var errorMessage: string = error.message;
          console.log(errorMessage)
            let alert = this.alertCtrl.create({
              message: errorMessage,
              buttons: [
                {
                  text: "Ok",
                  role: 'cancel'
                }
              ]
            });
          alert.present();
        });
      });

      this.loading = this.loadingCtrl.create({
        // dismissOnPageChange: true,
      });
      this.loading.present().then(() => this.loading.dismiss());
      this.menuCtrl.enable(true);
    }
  }
}