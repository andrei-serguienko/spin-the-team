import { Injectable } from '@angular/core';
import { User } from '@spin-the-team/models';

@Injectable({
  providedIn: 'root'
})
export class ActiveListService {
  public activeList: User[] = [];
}
