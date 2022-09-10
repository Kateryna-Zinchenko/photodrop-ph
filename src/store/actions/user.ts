import {User} from "../reducers/user";
import {createActionCreators} from "immer-reducer";
import {AsyncAction} from "./common";
import TokensLocalStorage from "../../utils/local-storage/TokensLocalStorage";

export const userActions = createActionCreators(User);

export type UserActions = ReturnType<typeof userActions.setAuth
    | typeof userActions.setAlbums
    | typeof userActions.setUsers
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
                    console.log('error')
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
                TokensLocalStorage.getInstance().clear();
                window.location.replace('/login');
            }
        };

export const addAlbum =
    (title: string, location: string, date: number): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                const data = {title: title, location: location, date: date};
                await mainProtectedApi.addAlbum(data);
            } catch (e: any) {
                dispatch(e)
            }
        };

export const getUsers =
    (): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                const response = await mainProtectedApi.getUsers();
                dispatch(userActions.setUsers(response))
                console.log(response)
            } catch (e: any) {
                dispatch(e)
            }
        };
