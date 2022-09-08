import user, {User} from "../reducers/user";
import {createActionCreators} from "immer-reducer";
import {AsyncAction} from "./common";
import TokensLocalStorage from "../../utils/local-storage/TokensLocalStorage";

export const userActions = createActionCreators(User);

export type UserActions = ReturnType<typeof userActions.setAuth
    | typeof userActions.setAlbums
    | typeof userActions.getPhotos
    >

export const setAuthData =
    (login: string, password: string): AsyncAction =>
        async (dispatch, _, {mainApi}) => {
            try {
                const data = {login: login, password: password};
                const response = await mainApi.login(data);

                // @ts-ignore
                const token = response.token;

                if (token) {
                    const storage = TokensLocalStorage.getInstance();
                    storage.setAccessToken(token);
                    dispatch(userActions.setAuth(true));
                } else {
                    console.log('Error')
                }
            } catch (e: any) {
                dispatch(e)            }
        };

export const setAuth =
    (auth: boolean): AsyncAction =>
        async (dispatch) => {
            try {
                dispatch(userActions.setAuth(auth));

            } catch (e: any) {
                dispatch(e)
            }
        };

export const getAlbums =
    (): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                const response = await mainProtectedApi.getAlbums();
                dispatch(userActions.setAlbums(response));
            } catch (e: any) {
                TokensLocalStorage.getInstance().clear()
                window.location.replace('/login')
            }
        };

export const addAlbum =
    (title: string, location: string, date: any): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                const data = {title: title, location: location, date: date};
                const response = await mainProtectedApi.addAlbum(data);
                console.log(response)
            } catch (e: any) {
                dispatch(e)
            }
        };

export const getPhotos =
    (albumId: string): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                const response = await mainProtectedApi.getPhotos(albumId);
                dispatch(userActions.getPhotos(response))
                console.log(response)
            } catch (e: any) {
                dispatch(e)
            }
        };
