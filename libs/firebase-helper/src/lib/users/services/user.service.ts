import { Injectable } from '@angular/core';
import { User } from '../models/user-add.model';
import { FirestoreUtils } from '../../common/firestore';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public createUser(data: User) {
    return FirestoreUtils.createDocument(data, 'users');
  }

  public userList() {
    return of([
      {
        "img_url": "toto",
        "name": "John Doe"
      },
      {
        "name": "John Doe",
        "img_url": "toto"
      },
      {
        "name": "John Doe",
        "img_url": "toto"
      },
      {
        "name": "John Doe",
        "img_url": "toto"
      }
    ])
    // return FirestoreUtils.getCollection('users');
  }
}