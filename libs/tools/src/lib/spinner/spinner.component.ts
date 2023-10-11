import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'spin-the-team-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  animations: [
    trigger('spin', [
      transition('* => *', [
        style({ transform: 'translateX(0)' }),
        animate(
          '2000ms',
          keyframes([
            style({ transform: 'translateX(0)', offset: 0 }),
            style({ transform: 'translateX(-100%)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class SpinnerComponent implements OnInit {
  public team: any[] = [];

  ngOnInit(): void {
    this.team.push(
      'https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg'
    );
    this.team.push(
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    );
    this.team.push(
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    );
    this.team.push(
      'https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg'
    );
    this.startSpinning();
  }

  startSpinning() {
    let counter = 10;
    const myFunction = () => {
      this.team.push(this.team.shift());
      counter += counter * 0.05;
      setTimeout(myFunction, counter);
    };
    setTimeout(myFunction, counter);
  }
}
