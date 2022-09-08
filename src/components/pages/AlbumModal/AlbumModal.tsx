import React, {useState} from 'react';
import Button from '../../common/button/Button';
import {DatePicker, Form, Input, Wrapper} from './AlbumModalStyles';
import {addAlbum, getAlbums} from "../../../store/actions/user";
import {AppDispatch} from "../../../App";
import { useDispatch } from 'react-redux';
import {CloseButton, CloseWrapper} from "./AlbumModalStyles";

type Props = {
    setIsOpen?: any,
}

const AlbumStyles = ({setIsOpen}: Props) => {
    const [name, setName] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [date, setDate] = useState(new Date());

    const dispatch = useDispatch<AppDispatch>();

    const onNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };

    const onLocationChange = (e: React.FormEvent<HTMLInputElement>) => {
        setLocation(e.currentTarget.value);
    };

    const onDateChange = (e: React.FormEvent<HTMLInputElement>) => {
        setDate(date);
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
                    <CloseWrapper onClick={() => setIsOpen()}>
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
                    <DatePicker
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

export default AlbumStyles;