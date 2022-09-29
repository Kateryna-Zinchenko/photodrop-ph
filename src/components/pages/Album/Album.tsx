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
import {getAlbums, getUploadedPhotos, getUsers} from "../../../store/actions/user";
import {Dashboard} from '@uppy/react';
import {uppy} from "../../../main";
import AddPeople from "./AddPeople";
import SelectedPeople from "./SelectedPeople";
import {PropagateLoader} from 'react-spinners';
import {LoaderWrapper} from "../Albums/AlbumsStyles";
import TokensLocalStorage from "../../../utils/local-storage/TokensLocalStorage";

const Album = () => {
    const [openedImage, setOpenedImage] = useState<string>('');
    const [isOpenImg, setIsOpenImg] = useToggle(false);
    const [isOpenSearch, setIsOpenSearch] = useToggle(false);
    const [isOpenAdded, setIsOpenAdded] = useToggle(false);
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

        window.localStorage.setItem('Id', params.id as string)

        if (isOpenImg === true) {
            document.body.style.overflow = 'hidden';
        }
        if (isOpenImg === false){
            document.body.style.overflow = 'unset';
        }
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

    // const onSaveClick = () => {
    //     dispatch(addSelectedUsers())
    // }


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
                    <OpenedImage src={openedImage}/>
                </OpenedImageInner>

                <SearchWrapper isOpenSearch={isOpenSearch}>
                    {/*<CLoseWrapper2 onClick={() => {*/}
                    {/*    setIsOpenSearch(false)*/}
                    {/*}}>*/}
                    {/*    <CloseButton2/>*/}
                    {/*</CLoseWrapper2>*/}
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
                                <CLoseWrapper4 selectedUsers={selectedUsers} onClick={() => {
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
                    <Button selectedUsers={selectedUsers}>Save</Button>
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
                                    <CLoseWrapper4 selectedUsers={selectedUsers} onClick={() => {
                                        setSelectedUsers(selectedUsers.filter((e: any) => e !== user))
                                    }}>
                                        <CloseButton4/>
                                    </CLoseWrapper4>
                                </Item>) :
                            <div>Users haven't been tagged yet</div>
                        }
                    </ul>
                    <Button selectedUsers={selectedUsers}>
                        Save
                    </Button>
                </AddedWrapper>
                {/*<SearchWrapper isOpenSearch={isOpenSearch}>*/}
                {/*    <CLoseWrapper2 onClick={() => {*/}
                {/*        setIsOpenSearch(false)*/}
                {/*    }}>*/}
                {/*        <CloseButton2/>*/}
                {/*    </CLoseWrapper2>*/}
                {/*    <Header>*/}
                {/*        <SearchInput placeholder='Search' onChange={inputHandler}/>*/}
                {/*    </Header>*/}
                {/*    <ul>*/}
                {/*        {filteredData && filteredData.map((user: any) =>*/}
                {/*            <Li key={user.id}*/}
                {/*                assigned={selectedUsers.includes(user)}*/}
                {/*                onClick={() => selectedUsers.includes(user) ? alert('User already exists') :*/}
                {/*                    onAddUserClick(user)}>*/}
                {/*                {user.phone}*/}
                {/*                <AddedText assigned={selectedUsers.includes(user)}>*/}
                {/*                    added*/}
                {/*                </AddedText>*/}
                {/*            </Li>*/}
                {/*        )}*/}
                {/*    </ul>*/}
                {/*</SearchWrapper>*/}
                {/*<div onClick={() => setIsOpenSearch(true)}>*/}
                {/*    <AddPeople/>*/}
                {/*</div>*/}

                {/*<Button position bottom='20px' background='#fff' color='#5C5C5C' z_index='2'>Save</Button>*/}

                {/*<AddedWrapper isOpenAdded={isOpenAdded}>*/}
                {/*    <CLoseWrapper2 onClick={() => {*/}
                {/*        setIsOpenAdded(false)*/}
                {/*    }}>*/}
                {/*        <CloseButton2/>*/}
                {/*    </CLoseWrapper2>*/}
                {/*    <ul>*/}
                {/*        {selectedUsers.length > 0 ?*/}
                {/*            selectedUsers.map((user: any) =>*/}
                {/*                <Item key={user.id}>*/}
                {/*                {user.phone}*/}
                {/*                    <CLoseWrapper4 onClick={() => {*/}
                {/*                        setSelectedUsers(selectedUsers.filter((e: any) => e !== user))*/}
                {/*                    }}>*/}
                {/*                        <CloseButton4/>*/}
                {/*                    </CLoseWrapper4>*/}
                {/*                </Item>) :*/}
                {/*            <div>Users not added</div>*/}
                {/*        }*/}
                {/*    </ul>*/}
                {/*</AddedWrapper>*/}

                {/*<SelectedWrapper onClick={() => setIsOpenAdded()}>*/}
                {/*    <SelectedPeople/>*/}
                {/*    <Count>*/}
                {/*        {selectedUsers.length}*/}
                {/*    </Count>*/}
                {/*</SelectedWrapper>*/}
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
                                                setOpenedImage(photo.url);
                                                setIsOpenSearch(true);
                                            }
                                            }/>
                                            <Hover onClick={() => setIsOpenImg(true)}>
                                                <div onClick={() => {
                                                    setIsOpenImg(true);
                                                    setOpenedImage(photo.url);
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
                        {/*<Images>*/}
                        {/*    {selectedImages && selectedImages.map((image: any) => {*/}
                        {/*        return (*/}
                        {/*            <ImgWrapper key={image}>*/}
                        {/*                <CloseWrapper onClick={() => {*/}
                        {/*                    setSelectedImages(selectedImages.filter((e: any) => e !== image))*/}
                        {/*                }}>*/}
                        {/*                    <CloseButton/>*/}
                        {/*                </CloseWrapper>*/}
                        {/*                <Img key={image} src={image}*/}
                        {/*                     onClick={() => {*/}
                        {/*                         setIsOpenImg()*/}
                        {/*                         setOpenedImages(selectedImages.filter((e: any) => e === image))*/}
                        {/*                     }}*/}
                        {/*                />*/}
                        {/*            </ImgWrapper>*/}
                        {/*        )*/}
                        {/*    })}*/}
                        {/*</Images>*/}
                    </div>
            }
        </main>
    );
};
export default Album;
