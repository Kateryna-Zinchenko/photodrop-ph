import React from 'react';
import styled from 'styled-components';

type Props = {
    children: React.ReactNode;
    disabled?: any;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    position?: boolean,
    margin?: string,
    bottom?: string,
    left?: string,
    transform?: string,
    color?: string,
    background?: string,
    border?: string,
    cursorNone?: boolean,
    z_index?: string
}

const Button = ({
                    children,
                    disabled,
                    onClick,
                    position,
                    margin,
                    bottom,
                    left,
                    transform,
                    color,
                    background,
                    border,
                    cursorNone,
                    z_index
                }: Props) => {
    return (
        <Wrapper disabled={disabled} onClick={onClick} position={position} margin={margin} bottom={bottom} transform={transform}
                 left={left} color={color} background={background} border={border} cursorNone={cursorNone}
                 z_index={z_index}
        >
            {children}
        </Wrapper>
    );
};

export default Button;

const Wrapper = styled.button<Props>`
  display: block;
  width: 345px;
  height: 50px;
  margin: ${({margin}) => margin ? margin : '20px auto 0'};
  padding: 14px 0;
  font-family: 'Futura PT Medium',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: ${({color}) => color ? color : '#FFFFFF'};
  background: ${({background}) => background ? background : '#3300CC'};
  border: ${({border}) => border ? border : 'none'};
  border-radius: 50px;
  cursor: ${({cursorNone}) => cursorNone ? 'auto' : 'pointer'};
  position: ${({position}) => position ? 'fixed' : 'unset'};
  bottom: ${({bottom}) => bottom ? bottom : 'unset'};
  left: ${({left}) => left ? left : 'unset'};
  transform: ${({transform}) => transform ? transform : 'unset'};
  z-index: ${({z_index}) => z_index ? z_index : 'unset'};
  
  &:hover {
    background: ${({background}) => background ? background : '#2d00ad'};
    transition: 0.3s;
  }
  
  //@media (max-width: 425px) {
  //  width: 175px;
  //}
`;