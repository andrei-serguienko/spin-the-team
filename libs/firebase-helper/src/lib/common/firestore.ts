import { addDoc, getFirestore, collection, getDocs, query, Query } from "firebase/firestore";
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { map, Observable, tap } from 'rxjs';
import { FirebaseUtils } from './firebase';

export class FirestoreUtils {
  private static readonly db = getFirestore(FirebaseUtils.app);

  public static createDocument(data: unknown, collectionPath: string): Observable<unknown> {
    return fromPromise(addDoc(collection(this.db, collectionPath), data));
  }

  public static getAllDocsFromCollection(collectionPath: string): Observable<any> {
    return fromPromise(getDocs(collection(this.db, collectionPath))).pipe(
      map((data) =>
        data.docs.map((doc) => doc.data()),
      ),
    );
  }

  public static getDocsFromCollectionWithQuery(collectionPath: string, queryInput: Query): Observable<any> {
    return  fromPromise(getDocs(queryInput)).pipe(
      map((data) => data.docs.map((doc) => doc.data())),
    );
  }
}
