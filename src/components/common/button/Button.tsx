import React from 'react';
import styled from 'styled-components';

type Props = {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
                    children,
                    onClick
                }: Props) => {
    return (
        <Wrapper onClick={onClick}>
            {children}
        </Wrapper>
    );
};

export default Button;

const Wrapper = styled.button<Props>`
  display: block;
  width: 345px;
  height: 50px;
  background: #3300CC;
  border: none;
  border-radius: 50px;
  margin: 20px auto 0;
  padding: 14px 0;
  font-family: 'Futura PT Medium',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;
`;