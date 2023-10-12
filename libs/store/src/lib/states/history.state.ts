import {HistoryRecordModel} from '@spin-the-team/models';
import {Action, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {GetHistory} from "../actions/history.action";

export interface HistoryStateModel {
    historyList: HistoryRecordModel[];
}

@State<HistoryStateModel>({
    name: 'history',
    defaults: {
        historyList: [] as HistoryStateModel[]
    }
})
@Injectable()
export class HistoryState {
    @Action(GetHistory)
    public getHistory(ctx: StateContext<HistoryStateModel>, action: GetHistory) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            historyList: [...state.historyList, action.payload]
        });
    }

}
