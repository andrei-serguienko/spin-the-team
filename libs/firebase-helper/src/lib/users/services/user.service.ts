import { Injectable } from '@angular/core';
import { UserAdd } from '../models/user-add.model';
import { FirestoreUtils } from '../../common/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public createUser(data: UserAdd) {
    FirestoreUtils.createDocument(data, 'users');
  }
}
