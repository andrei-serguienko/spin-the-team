import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { initializeApp } from "firebase/app";


@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'spin-the-team-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public ngOnInit() {
    const firebaseConfig = {
      apiKey: "AIzaSyB6HWXc80FSjt7dv0NntWb2_z8wSGehDac",
      authDomain: "spin-the-team.firebaseapp.com",
      projectId: "spin-the-team",
      storageBucket: "spin-the-team.appspot.com",
      messagingSenderId: "90034367233",
      appId: "1:90034367233:web:f6149b27c61ad2d1654900"
    };

    initializeApp(firebaseConfig);
  }
}
