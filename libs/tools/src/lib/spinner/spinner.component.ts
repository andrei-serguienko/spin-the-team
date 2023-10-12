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

  winner: number | null = null;

  ngOnInit(): void {
    this.team.push(
      'https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg'
    );
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
    let counter = 10; // initial delay
    const duration = 2_000; // spinner will run for 10 seconds
    const startTime = Date.now();
    const myFunction = () => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(1, elapsed / duration); // normalized time: 0 -> 1 over the duration
      const easedT = this.easeOutQuad(t);

      // Modify the counter using the eased time value. This will slow down the spinning over time.
      counter = 10 + 90 * easedT; // this line can be adjusted based on desired behavior

      this.team.push(this.team.shift());

      // Only call the next rotation if the spinner hasn't reached the end of its duration
      if (elapsed < duration) {
        setTimeout(myFunction, counter);
      } else {
        this.selectThePlayer();
      }
    };

    setTimeout(myFunction, counter);
  }

  easeOutQuad(t: number): number {
    return t * (2 - t);
  }


  public getDisplayStatus(i: number): any {
    if (this.team.length <= 3) {
      return 'block';
    }
    if (i >= 3) {
      return 'none';
    }
  }

  private selectThePlayer(): void {
    setTimeout(() => {
      this.winner = 1;
    });
  }

  public hasWin(i: number): boolean {
    if (this.winner === null) {
      return false;
    }
    return this.winner === i;
  }
}
