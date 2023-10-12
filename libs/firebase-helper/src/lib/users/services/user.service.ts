import { Injectable } from '@angular/core';
import { FirestoreUtils } from '../../common/firestore';
import { Observable } from 'rxjs';
import { User } from '@spin-the-team/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public createUser(data: User) {
    return FirestoreUtils.createDocument(data, 'users');
  }

  public userList(): Observable<User[]> {
    return FirestoreUtils.getAllDocsFromCollection('users');
  }
}
