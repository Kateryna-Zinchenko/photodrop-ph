import React from 'react';
import {
    AddButton,
    AlbumInfo,
    AlbumLocation,
    AlbumName,
    AlbumsWrapper,
    AlbumWrapper,
    ArrowRight,
    Icon,
    Logo,
    LogoWrapper
} from "./AlbumsStyles";
import {useNavigate} from 'react-router-dom';
import AlbumsIcon from "./AlbumsIcon";
import {useSelector} from 'react-redux';

const Albums = () => {
    const nav = useNavigate();
    const albums = useSelector((state: any) => state.userReducer.albums)

    const handleLogoClick = () => {
        nav('/')
    }

    const handleAddClick = () => {
        nav('/album')
    }

    return (
        <main className='albums'>
            <LogoWrapper>
                <Logo src='/assets/images/logo.png' onClick={handleLogoClick}/>
            </LogoWrapper>
            <AlbumsWrapper>
                {
                    albums.map((album: any) => <AlbumWrapper key={album.id}>
                    <Icon>
                        <AlbumsIcon/>
                    </Icon>
                    <AlbumInfo>
                        <AlbumName>Title</AlbumName>
                        <AlbumLocation>Location</AlbumLocation>
                    </AlbumInfo>
                    <ArrowRight/>
                </AlbumWrapper>)
                }
            </AlbumsWrapper>
            <AddButton onClick={handleAddClick}>+</AddButton>
        </main>
    );
};

export default Albums;