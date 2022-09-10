import { createReducerFunction, ImmerReducer } from "immer-reducer";
import {getUsers} from "../actions/user";

interface UserState {
  isAuth: boolean;
  user: {
    id: string | null;
    phone: string | null;
    fullName: string | null;
    email: string | null;
    avatar: any | null
  };
  users: any;
  albums: any;
  photos: any;
}

const initialState: UserState = {
  isAuth: false,
  user: {
    id: null,
    phone: null,
    fullName: null,
    email: null,
    avatar: null
  },
  users: null,
  albums: null,
  photos: null,
};


export class User extends ImmerReducer<UserState> {
  setAuth(isAuth: boolean) {
    this.draftState.isAuth = isAuth;
  }

  setAlbums(albums: any) {
    this.draftState.albums = albums;
  }

  setUsers(users: any) {
    this.draftState.users = users;
  }

  // setUser(user: {id: null, phone: null, fullName: null, email: null, avatar: null}) {
  //   this.draftState.user.id = user.id;
  //   this.draftState.user.phone = user.phone;
  //   this.draftState.user.fullName = user.fullName;
  //   this.draftState.user.email = user.email;
  //   this.draftState.user.avatar = user.avatar;
  // }

  // setAlbum(album: { title: null, location: null, date: null, id: null }) {
  //   this.draftState.album.name = album.title;
  //   this.draftState.album.location = album.location;
  //   this.draftState.album.date = album.date;
  //   this.draftState.album.id = album.id;
  // }
}

export default createReducerFunction(User, initialState);
