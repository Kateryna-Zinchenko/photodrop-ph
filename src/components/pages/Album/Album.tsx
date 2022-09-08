import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useToggle} from 'react-use';
import {
    ArrowBack,
    CloseButton, CloseButton1,
    CloseWrapper, CloseWrapper1,
    Images,
    Img,
    ImgWrapper,
    Input,
    Label,
    Logo,
    LogoWrapper, OpenedImage, OpenedImageWrapper, Wrapper
} from './AlbumStyles';
import Button from "../../common/button/Button";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const Album = () => {
    const [selectedImages, setSelectedImages] = useState<any>([]);
    const [openedImages, setOpenedImages] = useState([]);
    const [isOpen, setIsOpen] = useToggle(false);

    const nav = useNavigate();

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

    return (
        <main className='album'>
            <OpenedImageWrapper isOpen={isOpen}>
                <Wrapper onClick={() => setIsOpen(false)}/>
                <CloseWrapper1 onClick={() => setIsOpen(false)}>
                    <CloseButton1/>
                </CloseWrapper1>
                {openedImages.map((image: any) => {
                    return (
                        <OpenedImage>
                            <img key={image} src={image}/>
                        </OpenedImage>

                    )
                })}

            </OpenedImageWrapper>
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
                            <CloseWrapper onClick={() => {
                                setSelectedImages(selectedImages.filter((e: any) => e !== image))
                            }}>
                                <CloseButton/>
                            </CloseWrapper>
                            <Img key={image} src={image}
                                 onClick={() => {
                                     setIsOpen()
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
