import { Injectable } from '@angular/core';
import { FirestoreUtils } from '../../common/firestore';
import { map } from 'rxjs';
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
}
