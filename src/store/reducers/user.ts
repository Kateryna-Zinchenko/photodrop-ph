import { createReducerFunction, ImmerReducer } from "immer-reducer";

interface UserState {
  isAuth: boolean;
  user: {
    id: string | null,
    login: string | null,
    email: string | null,
    name: string | null,
  }
}

const initialState: UserState = {
  isAuth: false,
  user: {
    id: null,
    login: null,
    email: null,
    name: null
  }
};


export class User extends ImmerReducer<UserState> {
  setAuth(isAuth: boolean) {
    this.draftState.isAuth = isAuth;
  }
  setUser(user: { email: null, fullname: null, id: null, login: null }) {
    this.draftState.user.id = user.id;
    this.draftState.user.name = user.fullname;
    this.draftState.user.login = user.login;
    this.draftState.user.email = user.email;
  }
}

export default createReducerFunction(User, initialState);
