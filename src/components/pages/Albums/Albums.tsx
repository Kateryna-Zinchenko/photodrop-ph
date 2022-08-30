import React from 'react';
import {AlbumInfo, AlbumLocation, AlbumName, AlbumWrapper, Icon, Logo, LogoWrapper, Wrapper} from "./AlbumsStyles";
import { useNavigate } from 'react-router-dom';

const Albums = () => {
    const nav = useNavigate();

    const handleClick = () => {
        nav('/')
    }

    return (
        <main className='albums'>
            <LogoWrapper>
                <Logo src='/assets/images/logo.png' onClick={handleClick}/>
            </LogoWrapper>
            <Wrapper>
                <AlbumWrapper>
                    <Icon/>
                    <AlbumInfo>
                        <AlbumName>Summer</AlbumName>
                        <AlbumLocation>Kyiv</AlbumLocation>
                    </AlbumInfo>
                </AlbumWrapper>
            </Wrapper>
        </main>
    );
};

export default Albums;