import React, {useEffect, useState} from 'react';
import {ErrorCaption, Form, Input, Logo, LogoWrapper, Wrapper} from "./LoginStyles";
import Button from "../../common/button/Button";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {AppDispatch} from "../../../App";
import {setAuthData, setError} from '../../../store/actions/user';
import {PropagateLoader} from 'react-spinners';
import {LoaderWrapper} from "../Albums/AlbumsStyles";
import {State} from "../../../store";

const Login = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorString, setErrorString] = useState<string>('')
    const [disabled, setDisabled] = useState<boolean>(true)

    const errors = ['Enter login and password', 'Incorrect login or password'];

    const dispatch = useDispatch<AppDispatch>();
    const nav = useNavigate();

    const isAuth = useSelector((state: State) => state.userReducer.isAuth);
    const isLoading = useSelector((state: State) => state.userReducer.isLoading);
    const error = useSelector((state: State) => state.userReducer.error);

    const onLoginChange = (e: React.FormEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value);
        if (e.currentTarget.value !== '') {
            setDisabled(false)
        }
    };

    const onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    };

    const onSignInClick = async () => {
        if (login.length || password.length === 0) {
            dispatch(setError(null));
            setErrorString(errors[0]);
        }
        if (login.length || password.length !== 0) {
            setErrorString('');
            await dispatch(setAuthData(login, password));
        }
    };

    const handleClick = () => {
        nav('/')
    }

    useEffect(() => {
        if (isAuth) {
            nav('/');
        }
    }, [isAuth])

    return (
        <main className='login'>
            <Wrapper>
                <LogoWrapper>
                    <Logo src='/assets/images/logo.png' onClick={handleClick}/>
                </LogoWrapper>
                {
                    isLoading ?
                        <LoaderWrapper>
                            <PropagateLoader color='#3300CC' loading={isLoading}/>
                        </LoaderWrapper> :
                        <Form>
                            <Input
                                placeholder='login'
                                onChange={onLoginChange}
                                value={login}
                                type="text"
                                autoComplete='username'
                                spellCheck='false'
                                errorString={errorString}
                                error={error}
                            />
                            <Input
                                placeholder='password'
                                onChange={onPasswordChange}
                                value={password}
                                type="password"
                                autoComplete='current-password'
                                spellCheck='false'
                                errorString={errorString}
                                error={error}
                            />
                            <Button onClick={onSignInClick}
                                    disabled={disabled}
                            >
                                Sign in
                            </Button>
                            <ErrorCaption>
                                {error ? 'Incorrect login or password' :
                                    errorString !== '' && errorString}
                            </ErrorCaption>
                        </Form>
                }
            </Wrapper>
        </main>
    );
};

export default Login;
