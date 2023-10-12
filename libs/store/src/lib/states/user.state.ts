import { User } from '@spin-the-team/models';
import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { CreateUser } from '../actions/user.action';

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
  @Action(CreateUser)
  public createUser(ctx: StateContext<UserStateModel>, action: CreateUser) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      listUsers: [...state.listUsers, action.payload]
    });
  }
}
