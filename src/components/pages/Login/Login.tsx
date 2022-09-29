import React, {useEffect, useState} from 'react';
import {Form, Input, Logo, LogoWrapper, Wrapper} from "./LoginStyles";
import Button from "../../common/button/Button";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {AppDispatch} from "../../../App";
import {setAuthData} from '../../../store/actions/user';
import {PropagateLoader} from 'react-spinners';
import {LoaderWrapper} from "../Albums/AlbumsStyles";

const Login = () => {
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const dispatch = useDispatch<AppDispatch>();
    const nav = useNavigate();
    const isAuth = useSelector((state: any) => state.userReducer.isAuth);
    const isLoading = useSelector((state: any) => state.userReducer.isLoading);

    const onLoginChange = (e: React.FormEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value);
    };

    const onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    };

    const onSignInClick = async () => {
        await dispatch(setAuthData(login, password));
    };

    const handleClick = () => {
        nav('/')
    }

    useEffect(() => {
            if (isAuth) {
                nav('/');
            }
        }
    )


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
                        </LoaderWrapper>                        :
                        <Form>
                            <Input
                                placeholder='login'
                                onChange={onLoginChange}
                                value={login}
                                type="text"
                                autoComplete='username'
                            />
                            <Input
                                placeholder='password'
                                onChange={onPasswordChange}
                                value={password}
                                type="password"
                                autoComplete='current-password'
                            />
                            <Button onClick={onSignInClick}>Sign in</Button>
                        </Form>
                }

            </Wrapper>
        </main>
    );
};

export default Login;
