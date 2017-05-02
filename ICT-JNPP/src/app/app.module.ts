import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule,AuthProviders, AuthMethods} from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { ActivityPage } from '../pages/activity/activity';
import { SchedulePage } from '../pages/schedule/schedule';
import { ChatPage } from '../pages/chat/chat';
import { AuthProvider } from '../providers/auth-provider';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

  const firebaseConfig = {
    apiKey: "AIzaSyBXGZaIVs4Pz-zAR_U5Yln91c2v0JsaQMw",
    authDomain: "ict-jnpp.firebaseapp.com",
    databaseURL: "https://ict-jnpp.firebaseio.com",
    storageBucket: "ict-jnpp.appspot.com",
    messagingSenderId: "61741490708"
  };

  const firebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
  }

  const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '771bad72'
  },
  'push': {
    'sender_id': '61741490708',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ResetPasswordPage,
    ActivityPage,
    SchedulePage,
    ChatPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig,firebaseAuthConfig),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ResetPasswordPage,
    ActivityPage,
    SchedulePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
