import { Injectable } from '@angular/core';
import { HistoryRecordModel } from '../models/history-record.model';
import { FirestoreUtils } from '../../common/firestore';
import { map } from 'rxjs';

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
