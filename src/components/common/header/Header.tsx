import React from 'react';
import {Border, Logo} from "./HeaderStyles";

const Header = () => {
    return (
        <main className='header'>
            <Logo src='/assets/images/logo.png'/>
            <Border/>
        </main>
    );
};

export default Header;
