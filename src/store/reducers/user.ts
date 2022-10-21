import { createReducerFunction, ImmerReducer } from "immer-reducer";

interface UserState {
  isLoading: boolean;
  isAuth: boolean;
  isAssigned: boolean;
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
  error: any
}

const initialState: UserState = {
  isLoading: false,
  isAuth: false,
  isAssigned: false,
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
  error: null
};


export class User extends ImmerReducer<UserState> {
  setLoading(isLoading: boolean) {
    this.draftState.isLoading = isLoading;
  }

  setAuth(isAuth: boolean) {
    this.draftState.isAuth = isAuth;
  }

  setAlbums(albums: any) {
    this.draftState.albums = albums;
  }

  setUsers(users: any) {
    this.draftState.users = users.map((user: any) => ({...user, assigned: false }));
  }

  setUser(user: {id: string, phone: string, fullName: string, email: string, avatar: any}) {
    this.draftState.user.id = user.id;
    this.draftState.user.phone = user.phone;
    this.draftState.user.fullName = user.fullName;
    this.draftState.user.email = user.email;
    this.draftState.user.avatar = user.avatar;
  }

  setUploadedPhotos(photos: any) {
    this.draftState.photos = photos;
  }

  setAssigned(isAssigned: boolean) {
    this.draftState.isAssigned = isAssigned;
  }

  setError(error: any) {
    this.draftState.error = error;
  }

}

export default createReducerFunction(User, initialState);
