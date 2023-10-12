import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'spin-the-team-home-test',
  standalone: true,
  templateUrl: './home-test.component.html',
  styleUrls: ['./home-test.component.scss'],
  imports: [CommonModule, SpinnerComponent],
})
export class HomeTestComponent {}
