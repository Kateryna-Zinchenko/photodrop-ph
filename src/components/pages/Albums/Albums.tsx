import React, {useEffect, useState} from 'react';
import {useToggle} from 'react-use';
import {
    AddButton,
    AlbumInfo,
    AlbumLocation,
    AlbumName,
    AlbumsWrapper,
    AlbumWrapper,
    ArrowRight,
    Icon, LoaderWrapper,
    Logo,
    LogoWrapper, ModalWrapper
} from "./AlbumsStyles";
import {useNavigate} from 'react-router-dom';
import AlbumsIcon from "./AlbumsIcon";
import {useDispatch, useSelector} from 'react-redux';
import {getAlbums} from "../../../store/actions/user";
import {AppDispatch} from "../../../App";
import AlbumModal from "../AlbumModal/AlbumModal";
import {PropagateLoader} from 'react-spinners';
import {State} from "../../../store";

const Albums = () => {
        const nav = useNavigate();
        const albums = useSelector((state: State) => state.userReducer.albums);
        const isLoading = useSelector((state: State) => state.userReducer.isLoading);
        const isAuth = useSelector((state: State) => state.userReducer.isAuth);
        console.log(isAuth)
        const dispatch = useDispatch<AppDispatch>();

        const [isOpen, setIsOpen] = useToggle(false);

        useEffect(() => {
            if (!albums) dispatch(getAlbums());
        }, [])

        const handleLogoClick = () => {
            nav('/');
        }

        const handleAddClick = () => {
            setIsOpen(true);
            document.body.style.overflow = 'hidden';
        }

        return (
            <main className='albums'>
                <ModalWrapper isOpen={isOpen}>
                    <AlbumModal setIsOpen={setIsOpen}/>
                </ModalWrapper>
                <LogoWrapper>
                    <Logo src='/assets/images/logo.png' onClick={handleLogoClick}/>
                </LogoWrapper>
                {
                    isLoading ?
                        <LoaderWrapper>
                            <PropagateLoader color='#3300CC' loading={isLoading}/>
                        </LoaderWrapper>
                        :
                        <div>
                            <AlbumsWrapper>
                                {albums && albums.map((album: any) =>
                                    <AlbumWrapper key={album.id}
                                                  onClick={() => {
                                                      nav(`/album/${album.id}`)
                                                  }}>
                                        <Icon>
                                            <AlbumsIcon/>
                                        </Icon>
                                        <AlbumInfo>
                                            <AlbumName>{album.title}</AlbumName>
                                            <AlbumLocation>{album.location}</AlbumLocation>
                                        </AlbumInfo>
                                        <ArrowRight/>
                                    </AlbumWrapper>
                                )}
                            </AlbumsWrapper>
                            <AddButton onClick={handleAddClick}>+</AddButton>
                        </div>
                }

            </main>
        );
    }
;
export default Albums;


