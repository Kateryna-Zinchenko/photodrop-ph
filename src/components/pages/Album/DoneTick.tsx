import React from 'react';
import styled from 'styled-components';
import {MdDone} from 'react-icons/md'

const DoneTick = () => {
    return (
        <Wrapper>
            <MdDone />
        </Wrapper>
    );
};

export default DoneTick;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  opacity: 1;
  border-radius: 50%;
  z-index: 1;
`;