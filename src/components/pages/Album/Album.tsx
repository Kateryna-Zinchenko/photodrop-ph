import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useToggle} from 'react-use';
import {
    ArrowBack,
    CloseButton,
    CloseButton1, CLoseButton2,
    CloseWrapper,
    CloseWrapper1,
    Images,
    Img,
    ImgWrapper,
    Input,
    Label,
    Li,
    List,
    Logo,
    LogoWrapper,
    Header,
    OpenedImage,
    OpenedImageInner,
    OpenedImageWrapper, SearchInput,
    SearchWrapper,
    Wrapper
} from './AlbumStyles';
import Button from "../../common/button/Button";
import {AppDispatch} from "../../../App";
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from "../../../store/actions/user";

const Album = () => {
    const [selectedImages, setSelectedImages] = useState<any>([]);
    const [openedImages, setOpenedImages] = useState([]);
    const [isOpenImg, setIsOpenImg] = useToggle(false);
    const [isOpenSearch, setIsOpenSearch] = useToggle(false);

    const nav = useNavigate();
    const users = useSelector((state: any) => state.userReducer.users);
    const dispatch = useDispatch<AppDispatch>();

    const handleLogoClick = () => {
        nav('/')
    }
    const handleBackClick = () => {
        nav('/')
    }

    const onSelectFile = (e: any) => {
        const selectedFiles = e.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray: any = selectedFilesArray.map((file: any) => {
            return URL.createObjectURL(file);
        });

        setSelectedImages(selectedImages.concat(imagesArray));
    }

    const [inputText, setInputText] = useState("");

    let inputHandler = (e: any) => {
        const lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const filteredData = users.filter((user: any) => {
        if (inputText === '') {
            return user;
        }
        else {
            return user.phone.toLowerCase().includes(inputText)
        }
    })

    useEffect(() => {
        dispatch(getUsers());
    }, [])

    return (
        <main className='album'>
            <OpenedImageWrapper isOpen={isOpenImg}>
                <Wrapper onClick={() => {
                    setIsOpenImg(false)
                    setIsOpenSearch(false)
                }}/>
                <CloseWrapper1 onClick={() => {
                    setIsOpenImg(false)
                    setIsOpenSearch(false)
                }}>
                    <CloseButton1/>
                </CloseWrapper1>
                <OpenedImageInner>
                    {openedImages.map((image: any) => {
                        return (
                            <div>
                                <OpenedImage key={image} src={image} onClick={() => setIsOpenSearch(true)}/>
                                {/*<Hover/>*/}
                            </div>
                        )
                    })}
                </OpenedImageInner>
                <SearchWrapper isOpenSearch={isOpenSearch}>
                    <CLoseButton2 onClick={() => {setIsOpenSearch(false)}}/>
                    <Header>
                        <SearchInput placeholder='Search' onChange={inputHandler}/>
                    </Header>
                    <List>
                        {filteredData && filteredData.map((user: any) =>
                            <Li key={user.id}>{user.phone}</Li>
                        )}
                    </List>
                </SearchWrapper>
                <Button position bottom='20px' background='#fff' color='#5C5C5C' z_index='2'>Save</Button>
            </OpenedImageWrapper>
            <LogoWrapper>
                <ArrowBack onClick={handleBackClick}/>
                <Logo src='/assets/images/logo.png' onClick={handleLogoClick}/>
            </LogoWrapper>
            <Label>
                Add photos
                <Input type='file' onChange={onSelectFile} multiple/>
            </Label>
            <Images>
                {selectedImages && selectedImages.map((image: any) => {
                    return (
                        <ImgWrapper>
                            <CloseWrapper onClick={() => {
                                setSelectedImages(selectedImages.filter((e: any) => e !== image))
                            }}>
                                <CloseButton/>
                            </CloseWrapper>
                            <Img key={image} src={image}
                                 onClick={() => {
                                     setIsOpenImg()
                                     setOpenedImages(selectedImages.filter((e: any) => e === image))
                                 }}
                            />
                        </ImgWrapper>
                    )
                })}
            </Images>
        </main>
    );
};
export default Album;
