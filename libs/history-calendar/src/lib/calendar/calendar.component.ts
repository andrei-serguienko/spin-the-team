import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {HistoryCardComponent} from "../history-card/history-card.component";
import {MatIconModule} from "@angular/material/icon";
import {Select, Store} from "@ngxs/store";
import {HistoryRecordModel} from "@spin-the-team/models";
import {Observable} from "rxjs";
import {HistoryState} from "../../../../store/src/lib/states/history.state";
import {GetHistory} from "../../../../store/src/lib/actions/history.action";

@Component({
  selector: 'spin-the-team-calendar',
  standalone: true,
  imports: [CommonModule, MatCardModule, HistoryCardComponent, MatIconModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Select(HistoryState.getHistory) historyList!: Observable<HistoryRecordModel[]>;
  private readonly store = inject(Store);
  private test!:Observable<HistoryRecordModel[]>;
  public ngOnInit(): void {
    this.store.dispatch(new GetHistory()).subscribe();
    //this.historyList = this.store.select(HistoryState.getHistory);
    this.test = this.store.select(HistoryState.getHistory);
    console.log(this.historyList);
    console.log('t',this.test)
  }
}
