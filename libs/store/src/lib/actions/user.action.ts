import { User } from '@spin-the-team/models';

export class CreateUser {
  static readonly type = '[User] Create User';
  constructor(public payload: User) {}

}
