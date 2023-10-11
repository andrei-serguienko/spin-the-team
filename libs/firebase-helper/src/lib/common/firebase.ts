import { FirebaseApp, initializeApp } from 'firebase/app';

export class FirebaseUtils {

  private static readonly firebaseConfig = {
    apiKey: "AIzaSyB6HWXc80FSjt7dv0NntWb2_z8wSGehDac",
    authDomain: "spin-the-team.firebaseapp.com",
    projectId: "spin-the-team",
    storageBucket: "spin-the-team.appspot.com",
    messagingSenderId: "90034367233",
    appId: "1:90034367233:web:f6149b27c61ad2d1654900"
  };

  private static _app: FirebaseApp = initializeApp(this.firebaseConfig);

  public static get app(): FirebaseApp {
    return this._app;
  }
}
