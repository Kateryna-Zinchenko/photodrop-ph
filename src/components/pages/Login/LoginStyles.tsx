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
  margin: 220px auto 0;
`;

export const Input = styled.input<{ errorString:string, error:any }>`
  background: #F4F4F4;
  border: ${({errorString, error}) => errorString.length === 0 && !error ? '1px solid #EEEEEE' : '1px solid firebrick'};
  border-radius: 10px;
  outline: none;
  padding: 0 13px;
  width: 345px;
  height: 40px;
  font-family: 'Futura PT Light', serif;
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
`;

export const ErrorCaption = styled.div`
  font-family: 'Futura PT Light', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  margin: 14px 0 0;
  color: firebrick;
`;