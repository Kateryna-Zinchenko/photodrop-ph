import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowBack,
    CloseButton,
    CloseWrapper,
    Images,
    Img,
    ImgWrapper,
    Input,
    Label,
    Logo,
    LogoWrapper
} from './AlbumStyles';
import {AppDispatch} from "../../../App";
import { useDispatch, useSelector } from 'react-redux';
import Button from "../../common/button/Button";
const Album = () => {
    const [selectedImages, setSelectedImages] = useState([]);

    const nav = useNavigate();

    const dispatch = useDispatch<AppDispatch>();

    const albums = useSelector((state: any) => state.userReducer.albums);

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

        setSelectedImages(imagesArray);
    }

    return (
        <main className='album'>
            <LogoWrapper>
                <ArrowBack onClick={handleBackClick}/>
                <Logo src='/assets/images/logo.png' onClick={handleLogoClick}/>
            </LogoWrapper>
            {selectedImages.length !== 0 &&
                <Button
                    position margin='0' bottom='80px' left='50%' transform='translate(-50%, 0%)' background='none'
                    color='#5C5C5C' border='0.5px solid #5C5C5C' cursorNone
                >
                    Chosen: {selectedImages && selectedImages.length}
                </Button>
            }
            <Label>
                Upload photos
                <Input type='file' placeholder='Upload photo' onChange={onSelectFile} multiple/>
            </Label>
            <Images>
                {selectedImages && selectedImages.map((image: any) => {
                    return (
                        <ImgWrapper>
                            <CloseWrapper onClick={() =>
                                setSelectedImages(selectedImages.filter((e) => e !== image))}>
                                <CloseButton/>
                            </CloseWrapper>
                            <Img key={image} src={image}/>
                        </ImgWrapper>
                    )
                })}
            </Images>
        </main>
    );
};
export default Album;
