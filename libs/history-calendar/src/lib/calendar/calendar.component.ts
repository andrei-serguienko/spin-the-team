import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {HistoryCardComponent} from "../history-card/history-card.component";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'spin-the-team-calendar',
  standalone: true,
  imports: [CommonModule, MatCardModule, HistoryCardComponent, MatIconModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
}
