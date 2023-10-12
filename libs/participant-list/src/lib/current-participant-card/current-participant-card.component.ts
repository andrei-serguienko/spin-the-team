import {Component, inject} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {HistoryService} from '@spin-the-team/firebase-helper';
import {Observable} from "rxjs";
import { HistoryRecordModel } from '@spin-the-team/models';

@Component({
  selector: 'spin-the-team-participant-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, NgIf],
  templateUrl: './current-participant-card.component.html',
  styleUrls: ['./current-participant-card.scss'],
})
export class CurrentParticipantCardComponent {
  private readonly historyService = inject(HistoryService);

  protected readonly currentUser$: Observable<HistoryRecordModel> = this.historyService.getCurrentUser();
}
