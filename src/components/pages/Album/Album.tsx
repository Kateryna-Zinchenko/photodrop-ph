import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useToggle} from 'react-use';
import {
    AddedText, AddedWrapper,
    ArrowBack, CloseButton2, CloseButton4, CLoseWrapper2, CLoseWrapper4, Count, Header, Item, Label, Li,
    Logo,
    LogoWrapper, Photo, PhotosWrapper, PhotoWrapper, SearchInput, SearchWrapper, SelectedWrapper
} from './AlbumStyles';
import {AppDispatch} from "../../../App";
import {useDispatch, useSelector} from 'react-redux';
import {getAlbums, getUploadedPhotos, getUsers} from "../../../store/actions/user";
import {Dashboard} from '@uppy/react';
import {uppy} from "../../../main";
import AddPeople from "./AddPeople";
import SelectedPeople from "./SelectedPeople";

const Album = () => {
    const [selectedImages, setSelectedImages] = useState<any>([]);
    const [openedImages, setOpenedImages] = useState([]);
    const [isOpenImg, setIsOpenImg] = useToggle(false);
    const [isOpenSearch, setIsOpenSearch] = useToggle(false);
    const [isOpenAdded, setIsOpenAdded] = useToggle(false);
    const [selectedUsers, setSelectedUsers] = useState<any>([]);


    const nav = useNavigate();
    const users = useSelector((state: any) => state.userReducer.users);
    const albums = useSelector((state: any) => state.userReducer.albums);
    const photos = useSelector((state: any) => state.userReducer.photos);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getAlbums());
        dispatch(getUsers());
        const album = albums && albums.map((album: any) => album);

        dispatch(getUploadedPhotos())
    }, [])

    const handleLogoClick = () => {
        nav('/')
    }
    const handleBackClick = () => {
        nav('/')
    }

    //console.log(photos && photos.map((photo: any) => photo.url))

    // const onSelectFile = (e: any) => {
    //     const selectedFiles = e.target.files;
    //     const selectedFilesArray = Array.from(selectedFiles);
    //
    //     const imagesArray: any = selectedFilesArray.map((file: any) => {
    //         return URL.createObjectURL(file);
    //     });
    //
    //     setSelectedImages(selectedImages.concat(imagesArray));
    // }

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

    console.log(users)

    return (
        <main className='album'>
            {/*<OpenedImageWrapper isOpen={isOpenImg}>*/}
            {/*    <Wrapper />*/}
            {/*    <CloseWrapper1 onClick={() => {*/}
            {/*        setIsOpenImg(false)*/}
            {/*        setIsOpenSearch(false)*/}
            {/*        setIsOpenAdded(false)*/}
            {/*        setSelectedUsers([])*/}
            {/*    }}>*/}
            {/*        <CloseButton1/>*/}
            {/*    </CloseWrapper1>*/}
            {/*    <OpenedImageInner>*/}
            {/*        {openedImages.map((image) =>*/}
            {/*            <OpenedImage key={image} src={image}/>*/}
            {/*        )}*/}
            {/*    </OpenedImageInner>*/}
            {/*    <SearchWrapper isOpenSearch={isOpenSearch}>*/}
            {/*        <CLoseWrapper2 onClick={() => {*/}
            {/*            setIsOpenSearch(false)*/}
            {/*        }}>*/}
            {/*            <CloseButton2/>*/}
            {/*        </CLoseWrapper2>*/}
            {/*        <Header>*/}
            {/*            <SearchInput placeholder='Search' onChange={inputHandler}/>*/}
            {/*        </Header>*/}
            {/*        <ul>*/}
            {/*            {filteredData && filteredData.map((user: any) =>*/}
            {/*                <Li key={user.id}*/}
            {/*                    assigned={selectedUsers.includes(user)}*/}
            {/*                    onClick={() => selectedUsers.includes(user) ? alert('User already exists') :*/}
            {/*                        onAddUserClick(user)}>*/}
            {/*                    {user.phone}*/}
            {/*                    <AddedText assigned={selectedUsers.includes(user)}>*/}
            {/*                        added*/}
            {/*                    </AddedText>*/}
            {/*                </Li>*/}
            {/*            )}*/}
            {/*        </ul>*/}
            {/*    </SearchWrapper>*/}
            {/*    <div onClick={() => setIsOpenSearch(true)}>*/}
            {/*        <AddPeople/>*/}
            {/*    </div>*/}

            {/*    <Button position bottom='20px' background='#fff' color='#5C5C5C' z_index='2'>Save</Button>*/}

            {/*    <AddedWrapper isOpenAdded={isOpenAdded}>*/}
            {/*        <CLoseWrapper2 onClick={() => {*/}
            {/*            setIsOpenAdded(false)*/}
            {/*        }}>*/}
            {/*            <CloseButton2/>*/}
            {/*        </CLoseWrapper2>*/}
            {/*        <ul>*/}
            {/*            {selectedUsers.length > 0 ?*/}
            {/*                selectedUsers.map((user: any) =>*/}
            {/*                    <Item key={user.id}>*/}
            {/*                    {user.phone}*/}
            {/*                        <CLoseWrapper4 onClick={() => {*/}
            {/*                            setSelectedUsers(selectedUsers.filter((e: any) => e !== user))*/}
            {/*                        }}>*/}
            {/*                            <CloseButton4/>*/}
            {/*                        </CLoseWrapper4>*/}
            {/*                    </Item>) :*/}
            {/*                <div>Users not added</div>*/}
            {/*            }*/}
            {/*        </ul>*/}
            {/*    </AddedWrapper>*/}

            {/*    <SelectedWrapper onClick={() => setIsOpenAdded()}>*/}
            {/*        <SelectedPeople/>*/}
            {/*        <Count>*/}
            {/*            {selectedUsers.length}*/}
            {/*        </Count>*/}
            {/*    </SelectedWrapper>*/}

            {/*</OpenedImageWrapper>*/}
            <LogoWrapper>
                <ArrowBack onClick={handleBackClick}/>
                <Logo src='/assets/images/logo.png' onClick={handleLogoClick}/>
            </LogoWrapper>

            <Dashboard
                uppy={uppy}
            />

            <PhotosWrapper>
                {
                    photos && photos.map((photo: any) => {
                        return (
                            <div>
                                <PhotoWrapper>
                                    <Photo key={photo.id} src={photo.url} onClick={() => setIsOpenSearch(true)}/>
                                    <div onClick={() => setIsOpenSearch(true)}>
                                        <AddPeople/>
                                    </div>
                                    {/*<SelectedWrapper onClick={() => setIsOpenAdded(true)}>*/}
                                    {/*    <SelectedPeople/>*/}
                                    {/*    <Count>*/}
                                    {/*        {selectedUsers.length}*/}
                                    {/*    </Count>*/}
                                    {/*</SelectedWrapper>*/}
                                    <SearchWrapper isOpenSearch={isOpenSearch}>
                                        <CLoseWrapper2 onClick={() => {
                                            setIsOpenSearch(false)
                                        }}>
                                            <CloseButton2/>
                                        </CLoseWrapper2>
                                        <Header>
                                            <SearchInput placeholder='Search' onChange={inputHandler}/>
                                        </Header>
                                        <ul>
                                            {filteredData && filteredData.map((user: any) =>
                                                <Li key={user.id}
                                                    assigned={selectedUsers.includes(user)}
                                                    onClick={() => selectedUsers.includes(user) ? alert('User already exists') :
                                                        onAddUserClick(user)}>
                                                    {user.phone}
                                                    {/*<AddedText assigned={selectedUsers.includes(user)}>*/}
                                                    {/*    added*/}
                                                    {/*</AddedText>*/}
                                                    <CLoseWrapper4 selectedUsers={selectedUsers} onClick={() => {
                                                        setSelectedUsers(selectedUsers.filter((e: any) => e !== user))
                                                    }}>
                                                        <CloseButton4/>
                                                    </CLoseWrapper4>
                                                </Li>
                                            )}
                                        </ul>
                                    </SearchWrapper>
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
                                    {/*                    {user.phone}*/}
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
                                </PhotoWrapper>

                            </div>
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
        </main>
    );
};
export default Album;
