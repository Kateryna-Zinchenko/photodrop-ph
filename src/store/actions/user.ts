import {User} from "../reducers/user";
import {createActionCreators} from "immer-reducer";
import {AsyncAction} from "./common";
import TokensLocalStorage from "../../utils/local-storage/TokensLocalStorage";

export const userActions = createActionCreators(User);

export type UserActions = ReturnType<
    typeof userActions.setAuth
    | typeof userActions.setAlbums
    | typeof userActions.setUsers
    | typeof userActions.setUser
    | typeof userActions.setUploadedPhotos
    | typeof userActions.setLoading
    | typeof userActions.setAssigned
    | typeof userActions.setError
    >

export const setLoading = (loading: boolean) =>
    (dispatch: any) => {
        dispatch(userActions.setLoading(loading))
    };

export const setError = (error: any) =>
    (dispatch: any) => {
        dispatch(userActions.setError(error))
    };

export const setAuthData =
    (login: string, password: string): AsyncAction =>
        async (dispatch, _, {mainApi}) => {
            try {
                const data = {login: login, password: password};
                dispatch(setLoading(true));
                const response = await mainApi.login(data)

                // @ts-ignore
                const token = response.token;

                if (token) {
                    const storage = TokensLocalStorage.getInstance();
                    storage.setAccessToken(token);
                    dispatch(userActions.setAuth(true));
                    dispatch(setLoading(false));
                } else {
                    console.log('error')
                }
            } catch (e: any) {
                dispatch(userActions.setError(e))
                dispatch(setLoading(false));
            }
        };

export const setAuth =
    (auth: boolean): AsyncAction =>
        async (dispatch) => {
            try {
                dispatch(userActions.setAuth(auth));

            } catch (e: any) {
                console.log(e)
            }
        };

export const getAlbums =
    (): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                dispatch(setLoading(true));
                const response = await mainProtectedApi.getAlbums();
                dispatch(userActions.setAlbums(response));
                dispatch(setLoading(false));
                dispatch(setAuth(true));
            } catch (e: any) {
                TokensLocalStorage.getInstance().clear();
                window.location.replace('/login');
                console.log(e)
            }
        };

export const addAlbum =
    (title: string, location: string, date: number): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                const data = {title: title, location: location, date: date};
                await mainProtectedApi.addAlbum(data);
            } catch (e: any) {
                console.log(e)
            }
        };

export const getUsers =
    (albumId: string): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                const response = await mainProtectedApi.getUploadPhotos(albumId);
                // @ts-ignore
                dispatch(userActions.setUsers(response.users));
            } catch (e: any) {
                console.log(e)
            }
        };

export const setUser =
    (id: string, phone: string, fullName: string, email: string, avatar: any): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                const data = {id: id, phone: phone, fullName: fullName, email: email, avatar: avatar};
                dispatch(userActions.setUser(data));
            } catch (e: any) {
                console.log(e)
            }
        };

export const getUploadedPhotos =
    (albumId: string): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                dispatch(setLoading(true));
                const response = await mainProtectedApi.getUploadPhotos(albumId);
                // @ts-ignore
                dispatch(userActions.setUploadedPhotos(response.photos));
                dispatch(setLoading(false))
            } catch (e: any) {
                console.log(e)
            }
        };

export const addSelectedUsers =
    (albumId: string, photoId: string, users: Array<string>): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                let orders = [{
                    photoId: photoId,
                    users: users
                }]
                const data = {albumId: albumId, orders: orders};
                //dispatch(setLoading(true));
                await mainProtectedApi.addSelectedUsers(data);
                //dispatch(setLoading(false));
                dispatch(userActions.setUploadedPhotos(null));
                dispatch(userActions.setAssigned(true));
            } catch (e: any){
                console.log(e)
            }
}
