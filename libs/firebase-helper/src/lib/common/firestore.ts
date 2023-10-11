import { addDoc, getFirestore, collection } from "firebase/firestore";
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { Observable } from 'rxjs';
import { FirebaseUtils } from './firebase';

export class FirestoreUtils {
  private static readonly db = getFirestore(FirebaseUtils.app);

  public static createDocument(data: unknown, collectionPath: string): Observable<unknown> {
    return fromPromise(addDoc(collection(this.db, collectionPath), data));
  }
}
