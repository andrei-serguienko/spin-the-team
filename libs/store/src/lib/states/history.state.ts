import {HistoryRecordModel} from '@spin-the-team/models';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {inject, Injectable} from '@angular/core';
import {GetHistory} from "../actions/history.action";
import {tap} from "rxjs";
import {HistoryService} from "../../../../firebase-helper/src/lib/history-record/services/history.service";

export interface HistoryStateModel {
    historyList: HistoryRecordModel[];
}

@State<HistoryStateModel>({
    name: 'history',
    defaults: {
        historyList: [] as HistoryRecordModel[]
    }
})
@Injectable()
export class HistoryState {
  private readonly historyService = inject(HistoryService);

  @Selector()
  static getHistory(state: HistoryStateModel) {console.log('aa',state.historyList)
    return state.historyList;
  }


  @Action(GetHistory)
    public getHistory(ctx: StateContext<HistoryStateModel>) {
    console.log('heeeelooo')

      this.historyService.historyList()
        .pipe(
          tap((history: HistoryRecordModel[]) => {
            console.log('h',history)
            ctx.setState({
              historyList: history
            });
            }
          ))
        .subscribe();
    }
}
