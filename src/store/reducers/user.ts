import { createReducerFunction, ImmerReducer } from "immer-reducer";

interface UserState {
  isAuth: boolean;
  user: {
    id: string | null,
    login: string | null,
    email: string | null,
    name: string | null,
  };
  albums: any;
  album: {
    name: string | null,
    location: string | null,
    id: string | null
  }
}

const initialState: UserState = {
  isAuth: false,
  user: {
    id: null,
    login: null,
    email: null,
    name: null
  },
  albums: null,
  album: {
    name: null,
    location: null,
    id: null,
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

  getAlbums(albums: any) {
    this.draftState.albums = albums;
  }
}

export default createReducerFunction(User, initialState);
