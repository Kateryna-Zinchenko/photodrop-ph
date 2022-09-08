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
  photos: any;
  album: {
    name: string | null,
    location: string | null,
    date: string | null,
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
  photos: null,
  album: {
    name: null,
    location: null,
    date: null,
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

  setAlbums(albums: any) {
    this.draftState.albums = albums;
  }

  getPhotos(photos: any) {
    this.draftState.photos = photos;
  }

  // setAlbum(album: { title: null, location: null, date: null, id: null }) {
  //   this.draftState.album.name = album.title;
  //   this.draftState.album.location = album.location;
  //   this.draftState.album.date = album.date;
  //   this.draftState.album.id = album.id;
  // }


}

export default createReducerFunction(User, initialState);
