import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {HistoryRecordModel} from "@spin-the-team/models";

@Component({
  selector: 'spin-the-team-history-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss'],
})
export class HistoryCardComponent {
  @Input() history!: HistoryRecordModel;
}
