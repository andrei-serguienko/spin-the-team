import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParticipantListContainerComponent} from "../participant-list-container/participant-list-container.component";

@Component({
  selector: 'spin-the-team-home-test',
  standalone: true,
  imports: [CommonModule, ParticipantListContainerComponent],
  templateUrl: './home-test.component.html',
  styleUrls: ['./home-test.component.scss'],
})
export class HomeTestComponent {}
