import React from 'react';
import Button from '../../common/button/Button';
import {CloseButton, CloseWrapper, Form, Input, Logo, LogoWrapper, Wrapper} from './AlbumStyles';
import { useNavigate } from 'react-router-dom';

const AlbumStyles = () => {
    const nav = useNavigate();

    const handleClick = () => {
        nav('/albums')
    }

    return (
        <main className='album'>
            <Wrapper>
                <LogoWrapper>
                    <Logo src='/assets/images/logo.png' onClick={handleClick}/>
                    <CloseWrapper onClick={handleClick}>
                        <CloseButton/>
                    </CloseWrapper>
                </LogoWrapper>
                <Form>
                    <Input placeholder='Name'/>
                    <Input placeholder='Location'/>
                    <Input placeholder='Datapicker'/>
                    <Button>Save</Button>
                </Form>
            </Wrapper>
        </main>
    );
};

export default AlbumStyles;