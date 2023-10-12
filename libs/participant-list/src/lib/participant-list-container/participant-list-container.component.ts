import {Component, inject} from '@angular/core';
import {CommonModule, NgFor} from '@angular/common';
import {CurrentParticipantCardComponent} from "../current-participant-card/current-participant-card.component";
import {UserService} from "@spin-the-team/firebase-helper";
import {ParicpantCardComponent} from "../paricpant-card/paricpant-card.component";

@Component({
  selector: 'spin-the-team-participant-list-container',
  standalone: true,
  imports: [CommonModule, CurrentParticipantCardComponent, NgFor, ParicpantCardComponent],
  templateUrl: './participant-list-container.component.html',
  styleUrls: ['./participant-list-container.component.scss'],
})
export class ParticipantListContainerComponent {
  private readonly userService = inject(UserService);

  protected readonly users$ = this.userService.userList()
}
