import React from 'react';
import {useNavigate} from 'react-router-dom';
import {AddButton, Border, Logo, LogoWrapper, WrapperAlbums} from "./HeaderStyles";

const Header = () => {
    const nav = useNavigate();

    const handleClick = () => {
        nav('/login')
    }

    return (
        <main className='header'>
            <LogoWrapper>
                <Logo src='/assets/images/logo.png' onClick={handleClick}/>
            </LogoWrapper>
            <WrapperAlbums>
                <Logo src='/assets/images/logo.png' onClick={handleClick}/>
                <AddButton/>
            </WrapperAlbums>
            <Border/>
        </main>
    );
};

export default Header;
