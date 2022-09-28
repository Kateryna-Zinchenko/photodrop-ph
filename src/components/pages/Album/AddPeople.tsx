import React, { Component } from 'react';
import { IoPersonAdd } from 'react-icons/io5';
import styled from 'styled-components';

class AddPeople extends Component {
    render() {
        return (
            <Wrapper title='Tag people'>
                <IoPersonAdd />
            </Wrapper>
        )
    }
}

export default AddPeople;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  opacity: 1;
  background: #fff;
  border-radius: 50%;
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;