import { User } from '@spin-the-team/models';
import { Action, State, StateContext } from '@ngxs/store';
import { inject, Injectable } from '@angular/core';
import { CreateUser, GetUsers } from '../actions/user.action';
import { UserService } from '@spin-the-team/firebase-helper';
import { tap } from 'rxjs';

export interface UserStateModel {
  listUsers: User[];
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    listUsers: [] as User[]
  }
})
@Injectable()
export class UserState {
  private readonly userService = inject(UserService);
  @Action(CreateUser)
  public createUser(ctx: StateContext<UserStateModel>, action: CreateUser) {
    this.userService.createUser(action.payload);

    const state = ctx.getState();
    ctx.setState({
      ...state,
      listUsers: [...state.listUsers, action.payload]
    });
  }

  @Action(GetUsers)
  public getUsers(ctx: StateContext<UserStateModel>) {
    this.userService.userList()
      .pipe(
        tap((users: User[]) => {
          ctx.setState({
            listUsers: users
          });
        }
      ))
      .subscribe();
  }
}
