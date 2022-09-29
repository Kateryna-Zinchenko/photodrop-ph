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
  background: rgba(253, 253, 253, 0.65);
  border-radius: 50%;
  z-index: 1;
  position: absolute;
  right: 3px;
  bottom: 3px;
  cursor: pointer;
  
  &:hover {
    background: #fff;
    transition: 0.2s;
  }
`;