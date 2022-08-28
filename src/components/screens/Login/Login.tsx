import React from 'react';
import {Input} from "./LoginStyles";
import Button from "../../common/button/Button";

const Login = () => {
    return (
        <main className='login'>
            <Input placeholder='login'/>
            <Input placeholder='password'/>
            <Button>Login</Button>
        </main>
    );
};

export default Login;
