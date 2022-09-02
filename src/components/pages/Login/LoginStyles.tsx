import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const LogoWrapper = styled.div`
  border-bottom: 1px solid #F1F0EC;
  padding: 0 0 18px;
`;

export const Logo = styled.img`
  width: 125px;
  height: 16px;
  cursor: pointer;
  margin: 20px auto 0;
`;

export const Form = styled.div`
  margin: 190px 0 0;
`;

export const Input = styled.input`
  background: #F4F4F4;
  border: 1px solid #EEEEEE;
  border-radius: 10px;
  outline: none;
  padding: 0 13px;
  width: 345px;
  height: 40px;
  font-family: 'Futura PT Light',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #262626;
  margin: 20px auto 0;
  
  &:first-child {
    margin: 0 auto;
  }
`;