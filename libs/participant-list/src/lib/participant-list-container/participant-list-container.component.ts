import {Component, inject} from '@angular/core';
import {CommonModule, NgFor} from '@angular/common';
import {CurrentParticipantCardComponent} from "../current-participant-card/current-participant-card.component";
import {UserService} from "@spin-the-team/firebase-helper";
import {ParicpantCardComponent} from "../paricpant-card/paricpant-card.component";
import {CreateNewParticipantComponent} from "../create-new-participant/create-new-participant.component";
import { ActiveListService } from '../services/active-list.service';
import { tap } from 'rxjs';
import { User } from '@spin-the-team/models';

@Component({
  selector: 'spin-the-team-participant-list-container',
  standalone: true,
  imports: [CommonModule, CurrentParticipantCardComponent, NgFor, ParicpantCardComponent, CreateNewParticipantComponent],
  templateUrl: './participant-list-container.component.html',
  styleUrls: ['./participant-list-container.component.scss'],
})
export class ParticipantListContainerComponent {
  private readonly userService = inject(UserService);
  private readonly activeListService = inject(ActiveListService);

  protected readonly users$ = this.userService.userList().pipe(
    tap((users) => this.activeListService.activeList = [...users])
  )

  public check(event: boolean | null, i: number, user: User): void {
    if (!event) {
      const index = this.activeListService.activeList.findIndex((item) => item.name === user.name);
      this.activeListService.activeList.splice(index, 1);
    } else {
      this.activeListService.activeList.push(user);
    }
  }

  public save(): void {
    console.log(this.activeListService.activeList)
  }
}
