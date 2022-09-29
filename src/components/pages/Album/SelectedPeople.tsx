import React, { Component } from 'react';
import { IoPerson } from 'react-icons/io5';
import styled from 'styled-components';

class SelectedPeople extends Component {
    render() {
        return (
            <Wrapper>
                <IoPerson />
            </Wrapper>
        )
    }
}

export default SelectedPeople;

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
  //position: absolute;
  //right: 30%;
  //bottom: 50%;
  //transform: translate(0, -50%);
  //cursor: pointer;
`;