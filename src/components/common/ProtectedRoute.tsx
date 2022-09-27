import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import TokensLocalStorage from "../../utils/local-storage/TokensLocalStorage";
import {getAlbums} from "../../store/actions/user";

const ProtectedRoute = ({children}: any) => {
    const isAuth = useSelector((state: any) => state.userReducer.isAuth)
    const dispatch = useDispatch<any>();

    if(isAuth && TokensLocalStorage.getInstance().getAccessToken()){
        return children
    }

    if (!isAuth && TokensLocalStorage.getInstance().getAccessToken()){
        dispatch(getAlbums())
    }

    return children

};

export default ProtectedRoute;