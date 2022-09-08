import React, {useEffect} from 'react';
import {useToggle} from 'react-use';
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
    LogoWrapper, ModalWrapper
} from "./AlbumsStyles";
import {useNavigate} from 'react-router-dom';
import AlbumsIcon from "./AlbumsIcon";
import {useDispatch, useSelector} from 'react-redux';
import {getAlbums} from "../../../store/actions/user";
import {AppDispatch} from "../../../App";
import AlbumModal from "../AlbumModal/AlbumModal";

const Albums = () => {
    const nav = useNavigate();
    const albums = useSelector((state: any) => state.userReducer.albums);
    const dispatch = useDispatch<AppDispatch>();
    const [isOpen, setIsOpen] = useToggle(false);
    useEffect(() => {
        dispatch(getAlbums());
    }, [])
    const handleLogoClick = () => {
        nav('/');
    }
    const handleAddClick = () => {
        setIsOpen(true);
    }
    console.log()
    return (
        <main className='albums'>
            <ModalWrapper isOpen={isOpen}>
                <AlbumModal setIsOpen={setIsOpen}/>
            </ModalWrapper>
            <LogoWrapper>
                <Logo src='/assets/images/logo.png' onClick={handleLogoClick}/>
            </LogoWrapper>
            <AlbumsWrapper>
                {albums && albums.map((album: any) =>
                    <AlbumWrapper key={album.id}
                                  onClick={() => {
                                      nav(`/album=${album.id}`)
                                      console.log(album.id)
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
        </main>
    );
};
export default Albums;


