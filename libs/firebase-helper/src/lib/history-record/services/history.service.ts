import {Injectable} from '@angular/core';
import {FirestoreUtils} from '../../common/firestore';
import {map, Observable} from 'rxjs';
import { HistoryRecordModel } from '@spin-the-team/models';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  public createHistoryRecord(data: HistoryRecordModel) {
    return FirestoreUtils.createDocument(data, 'history');
  }

  public historyList() {
    return FirestoreUtils.getAllDocsFromCollection('history').pipe(
      map((data: HistoryRecordModel[]) => data.sort((a, b) => a.start_date - b.start_date))
    );
  }

  public getCurrentUser(): Observable<HistoryRecordModel> {
    return this.historyList().pipe(
      map((list: HistoryRecordModel[]) => {
        let maxEndDate = 0;
        let currentIndex = -1;

        list.forEach((data, index) => {
          if (data.end_date > maxEndDate) {
            currentIndex = index;
            maxEndDate = data.end_date
          }
        })

        return list[currentIndex];
      })
    )
  }
}
