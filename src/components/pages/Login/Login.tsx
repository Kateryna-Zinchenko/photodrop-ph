import React, {useEffect, useState} from 'react';
import {Form, Input, Logo, LogoWrapper, Wrapper} from "./LoginStyles";
import Button from "../../common/button/Button";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {AppDispatch} from "../../../App";
import {setAuthData} from '../../../store/actions/user';

const Login = () => {
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const dispatch = useDispatch<AppDispatch>();
    const nav = useNavigate();
    const isAuth = useSelector((state: any) => state.userReducer.isAuth);

    const onLoginChange = (e: React.FormEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value);
    };

    const onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    };

    const onSignInClick = async () => {
        await dispatch(setAuthData(login, password))
    };

    const handleClick = () => {
        nav('/')
    }

    useEffect(() => {
            if (isAuth) {
                nav('/albums');
            }
        }
    )

    return (
        <main className='login'>
            <Wrapper>
                <LogoWrapper>
                    <Logo src='/assets/images/logo.png' onClick={handleClick}/>
                </LogoWrapper>
                <Form>
                    <Input
                        placeholder='login'
                        onChange={onLoginChange}
                        value={login}
                        type="text"
                    />
                    <Input
                        placeholder='password'
                        onChange={onPasswordChange}
                        value={password}
                        type="password"
                    />
                    <Button onClick={onSignInClick}>Sign in</Button>
                </Form>
            </Wrapper>
        </main>
    );
};

export default Login;
