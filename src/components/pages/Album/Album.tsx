import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useToggle} from 'react-use';
import {
    AddedWrapper,
    ArrowBack,
    Button, CloseButton1,
    CloseButton2,
    CloseButton4, CloseWrapper1,
    CLoseWrapper2,
    CLoseWrapper4,
    Count,
    Header, Hover,
    Item,
    Li,
    Logo,
    LogoWrapper, OpenedImage, OpenedImageInner,
    OpenedImageWrapper,
    Photo,
    PhotosWrapper, PhotoWrapper,
    SearchInput,
    SearchWrapper,
    SelectedWrapper,
    Wrapper
} from './AlbumStyles';
import {AppDispatch} from "../../../App";
import {useDispatch, useSelector} from 'react-redux';
import {addSelectedUsers, getAlbums, getUploadedPhotos, getUsers} from "../../../store/actions/user";
import {Dashboard} from '@uppy/react';
import {uppy} from "../../../main";
import AddPeople from "./AddPeople";
import SelectedPeople from "./SelectedPeople";
import {PropagateLoader} from 'react-spinners';
import {LoaderWrapper} from "../Albums/AlbumsStyles";
import TokensLocalStorage from "../../../utils/local-storage/TokensLocalStorage";

const Album = () => {
    const [isOpenImg, setIsOpenImg] = useToggle(false);
    const [isOpenSearch, setIsOpenSearch] = useToggle(false);
    const [isOpenAdded, setIsOpenAdded] = useToggle(false);
    const [reload, setReload] = useToggle(false);
    const [openedImage, setOpenedImage] = useState<any>();
    const [selectedUsers, setSelectedUsers] = useState<any>([]);

    const nav = useNavigate();
    const params = useParams();
    const dispatch = useDispatch<AppDispatch>();

    const users = useSelector((state: any) => state.userReducer.users);
    const photos = useSelector((state: any) => state.userReducer.photos);
    const isLoading = useSelector((state: any) => state.userReducer.isLoading);

    useEffect(() => {
        dispatch(getUsers(params.id as string));
        dispatch(getUploadedPhotos(params.id as string));

        if (reload) {
            dispatch(getUploadedPhotos(params.id as string));
        }

        window.localStorage.setItem('Id', params.id as string);
    }, [])

    const handleLogoClick = () => {
        nav('/')
    }
    const handleBackClick = () => {
        nav('/')
    }

    const [inputText, setInputText] = useState("");

    const inputHandler = (e: any) => {
        const lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const filteredData =
        users && users.filter((user: any) => {
            if (inputText === '') {
                return user;
            } else {
                return user.phone.toLowerCase().includes(inputText);
            }
        });

    const onAddUserClick = (user: any) => {
        setSelectedUsers([...selectedUsers, user]);
    }

    const onSaveClick = (albumId: string, photoId: string, users: Array<string>) => {
        dispatch(addSelectedUsers(albumId, photoId, users));
        setIsOpenImg(false)
        setIsOpenSearch(false);
        setIsOpenAdded(false);
        setSelectedUsers([]);
    }

    return (
        <main className='album'>
            <OpenedImageWrapper isOpen={isOpenImg}>
                <Wrapper/>
                <CloseWrapper1 onClick={() => {
                    setIsOpenImg(false)
                    document.body.style.overflow = 'unset';
                    setIsOpenSearch(false)
                    setIsOpenAdded(false)
                    setSelectedUsers([])
                }}>
                    <CloseButton1/>
                </CloseWrapper1>
                <OpenedImageInner>
                    {
                        openedImage &&
                        <OpenedImage src={openedImage.url}/>
                    }
                </OpenedImageInner>

                <SearchWrapper isOpenSearch={isOpenSearch}>
                    <Header>
                        <SearchInput placeholder='Search' onChange={inputHandler}/>
                    </Header>
                    <ul>
                        {filteredData && filteredData.map((user: any) =>
                            <div key={user.id}>
                                <Li key={user.id}
                                    assigned={selectedUsers.includes(user)}
                                    onClick={() => selectedUsers.includes(user) ? alert('User already exists') :
                                        onAddUserClick(user)}>
                                    {user.phone}
                                </Li>
                                <CLoseWrapper4 assigned={selectedUsers.includes(user)} onClick={() => {
                                    setSelectedUsers(selectedUsers.filter((e: any) => e !== user))
                                }}>
                                    <CloseButton4/>
                                </CLoseWrapper4>
                            </div>
                        )}
                    </ul>
                    <SelectedWrapper onClick={() => setIsOpenAdded(true)}>
                        <SelectedPeople/>
                        <Count>
                            {selectedUsers.length}
                        </Count>
                    </SelectedWrapper>
                    {
                        openedImage &&
                        <Button
                            selectedUsers={selectedUsers}
                            onClick={() => {
                                const usersId = selectedUsers && selectedUsers.map((user: any) => {
                                    return user.id
                                })
                                onSaveClick(params.id as string, openedImage.id, usersId)
                                dispatch(getUploadedPhotos(params.id as string));
                                setReload(true)
                            }}>
                            Save
                        </Button>
                    }
                </SearchWrapper>
                <AddedWrapper selectedUsers={selectedUsers} isOpenAdded={isOpenAdded}>
                    <CLoseWrapper2 onClick={() => {
                        setIsOpenAdded(false)
                    }}>
                        <CloseButton2/>
                    </CLoseWrapper2>
                    <ul>
                        {selectedUsers.length > 0 ?
                            selectedUsers.map((user: any) =>
                                <Item key={user.id}>
                                    {user.phone}
                                    <CLoseWrapper4 assigned={selectedUsers} onClick={() => {
                                        setSelectedUsers(selectedUsers.filter((e: any) => e !== user))
                                    }}>
                                        <CloseButton4/>
                                    </CLoseWrapper4>
                                </Item>) :
                            <div>Users haven't been tagged yet</div>
                        }
                    </ul>
                    <Button selectedUsers={selectedUsers}
                            onClick={() => {
                                const usersId = selectedUsers && selectedUsers.map((user: any) => {
                                    return user.id
                                })
                                onSaveClick(params.id as string, openedImage.id, usersId)
                                setReload(true)
                            }}>
                        Save
                    </Button>
                </AddedWrapper>
            </OpenedImageWrapper>

            <LogoWrapper>
                <ArrowBack onClick={handleBackClick}/>
                <Logo src='/assets/images/logo.png' onClick={handleLogoClick}/>
            </LogoWrapper>

            {
                isLoading ?
                    <LoaderWrapper>
                        <PropagateLoader color='#3300CC' loading={isLoading}/>
                    </LoaderWrapper>
                    :
                    <div>
                        <Dashboard
                            uppy={uppy}
                        />

                        <PhotosWrapper isOpenImg={isOpenImg}>
                            {
                                photos && photos.map((photo: any) => {
                                    return (
                                        <PhotoWrapper key={photo.id} onClick={() => {
                                            setIsOpenImg(true)
                                            document.body.style.overflow = 'hidden';
                                        }}>
                                            <Photo src={photo.url} onClick={() => {
                                                setIsOpenImg(true);
                                                setOpenedImage(photo);
                                                setIsOpenSearch(true);
                                            }
                                            }/>
                                            <Hover onClick={() => setIsOpenImg(true)}>
                                                <div onClick={() => {
                                                    setIsOpenImg(true);
                                                    setOpenedImage(photo);
                                                    setIsOpenSearch(true);
                                                }}>
                                                    <AddPeople/>
                                                </div>
                                            </Hover>
                                        </PhotoWrapper>
                                    )
                                })
                            }
                        </PhotosWrapper>
                    </div>
            }
        </main>
    );
};
export default Album;
