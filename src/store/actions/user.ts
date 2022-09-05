import {User} from "../reducers/user";
import {createActionCreators} from "immer-reducer";
import {AsyncAction} from "./common";
import TokensLocalStorage from "../../utils/local-storage/TokensLocalStorage";

export const userActions = createActionCreators(User);

export type UserActions = ReturnType<typeof userActions.setAuth
    | typeof userActions.getAlbums>

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
