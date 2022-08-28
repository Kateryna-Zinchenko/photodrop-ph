import React from 'react';
import styled from 'styled-components';

type Props = {
    children: React.ReactNode;
}

const Button = ({
                    children
                }: Props) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default Button;

const Wrapper = styled.div`
  display: block;
  width: 345px;
  height: 50px;
  background: #3300CC;
  border: none;
  border-radius: 50px;
  margin: 20px auto 0;
  padding: 14px 0;
  //font-family: 'Futura PT';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;
`;