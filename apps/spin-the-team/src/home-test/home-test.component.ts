import {Component, inject} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
  ParticipantListContainerComponent
} from "../../../../libs/participant-list/src/lib/participant-list-container/participant-list-container.component";
import {SpinnerComponent} from "../../../../libs/tools/src/lib/spinner/spinner.component";
import {CalendarComponent} from "../../../../libs/history-calendar/src/lib/calendar/calendar.component";
import {ActiveListService} from "../../../../libs/participant-list/src/lib/services/active-list.service";

@Component({
  selector: 'spin-the-team-home-test',
  standalone: true,
  imports: [CommonModule, ParticipantListContainerComponent, SpinnerComponent, CalendarComponent, ParticipantListContainerComponent, SpinnerComponent],
  templateUrl: './home-test.component.html',
  styleUrls: ['./home-test.component.scss'],
})
export class HomeTestComponent {
  public readonly activeListService = inject(ActiveListService);
}
