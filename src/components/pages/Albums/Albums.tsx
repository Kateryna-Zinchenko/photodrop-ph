import React from 'react';
import {
    AddButton,
    AlbumInfo,
    AlbumLocation,
    AlbumName,
    AlbumsWrapper,
    AlbumWrapper,
    ArrowRight,
    ButtonWrapper,
    Icon,
    Logo,
    LogoWrapper
} from "./AlbumsStyles";
//import IoIosPhotos from 'react-icons/io';
import {useNavigate} from 'react-router-dom';
import AlbumsIcon from "./AlbumsIcon";
//import { IconContext } from 'react-icons';

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
            <AlbumsWrapper>
                <AlbumWrapper>
                    <Icon>
                        <AlbumsIcon/>
                    </Icon>
                    <AlbumInfo>
                        <AlbumName>Title</AlbumName>
                        <AlbumLocation>Location</AlbumLocation>
                    </AlbumInfo>
                    <ArrowRight/>
                </AlbumWrapper>
            </AlbumsWrapper>
            {/*<ButtonWrapper>*/}
                <AddButton>+</AddButton>
            {/*</ButtonWrapper>*/}
        </main>
    );
};

export default Albums;