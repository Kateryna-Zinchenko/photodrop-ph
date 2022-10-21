import React, {useState} from 'react';
import Button from '../../common/button/Button';
import {Form, Input, Wrapper} from './AlbumModalStyles';
import {addAlbum, getAlbums} from "../../../store/actions/user";
import {AppDispatch} from "../../../App";
import { useDispatch } from 'react-redux';
import {CloseButton, CloseWrapper} from "./AlbumModalStyles";

type Props = {
    setIsOpen?: any,
}

const AlbumModal = ({setIsOpen}: Props) => {
    const [name, setName] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [date, setDate] = useState<number>(0);

    const dispatch = useDispatch<AppDispatch>();

    const onNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };

    const onLocationChange = (e: React.FormEvent<HTMLInputElement>) => {
        setLocation(e.currentTarget.value);
    };

    const onDateChange = (e: React.FormEvent<HTMLInputElement>) => {
        setDate(Number(new Date(e.currentTarget.value).valueOf()));
        console.log(Number(new Date(e.currentTarget.value).valueOf()))
    };

    const onSaveClick = async () => {
        await dispatch(addAlbum(name, location, date));
        await dispatch(getAlbums());
        setIsOpen();
    };

    return (
        <main className='add-album'>
            <Wrapper>
                <Form>
                    <CloseWrapper onClick={() => {
                        setIsOpen()
                        document.body.style.overflow = 'unset';
                    }}>
                        <CloseButton/>
                    </CloseWrapper>
                    <Input
                        type='text'
                        placeholder='Title'
                        onChange={onNameChange}
                    />
                    <Input
                        type='text'
                        placeholder='Location'
                        onChange={onLocationChange}
                    />
                    <Input
                        type='date'
                        placeholder='Datepicker'
                        onChange={onDateChange}
                    />
                    <Button onClick={onSaveClick}>Save</Button>
                </Form>
            </Wrapper>
        </main>
    );
};

export default AlbumModal;