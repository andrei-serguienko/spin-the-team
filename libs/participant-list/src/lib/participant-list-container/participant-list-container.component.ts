import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParticipantCardComponent} from "../participant-card/participant-card.component";

@Component({
  selector: 'spin-the-team-participant-list-container',
  standalone: true,
  imports: [CommonModule, ParticipantCardComponent],
  templateUrl: './participant-list-container.component.html',
  styleUrls: ['./participant-list-container.component.scss'],
})
export class ParticipantListContainerComponent {}
