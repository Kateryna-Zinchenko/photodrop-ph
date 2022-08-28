import styled from 'styled-components';

export const Input = styled.input`
  background: #F4F4F4;
  border: 1px solid #EEEEEE;
  border-radius: 10px;
  outline: none;
  padding: 0 13px;
  width: 345px;
  height: 40px;
  //font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #262626;
  margin: 20px auto 0;
  
  &:first-child {
    margin: 200px auto 0;
  }
`;

export const Button = styled.button`
  display: block;
  width: 345px;
  height: 50px;
  background: #3300CC;
  border: none;
  border-radius: 50px;
  margin: 20px auto 0;
  //font-family: 'Futura PT';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;
`;