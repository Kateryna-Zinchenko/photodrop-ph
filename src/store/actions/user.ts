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
    | typeof userActions.setUploadedPhotos>

export const setAuthData =
    (login: string, password: string): AsyncAction =>
        async (dispatch, _, {mainApi}) => {
            try {
                const data = {login: login, password: password};
                const response = await mainApi.login(data)

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
                console.log(e)
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
                const response = await mainProtectedApi.getAlbums();
                dispatch(userActions.setAlbums(response));
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
    (): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                const response = await mainProtectedApi.getUploadPhotos();
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
    (): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                const response = await mainProtectedApi.getUploadPhotos();
                // @ts-ignore
                dispatch(userActions.setUploadedPhotos(response.photos));
            } catch (e: any) {
                console.log(e)
            }
        };

// export const uploadPhoto =
//     (albumId: string, contentType: string): AsyncAction =>
//         async (dispatch, _, {mainProtectedApi}) => {
//             try {
//                 const data = {albumId: albumId, contentType: contentType};
//                 const url: any = await mainProtectedApi.getUrl(data);
//
//             } catch (e: any){
//                 dispatch(e)
//             }
// }
