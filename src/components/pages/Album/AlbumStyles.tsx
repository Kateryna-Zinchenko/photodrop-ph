import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const LogoWrapper = styled.div`
  border-bottom: 1px solid #F1F0EC;
  padding: 0 0 18px;
  position: relative;
`;

export const Logo = styled.img`
  width: 125px;
  height: 16px;
  cursor: pointer;
  margin: 20px auto 0;
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  position: absolute;
  top: -2px;
  left: 15px;
  cursor: pointer;
`
export const CloseButton = styled.div`
  display: flex;
  position: relative;
  height: 20px;
  width: 20px;
  transform: rotate(45deg);
  &:before {
    position: absolute;
    width: 2px;
    height: 28px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    background: #262626;
    margin: 0;
    border-radius: 100px;
  }
  &:after {
    position: absolute;
    width: 28px;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    background: #262626;
    margin: 0;
    border-radius: 100px;
  }
`;

export const Form = styled.div`
  margin: 190px 0 0;
`;

export const Input = styled.div`
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