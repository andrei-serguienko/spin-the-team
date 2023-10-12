import {Injectable} from '@angular/core';
import {FirestoreUtils} from '../../common/firestore';
import {map, Observable, of} from 'rxjs';
import {HistoryRecordModel} from "@spin-the-team/models";
import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  public createHistoryRecord(data: HistoryRecordModel) {
    return FirestoreUtils.createDocument(data, 'history');
  }

  public historyList(): Observable<HistoryRecordModel[]> {
    return of(
      [{
        name: "Andrei",
        img_url: "https://betclicgroup.atlassian.net/wiki/download/thumbnails/53936144/15989637465757885203227941390508.jpg?version=1&modificationDate=1626702468000&cacheVersion=1&api=v2",
        start_date: new Date().getMilliseconds(),
        end_date: new Date().getMilliseconds()
      } as HistoryRecordModel]);
    /*return FirestoreUtils.getAllDocsFromCollection('history').pipe(
      map((data: HistoryRecordModel[]) => data.sort((a, b) => a.start_date - b.start_date))
    );*/
  }
}
