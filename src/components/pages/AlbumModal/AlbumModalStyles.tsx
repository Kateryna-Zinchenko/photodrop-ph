import styled from 'styled-components';

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  position: absolute;
  top: 20px;
  left: 10px;
`
export const CloseButton = styled.div`
  display: flex;
  position: relative;
  height: 20px;
  width: 20px;
  transform: rotate(45deg);
  cursor: pointer;

  &:before {
    position: absolute;
    width: 2px;
    height: 26px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    background: #5C5C5C;
    margin: 0;
    border-radius: 100px;
  }

  &:after {
    position: absolute;
    width: 26px;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    background: #5C5C5C;
    margin: 0;
    border-radius: 100px;
  }
`;

export const Wrapper = styled.div`
  overflow: hidden;
  
  @media (min-width: 1020px) {
    width: 600px;
  }
`;

export const Form = styled.div`
  position: relative;
  background: #FFF;
  padding: 40px 20px;
  border-radius: 20px;
  border: 1px solid #CECCB5;
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
  user-select: none;

  &:first-child {
    margin: 0 auto;
  }

  @media (min-width: 1020px) {
    width: 500px;
  }
`;